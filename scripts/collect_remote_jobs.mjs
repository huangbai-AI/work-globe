import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const projectDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const since = new Date("2026-06-18T00:00:00Z");
const until = new Date("2026-07-18T23:59:59Z");

const wwrFeeds = [
  "remote-programming-jobs",
  "remote-design-jobs",
  "remote-devops-sysadmin-jobs",
  "remote-product-jobs",
  "remote-sales-and-marketing-jobs",
  "remote-customer-support-jobs",
  "remote-management-and-finance-jobs",
  "all-other-remote-jobs"
];

const knownLocations = [
  ["united states", 39.8283, -98.5795], ["usa", 39.8283, -98.5795], ["canada", 56.1304, -106.3468],
  ["united kingdom", 54.5, -3.4], ["uk", 54.5, -3.4], ["europe", 52.1, 15.2],
  ["germany", 51.1657, 10.4515], ["france", 46.2276, 2.2137], ["spain", 40.4637, -3.7492],
  ["portugal", 39.3999, -8.2245], ["italy", 41.8719, 12.5674], ["ireland", 53.1424, -7.6921],
  ["netherlands", 52.1326, 5.2913], ["poland", 51.9194, 19.1451], ["romania", 45.9432, 24.9668],
  ["australia", -25.2744, 133.7751], ["new zealand", -40.9006, 174.886], ["india", 20.5937, 78.9629],
  ["china", 35.8617, 104.1954], ["japan", 36.2048, 138.2529], ["singapore", 1.3521, 103.8198],
  ["philippines", 12.8797, 121.774], ["indonesia", -0.7893, 113.9213], ["malaysia", 4.2105, 101.9758],
  ["south africa", -30.5595, 22.9375], ["nigeria", 9.082, 8.6753], ["kenya", -0.0236, 37.9062],
  ["brazil", -14.235, -51.9253], ["argentina", -38.4161, -63.6167], ["mexico", 23.6345, -102.5528],
  ["latin america", -12, -58], ["south america", -15, -60], ["north america", 42, -102],
  ["asia", 28, 92], ["africa", 2, 21], ["middle east", 29, 43]
];

const remoteOrbit = [
  [22, -36], [7, -29], [-10, -24], [-26, -18], [38, -158], [10, -150], [-18, -143],
  [-34, 160], [28, 168], [-42, 78], [12, 76], [-22, 92], [48, 165], [-5, 174]
];

function stableHash(value) {
  let hash = 2166136261;
  for (const character of String(value)) {
    hash ^= character.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function decodeHtml(value = "") {
  return String(value)
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, "\"")
    .replace(/&apos;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&hellip;/g, "…")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function xmlTag(block, name) {
  return decodeHtml(block.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)</${name}>`, "i"))?.[1] || "");
}

function withinWindow(value) {
  const date = new Date(value);
  return Number.isFinite(date.getTime()) && date >= since && date <= until;
}

function postedAt(value) {
  return new Date(value).toISOString().slice(0, 10);
}

function formatPosted(value) {
  const days = Math.max(0, Math.floor((until - new Date(value)) / 86400000));
  if (days === 0) return "今天";
  if (days === 1) return "1 天前";
  return `${days} 天前`;
}

function cleanUrl(raw) {
  try {
    const url = new URL(raw);
    return `${url.origin}${url.pathname}`;
  } catch (_) {
    return raw;
  }
}

function categoryFor(title, detail = "") {
  const text = `${title} ${detail}`.toLocaleLowerCase("en");
  if (/nurse|doctor|medical|clinical|health|therap|pharma|patient|care coordinator/.test(text)) return "医疗";
  if (/teacher|tutor|instructor|educat|curriculum|learning specialist|academic/.test(text)) return "教育";
  if (/accountant|accounting|finance|financial|payroll|bookkeep|controller|tax|audit|credit risk/.test(text)) return "财务";
  if (/lawyer|legal|counsel|compliance|paralegal|attorney|contract manager/.test(text)) return "法务";
  if (/writer|editor|copywriter|translation|translator|journalist|content writer/.test(text)) return "写作";
  if (/customer support|customer service|client support|helpdesk|help desk|customer success|support specialist/.test(text)) return "客服";
  if (/assistant|administrator|administrative|coordinator|data entry|recruit|human resources|people operations/.test(text)) return "行政";
  if (/designer|design|creative|art director|ux|ui/.test(text)) return "设计";
  if (/machine learning|artificial intelligence|\bai\b|llm|data scientist/.test(text)) return "人工智能";
  if (/product manager|product owner|program manager|project manager/.test(text)) return "产品";
  if (/marketing|communications|seo|growth|brand|social media/.test(text)) return "市场";
  if (/sales|account executive|business development|partnership|account manager/.test(text)) return "销售";
  if (/game|gaming|level designer/.test(text)) return "游戏";
  if (/engineer|developer|devops|software|programmer|architect|qa|quality assurance|security|data/.test(text)) return "开发";
  return "运营";
}

function coordinatesFor(location, id) {
  const text = String(location || "").toLocaleLowerCase("en");
  for (const [key, lat, lng] of knownLocations) {
    if (text.includes(key)) return { lat, lng };
  }
  const seed = stableHash(id);
  const point = remoteOrbit[seed % remoteOrbit.length];
  return {
    lat: point[0] + ((seed >>> 5) % 81) / 10 - 4,
    lng: point[1] + ((seed >>> 13) % 121) / 10 - 6
  };
}

function salaryFor(minimum, maximum, currency = "USD", period = "年") {
  if (minimum == null && maximum == null) return "未公开";
  const symbol = currency === "USD" ? "$" : `${currency} `;
  const format = (value) => Number(value).toLocaleString("en-US");
  if (minimum != null && maximum != null) return `${symbol}${format(minimum)}–${format(maximum)} / ${period}`;
  return `${symbol}${format(minimum ?? maximum)}+ / ${period}`;
}

function summaryFor(category, company, location, excerpt = "") {
  const actions = {
    "设计": "负责数字产品、品牌或体验设计工作",
    "开发": "参与软件、平台或技术系统的建设与交付",
    "人工智能": "参与人工智能、机器学习或数据产品建设",
    "产品": "负责产品规划、跨团队协作与交付",
    "市场": "负责品牌传播、内容营销或增长工作",
    "销售": "负责客户拓展、合作关系与商业增长",
    "运营": "负责业务流程、项目或团队日常运营",
    "游戏": "参与游戏内容、系统或体验制作",
    "客服": "通过远程方式帮助客户解决问题并维护服务体验",
    "行政": "负责远程团队的协调、资料或日常行政支持",
    "财务": "负责财务分析、账务、预算或风险相关工作",
    "教育": "负责线上教学、课程或学习支持工作",
    "医疗": "负责远程医疗、健康服务或患者支持工作",
    "写作": "负责写作、编辑、翻译或内容生产",
    "法务": "负责合同、合规、法律研究或法务支持"
  };
  const detail = decodeHtml(excerpt).slice(0, 74);
  return `${company} 面向 ${location} 招聘远程岗位，${actions[category]}。${detail ? `岗位简介：${detail}${detail.length >= 74 ? "…" : ""}` : "具体要求与申请方式请查看原职位页。"}`;
}

function buildJob({ id, title, company, location, date, source, url, salary = "未公开", detail = "", tags = [], attention = 10 }) {
  const safeTitle = decodeHtml(title) || "未命名远程岗位";
  const safeCompany = decodeHtml(company) || "公开招聘团队";
  const safeLocation = decodeHtml(location) || "远程范围见职位页";
  const category = categoryFor(safeTitle, `${detail} ${tags.join(" ")}`);
  const coordinates = coordinatesFor(safeLocation, id);
  return {
    id,
    title: safeTitle,
    company: safeCompany,
    category,
    location: safeLocation,
    lat: coordinates.lat,
    lng: coordinates.lng,
    remote: true,
    salary,
    posted: formatPosted(date),
    postedAt: postedAt(date),
    attention,
    source,
    sourceUrl: cleanUrl(url),
    summary: summaryFor(category, safeCompany, safeLocation, detail),
    tags: [...new Set([category, "远程", ...tags.map(decodeHtml).filter(Boolean)])].slice(0, 4),
    evidence: "远程职位页"
  };
}

async function fetchText(url) {
  const response = await fetch(url, { headers: { "User-Agent": "work-globe-remote-research/1.0" } });
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return response.text();
}

async function fetchJson(url) {
  return JSON.parse(await fetchText(url));
}

async function collectWwr() {
  const feeds = await Promise.all(wwrFeeds.map(async (feed) => ({
    feed,
    xml: await fetchText(`https://weworkremotely.com/categories/${feed}.rss`)
  })));
  const jobs = [];
  feeds.forEach(({ feed, xml }) => {
    const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)].map((match) => match[1]);
    items.forEach((item, index) => {
      const date = xmlTag(item, "pubDate");
      if (!withinWindow(date)) return;
      const fullTitle = xmlTag(item, "title");
      const separator = fullTitle.indexOf(":");
      const company = separator > 0 ? fullTitle.slice(0, separator).trim() : "远程招聘团队";
      const title = separator > 0 ? fullTitle.slice(separator + 1).trim() : fullTitle;
      const url = xmlTag(item, "link") || xmlTag(item, "guid");
      const location = xmlTag(item, "region") || xmlTag(item, "country") || "全球 / 地区受限远程";
      const category = xmlTag(item, "category") || feed.replace(/-/g, " ");
      const detail = xmlTag(item, "description");
      jobs.push(buildJob({
        id: `wwr-${stableHash(url || `${fullTitle}-${date}-${index}`).toString(36)}`,
        title, company, location, date, source: "We Work Remotely", url,
        detail, tags: [category, xmlTag(item, "type")], attention: 18
      }));
    });
  });
  return jobs;
}

async function collectNoDesk() {
  const xml = await fetchText("https://nodesk.co/remote-jobs/index.xml");
  return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)].flatMap((match, index) => {
    const item = match[1];
    const date = xmlTag(item, "pubDate");
    if (!withinWindow(date)) return [];
    const fullTitle = xmlTag(item, "title");
    const position = fullTitle.lastIndexOf(" at ");
    const title = position > 0 ? fullTitle.slice(0, position).trim() : fullTitle;
    const company = position > 0 ? fullTitle.slice(position + 4).trim() : "远程招聘团队";
    const url = xmlTag(item, "link") || xmlTag(item, "guid");
    return [buildJob({
      id: `nodesk-${stableHash(url || `${fullTitle}-${index}`).toString(36)}`,
      title, company, location: "远程范围见职位页", date, source: "NoDesk", url,
      detail: xmlTag(item, "description"), attention: 14
    })];
  });
}

async function collectJobicy() {
  const data = await fetchJson("https://jobicy.com/api/v2/remote-jobs?count=50");
  return (data.jobs || []).flatMap((job) => {
    if (!withinWindow(job.pubDate)) return [];
    return [buildJob({
      id: `jobicy-${job.id}`,
      title: job.jobTitle,
      company: job.companyName,
      location: job.jobGeo || "远程范围见职位页",
      date: job.pubDate,
      source: "Jobicy",
      url: job.url,
      detail: job.jobExcerpt || job.jobDescription,
      tags: [...(job.jobIndustry || []), ...(job.jobType || [])],
      attention: 11
    })];
  });
}

async function collectHimalayas() {
  const first = await fetchJson("https://himalayas.app/jobs/api?offset=0");
  const pageCount = Math.min(20, Math.ceil((first.totalCount || 20) / 20));
  const pages = [first];
  const rest = await Promise.all(Array.from({ length: Math.max(0, pageCount - 1) }, (_, index) =>
    fetchJson(`https://himalayas.app/jobs/api?offset=${(index + 1) * 20}`)
  ));
  pages.push(...rest);
  return pages.flatMap((page) => page.jobs || []).flatMap((job) => {
    const date = new Date(Number(job.pubDate) * 1000);
    if (!withinWindow(date)) return [];
    const location = (job.locationRestrictions || []).join("、") || "全球远程";
    return [buildJob({
      id: `himalayas-${stableHash(job.guid || job.applicationLink).toString(36)}`,
      title: job.title,
      company: job.companyName,
      location,
      date,
      source: "Himalayas",
      url: job.applicationLink || job.guid,
      salary: salaryFor(job.minSalary, job.maxSalary, job.currency, job.salaryPeriod === "hourly" ? "小时" : "年"),
      detail: job.excerpt || job.description,
      tags: [...(job.parentCategories || []), job.employmentType],
      attention: 12
    })];
  });
}

const collectors = [
  ["We Work Remotely", collectWwr],
  ["NoDesk", collectNoDesk],
  ["Jobicy", collectJobicy],
  ["Himalayas", collectHimalayas]
];

const collected = [];
for (const [name, collector] of collectors) {
  try {
    const jobs = await collector();
    collected.push(...jobs);
    process.stdout.write(`${name}：${jobs.length} 条\n`);
  } catch (error) {
    process.stderr.write(`${name} 抓取失败：${error.message}\n`);
  }
}

const uniqueMap = new Map();
collected.forEach((job) => {
  const key = `${job.company}|${job.title}|${job.location}`.toLocaleLowerCase("en");
  if (!uniqueMap.has(key)) uniqueMap.set(key, job);
});

const unique = [...uniqueMap.values()].sort((a, b) =>
  b.postedAt.localeCompare(a.postedAt) || b.attention - a.attention || a.title.localeCompare(b.title)
);

const output = `(function () {\n  "use strict";\n  const additions = ${JSON.stringify(unique, null, 2)};\n  const existingIds = new Set((window.WORK_JOBS || []).map((job) => job.id));\n  const existingRoles = new Set((window.WORK_JOBS || []).map((job) => \`${'${job.company}|${job.title}|${job.location}'}\`.toLocaleLowerCase("en")));\n  additions.forEach((job) => {\n    const roleKey = \`${'${job.company}|${job.title}|${job.location}'}\`.toLocaleLowerCase("en");\n    if (!existingIds.has(job.id) && !existingRoles.has(roleKey)) {\n      window.WORK_JOBS.push(job);\n      existingIds.add(job.id);\n      existingRoles.add(roleKey);\n    }\n  });\n  if (window.WORK_DATA_META) {\n    window.WORK_DATA_META.window = "2026-06-18 至 2026-07-18";\n    window.WORK_DATA_META.note = "过去 30 天的公开招聘帖与职位页；新增数据全部为明确远程岗位。";\n    window.WORK_DATA_META.total = window.WORK_JOBS.length;\n    window.WORK_DATA_META.remoteTotal = window.WORK_JOBS.filter((job) => job.remote).length;\n  }\n})();\n`;

await writeFile(path.join(projectDir, "data-remote.js"), output, "utf8");
process.stdout.write(`写入 ${unique.length} 条远程职位：${path.join(projectDir, "data-remote.js")}\n`);
