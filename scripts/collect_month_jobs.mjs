import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const execFileAsync = promisify(execFile);
const projectDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const cli = process.env.ANYSEARCH_CLI || "/Users/a1/.codex/skills/anysearch/scripts/anysearch_cli.js";
const since = new Date("2026-06-18T00:00:00Z");
const until = new Date("2026-07-18T23:59:59Z");

const locations = [
  "us", "London", "Toronto", "Vancouver", "Berlin", "Munich", "Paris", "Amsterdam",
  "Sydney", "Melbourne", "Singapore", "Bengaluru", "Mumbai", "Tokyo", "Dubai",
  "Cape Town", "Johannesburg", "São Paulo", "Mexico City", "Warsaw", "Lisbon",
  "Barcelona", "Madrid", "Dublin"
];

const rolePairs = [
  ["software engineer", "product designer"],
  ["AI engineer", "product manager"],
  ["data analyst", "marketing manager"],
  ["sales manager", "operations manager"],
  ["graphic designer", "customer success manager"]
];

const queries = locations.flatMap((location, index) => {
  const roles = rolePairs[index % rolePairs.length];
  return roles.map((keyword) => ({ keyword, location, type: "GeneralJobs" }));
});

queries.push(
  { keyword: "software engineer", location: "us", type: "GeneralJobs" },
  { keyword: "AI engineer", location: "us", type: "GeneralJobs" },
  { keyword: "product manager", location: "us", type: "GeneralJobs" },
  { keyword: "designer", location: "us", type: "GeneralJobs" },
  { keyword: "marketing", location: "us", type: "GeneralJobs" },
  { keyword: "sales", location: "us", type: "GeneralJobs" },
  { keyword: "operations", location: "us", type: "GeneralJobs" },
  { keyword: "data scientist", location: "us", type: "GeneralJobs" }
);

const coordinateIndex = [
  ["chicago", 41.8781, -87.6298], ["reston", 38.9586, -77.357], ["morrisville", 35.8235, -78.8256],
  ["houston", 29.7604, -95.3698], ["greenwich", 41.0262, -73.6282], ["miami", 25.7617, -80.1918],
  ["new york", 40.7128, -74.006], ["san francisco", 37.7749, -122.4194], ["seattle", 47.6062, -122.3321],
  ["boston", 42.3601, -71.0589], ["austin", 30.2672, -97.7431], ["dallas", 32.7767, -96.797],
  ["los angeles", 34.0522, -118.2437], ["denver", 39.7392, -104.9903], ["atlanta", 33.749, -84.388],
  ["london", 51.5074, -0.1278], ["manchester", 53.4808, -2.2426], ["birmingham", 52.4862, -1.8904],
  ["toronto", 43.6532, -79.3832], ["vancouver", 49.2827, -123.1207], ["montreal", 45.5019, -73.5674],
  ["berlin", 52.52, 13.405], ["munich", 48.1351, 11.582], ["hamburg", 53.5511, 9.9937],
  ["paris", 48.8566, 2.3522], ["amsterdam", 52.3676, 4.9041], ["sydney", -33.8688, 151.2093],
  ["melbourne", -37.8136, 144.9631], ["singapore", 1.3521, 103.8198], ["bengaluru", 12.9716, 77.5946],
  ["bangalore", 12.9716, 77.5946], ["mumbai", 19.076, 72.8777], ["delhi", 28.6139, 77.209],
  ["tokyo", 35.6762, 139.6503], ["dubai", 25.2048, 55.2708], ["cape town", -33.9249, 18.4241],
  ["johannesburg", -26.2041, 28.0473], ["são paulo", -23.5505, -46.6333], ["sao paulo", -23.5505, -46.6333],
  ["mexico city", 19.4326, -99.1332], ["warsaw", 52.2297, 21.0122], ["lisbon", 38.7223, -9.1393],
  ["barcelona", 41.3874, 2.1686], ["madrid", 40.4168, -3.7038], ["dublin", 53.3498, -6.2603],
  ["united kingdom", 54.5, -3.4], [" uk", 54.5, -3.4], ["germany", 51.1657, 10.4515],
  ["france", 46.2276, 2.2137], ["netherlands", 52.1326, 5.2913], ["canada", 56.1304, -106.3468],
  ["australia", -25.2744, 133.7751], ["india", 20.5937, 78.9629], ["japan", 36.2048, 138.2529],
  ["spain", 40.4637, -3.7492], ["portugal", 39.3999, -8.2245], ["poland", 51.9194, 19.1451],
  ["ireland", 53.1424, -7.6921], ["italy", 41.8719, 12.5674], ["austria", 47.5162, 14.5501],
  ["switzerland", 46.8182, 8.2275], ["sweden", 60.1282, 18.6435], ["norway", 60.472, 8.4689],
  ["denmark", 56.2639, 9.5018], ["finland", 61.9241, 25.7482], ["estonia", 58.5953, 25.0136],
  ["czech", 49.8175, 15.473], ["romania", 45.9432, 24.9668], ["bulgaria", 42.7339, 25.4858],
  ["greece", 39.0742, 21.8243], ["turkey", 38.9637, 35.2433], ["israel", 31.0461, 34.8516],
  ["united arab emirates", 23.4241, 53.8478], ["south africa", -30.5595, 22.9375],
  ["brazil", -14.235, -51.9253], ["mexico", 23.6345, -102.5528], ["argentina", -38.4161, -63.6167],
  ["chile", -35.6751, -71.543], ["colombia", 4.5709, -74.2973], ["nigeria", 9.082, 8.6753],
  ["kenya", -0.0236, 37.9062], ["egypt", 26.8206, 30.8025], ["philippines", 12.8797, 121.774],
  ["indonesia", -0.7893, 113.9213], ["malaysia", 4.2105, 101.9758], ["thailand", 15.87, 100.9925],
  ["vietnam", 14.0583, 108.2772], ["new zealand", -40.9006, 174.886], ["hong kong", 22.3193, 114.1694],
  ["taiwan", 23.6978, 120.9605], ["china", 35.8617, 104.1954], ["europe", 52.1, 15.2],
  ["united states", 39.8283, -98.5795], ["usa", 39.8283, -98.5795], [" us", 39.8283, -98.5795]
];

const remoteOrbit = [
  [18, -34], [5, -29], [-12, -25], [-28, -18], [39, -158], [10, -150], [-18, -143],
  [-36, 160], [28, 168], [-42, 78], [12, 76], [-22, 92]
];

function stableHash(value) {
  let hash = 2166136261;
  for (const character of String(value)) {
    hash ^= character.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function coordinatesFor(location, fallback, id) {
  const text = `${location} ${fallback}`.toLocaleLowerCase("en");
  for (const [key, lat, lng] of coordinateIndex) {
    if (text.includes(key)) return { lat, lng };
  }
  const seed = stableHash(id);
  const point = remoteOrbit[seed % remoteOrbit.length];
  return {
    lat: point[0] + ((seed >>> 5) % 81) / 10 - 4,
    lng: point[1] + ((seed >>> 13) % 121) / 10 - 6
  };
}

function categoryFor(title, details) {
  const text = `${title} ${details}`.toLocaleLowerCase("en");
  if (/designer|design|creative|art director|ux|ui/.test(text)) return "设计";
  if (/machine learning|artificial intelligence|\bai\b|llm|data scientist/.test(text)) return "人工智能";
  if (/product manager|product owner|program manager|project manager/.test(text)) return "产品";
  if (/marketing|content|communications|seo|growth/.test(text)) return "市场";
  if (/sales|account executive|business development|partnership/.test(text)) return "销售";
  if (/customer success|operations|recruit|human resources|finance|legal|assistant/.test(text)) return "运营";
  if (/game|gaming|level designer/.test(text)) return "游戏";
  return "开发";
}

function cleanUrl(raw) {
  try {
    const url = new URL(raw);
    return `${url.origin}${url.pathname}`;
  } catch (_) {
    return raw;
  }
}

function field(details, start, endNames) {
  const ends = endNames.map((name) => name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
  const expression = new RegExp(`${start.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*(.*?)\\s+(?=${ends})`, "s");
  return details.match(expression)?.[1]?.trim() || "";
}

function formatPosted(dateText) {
  const date = new Date(`${dateText}T00:00:00Z`);
  const days = Math.max(0, Math.round((until - date) / 86400000));
  if (days === 0) return "今天";
  if (days === 1) return "1 天前";
  return `${days} 天前`;
}

function summaryFor(category, company, location) {
  const descriptions = {
    "设计": "负责产品、品牌或数字体验相关设计工作",
    "开发": "参与软件产品、平台或基础设施的开发与交付",
    "人工智能": "参与人工智能、机器学习或数据系统的建设",
    "产品": "负责产品规划、协作推进与结果交付",
    "市场": "负责品牌传播、内容或增长相关工作",
    "销售": "负责客户拓展、合作关系与商业增长",
    "运营": "负责团队、客户或业务流程的日常运营",
    "游戏": "参与游戏内容、系统或体验的设计与制作"
  };
  return `${company} 正在 ${location} 招聘该岗位，${descriptions[category]}。具体要求与申请方式请查看原职位页。`;
}

function tagsFor(title, category, remote) {
  const text = title.toLocaleLowerCase("en");
  const tags = [category, remote ? "远程" : "到岗 / 混合"];
  if (/senior|lead|principal|director|head|manager/.test(text)) tags.push("资深");
  else if (/intern|graduate|junior|entry/.test(text)) tags.push("新人");
  else tags.push("全职");
  return tags;
}

function withinWindow(value) {
  const date = new Date(value);
  return Number.isFinite(date.getTime()) && date >= since && date <= until;
}

function buildApiJob({ id, title, company, location, remote, salary, date, source, sourceUrl, rawTags = [] }) {
  const safeTitle = String(title || "未命名岗位").trim();
  const safeCompany = String(company || "公开招聘团队").trim();
  const safeLocation = String(location || (remote ? "全球远程" : "地点见职位页")).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 90);
  const category = categoryFor(safeTitle, rawTags.join(" "));
  const coordinates = coordinatesFor(safeLocation, remote ? "remote" : "", id);
  const postedAt = new Date(date).toISOString().slice(0, 10);
  const sourceTags = rawTags.filter(Boolean).slice(0, 2);
  const baseTags = tagsFor(safeTitle, category, remote);
  return {
    id,
    title: safeTitle,
    company: safeCompany,
    category,
    location: safeLocation,
    lat: coordinates.lat,
    lng: coordinates.lng,
    remote,
    salary: String(salary || "未公开").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 70),
    posted: formatPosted(postedAt),
    postedAt,
    attention: 8,
    source,
    sourceUrl: cleanUrl(sourceUrl),
    summary: summaryFor(category, safeCompany, safeLocation),
    tags: [...new Set([...baseTags, ...sourceTags])].slice(0, 4),
    evidence: "职位页"
  };
}

async function fetchJson(url) {
  const response = await fetch(url, { headers: { "User-Agent": "work-globe-research/1.0" } });
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return response.json();
}

async function collectRemoteOk() {
  const data = await fetchJson("https://remoteok.com/api");
  return (Array.isArray(data) ? data.slice(1) : [])
    .filter((job) => withinWindow(job.date || (job.epoch ? new Date(job.epoch * 1000) : "")))
    .map((job) => buildApiJob({
      id: `remoteok-${job.id}`,
      title: job.position,
      company: job.company,
      location: job.location || "全球远程",
      remote: true,
      salary: job.salary_min || job.salary_max ? `$${job.salary_min || 0}–${job.salary_max || "?"} / 年` : "未公开",
      date: job.date || new Date(job.epoch * 1000),
      source: "Remote OK",
      sourceUrl: job.url || job.apply_url,
      rawTags: job.tags || []
    }));
}

async function collectRemotive() {
  const data = await fetchJson("https://remotive.com/api/remote-jobs?limit=500");
  return (data.jobs || [])
    .filter((job) => withinWindow(job.publication_date))
    .map((job) => buildApiJob({
      id: `remotive-${job.id}`,
      title: job.title,
      company: job.company_name,
      location: job.candidate_required_location || "全球远程",
      remote: true,
      salary: job.salary,
      date: job.publication_date,
      source: "Remotive",
      sourceUrl: job.url,
      rawTags: [job.category, ...(job.tags || [])]
    }));
}

async function collectArbeitnow() {
  const all = [];
  for (let page = 1; page <= 6; page += 1) {
    const data = await fetchJson(`https://www.arbeitnow.com/api/job-board-api?page=${page}`);
    const pageJobs = data.data || [];
    all.push(...pageJobs);
    const oldest = pageJobs.reduce((minimum, job) => Math.min(minimum, Number(job.created_at) || Infinity), Infinity);
    if (Number.isFinite(oldest) && new Date(oldest * 1000) < since) break;
    if (!data.links?.next) break;
  }
  return all
    .filter((job) => withinWindow(new Date(Number(job.created_at) * 1000)))
    .map((job) => buildApiJob({
      id: `arbeitnow-${job.slug}`,
      title: job.title,
      company: job.company_name,
      location: job.location || (job.remote ? "欧洲远程" : "地点见职位页"),
      remote: Boolean(job.remote),
      salary: "未公开",
      date: new Date(Number(job.created_at) * 1000),
      source: "Arbeitnow",
      sourceUrl: job.url,
      rawTags: [...(job.tags || []), ...(job.job_types || [])]
    }));
}

function parseResults(markdown, query) {
  const headings = [...markdown.matchAll(/^### \d+\. (.+)$/gm)];
  const jobs = [];
  headings.forEach((heading, index) => {
    const title = heading[1].trim();
    if (/salary distribution/i.test(title)) return;
    const start = heading.index + heading[0].length;
    const end = headings[index + 1]?.index ?? markdown.length;
    const block = markdown.slice(start, end).trim();
    const url = block.match(/- \*\*URL\*\*: (\S+)/)?.[1];
    if (!url) return;
    const details = block.replace(/^- \*\*URL\*\*:.*$/m, "").replace(/^[-\s]+/, "").trim();
    const postedAt = details.match(/Posted:\s*(\d{4}-\d{2}-\d{2})/)?.[1];
    if (!postedAt) return;
    const postedDate = new Date(`${postedAt}T00:00:00Z`);
    if (postedDate < since || postedDate > until) return;

    const company = field(details, "Company:", ["Location:"]) || title.split(" @ ")[1] || "公开招聘团队";
    const location = field(details, "Location:", ["Salary:", "Contract:", "Category:", "Posted:"]) || query.location;
    const rawSalary = field(details, "Salary:", ["Contract:", "Category:", "Posted:"]);
    const salary = rawSalary ? rawSalary.replace(/\s*\(predicted\)\s*/i, "").slice(0, 70) : "未公开";
    const category = categoryFor(title, details);
    const remote = /remote|work from home|home-based/i.test(`${title} ${location} ${details.slice(0, 500)}`);
    const sourceUrl = cleanUrl(url);
    const idSeed = sourceUrl.match(/\/(?:ad|details)\/(\d+)/)?.[1] || stableHash(sourceUrl).toString(36);
    const id = `month-${idSeed}`;
    const coordinates = coordinatesFor(location, query.location, id);

    jobs.push({
      id,
      title: title.replace(/\s+@\s+.*$/, "").trim(),
      company,
      category,
      location,
      lat: coordinates.lat,
      lng: coordinates.lng,
      remote,
      salary,
      posted: formatPosted(postedAt),
      postedAt,
      attention: 8,
      source: "招聘网站",
      sourceUrl,
      summary: summaryFor(category, company, location),
      tags: tagsFor(title, category, remote),
      evidence: "职位页"
    });
  });
  return jobs;
}

async function search(query) {
  const sdp = `keyword=${query.keyword},location=${query.location},type=${query.type}`;
  const { stdout } = await execFileAsync("node", [
    cli,
    "search",
    `${query.keyword} jobs posted in the last month ${query.location}`,
    "--domain", "business",
    "--sub_domain", "business.jobs",
    "--sdp", sdp,
    "--max_results", "10"
  ], { maxBuffer: 12 * 1024 * 1024, timeout: 45000 });
  return parseResults(stdout, query);
}

async function collectWithConcurrency(items, concurrency) {
  const results = [];
  let cursor = 0;
  let finished = 0;

  async function worker() {
    while (cursor < items.length) {
      const index = cursor++;
      const query = items[index];
      try {
        results.push(...await search(query));
      } catch (error) {
        process.stderr.write(`跳过 ${query.keyword} / ${query.location}: ${error.message}\n`);
      }
      finished += 1;
      if (finished % 10 === 0 || finished === items.length) {
        process.stdout.write(`已完成 ${finished}/${items.length} 组搜索\n`);
      }
    }
  }

  await Promise.all(Array.from({ length: concurrency }, () => worker()));
  return results;
}

const collected = await collectWithConcurrency(queries, 4);
const [remoteOkJobs, remotiveJobs, arbeitnowJobs] = await Promise.all([
  collectRemoteOk(),
  collectRemotive(),
  collectArbeitnow()
]);
process.stdout.write(`公开职位源：Remote OK ${remoteOkJobs.length}，Remotive ${remotiveJobs.length}，Arbeitnow ${arbeitnowJobs.length}\n`);

const combined = [...collected, ...remoteOkJobs, ...remotiveJobs, ...arbeitnowJobs];
const uniqueByRole = new Map();
combined.forEach((job) => {
  const key = `${job.company}|${job.title}|${job.location}`.toLocaleLowerCase("en");
  if (!uniqueByRole.has(key)) uniqueByRole.set(key, job);
});
const unique = [...uniqueByRole.values()]
  .sort((a, b) => b.postedAt.localeCompare(a.postedAt) || a.title.localeCompare(b.title));

const output = `(function () {\n  "use strict";\n  const additions = ${JSON.stringify(unique, null, 2)};\n  const existing = new Set((window.WORK_JOBS || []).map((job) => job.sourceUrl));\n  additions.forEach((job) => { if (!existing.has(job.sourceUrl)) window.WORK_JOBS.push(job); });\n  if (window.WORK_DATA_META) {\n    window.WORK_DATA_META.window = "2026-06-18 至 2026-07-18";\n    window.WORK_DATA_META.note = "过去 30 天的公开招聘帖与职位页；地点只使用职位中明确出现的城市、国家或远程范围。";\n    window.WORK_DATA_META.total = window.WORK_JOBS.length;\n  }\n})();\n`;

await writeFile(path.join(projectDir, "data-month.js"), output, "utf8");
process.stdout.write(`写入 ${unique.length} 条过去 30 天职位：${path.join(projectDir, "data-month.js")}\n`);
