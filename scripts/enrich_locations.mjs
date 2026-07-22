import { writeFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const projectDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
globalThis.window = {};
await import(pathToFileURL(path.join(projectDir, "data.js")));
await import(pathToFileURL(path.join(projectDir, "data-month.js")));
await import(pathToFileURL(path.join(projectDir, "data-remote.js")));

const jobs = globalThis.window.WORK_JOBS || [];
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

const globalPattern = /全球|全世界|worldwide|anywhere|global remote|remote first|remote-first|范围见职位页|various locations|anywhere in country|\[remote\]|virtual$/i;
const regionNames = new Set(`africa|apac|asia|emea|europe|european union|eu|latam|middle east|north america|south america|americas|oceania|eastern europe|western europe|central europe|
united states|united states of america|usa|us|canada|mexico|brazil|argentina|colombia|chile|peru|
afghanistan|albania|algeria|andorra|angola|antigua and barbuda|armenia|azerbaijan|bahamas|bahrain|belarus|belize|benin|bhutan|bolivia|bosnia and herzegovina|botswana|brunei|burkina faso|burundi|cambodia|cameroon|cape verde|central african republic|chad|comoros|congo|democratic republic of the congo|djibouti|dominica|dominican republic|ecuador|el salvador|equatorial guinea|eritrea|eswatini|ethiopia|fiji|gabon|gambia|ghana|grenada|guatemala|guinea|guinea-bissau|guyana|haiti|honduras|iceland|iran|iraq|ivory coast|jamaica|jordan|kazakhstan|kiribati|kuwait|kyrgyzstan|laos|lebanon|lesotho|liberia|libya|liechtenstein|madagascar|malawi|maldives|mali|marshall islands|mauritania|mauritius|micronesia|moldova|mongolia|montenegro|morocco|mozambique|myanmar|namibia|nauru|nicaragua|niger|north korea|north macedonia|oman|palau|panama|papua new guinea|paraguay|russia|russian federation|rwanda|saint kitts and nevis|saint lucia|saint vincent and the grenadines|samoa|san marino|senegal|seychelles|sierra leone|solomon islands|somalia|south sudan|sudan|suriname|syria|tajikistan|tanzania|timor-leste|togo|tonga|trinidad and tobago|tunisia|turkmenistan|tuvalu|uganda|uruguay|uzbekistan|vanuatu|venezuela|yemen|zambia|zimbabwe|
united kingdom|uk|great britain|england|scotland|wales|ireland|germany|france|spain|portugal|italy|
netherlands|belgium|luxembourg|switzerland|austria|poland|romania|bulgaria|greece|czechia|czech republic|
ukraine|serbia|croatia|slovenia|slovakia|hungary|sweden|norway|denmark|finland|estonia|latvia|lithuania|
turkey|cyprus|malta|israel|united arab emirates|uae|saudi arabia|qatar|egypt|south africa|nigeria|kenya|
india|china|japan|south korea|korea|malaysia|indonesia|philippines|thailand|vietnam|australia|
new zealand|taiwan|pakistan|bangladesh|sri lanka|nepal|costa rica|puerto rico|brasil|
alberta|british columbia|manitoba|new brunswick|newfoundland and labrador|nova scotia|ontario|prince edward island|quebec|saskatchewan|northwest territories|nunavut|yukon|
new south wales|queensland|south australia|tasmania|victoria|western australia|australian capital territory|northern territory|
baden-württemberg|baden-wurttemberg|bavaria|bayern|brandenburg|hesse|hessen|lower saxony|niedersachsen|mecklenburg-vorpommern|north rhine-westphalia|rhineland-palatinate|saarland|saxony|sachsen|saxony-anhalt|schleswig-holstein|thuringia|thüringen|attica|allgäu|
california|texas|florida|colorado|illinois|delaware|georgia|pennsylvania|ohio|michigan|arizona|
oregon|utah|nevada|virginia|maryland|massachusetts|north carolina|south carolina|new jersey|
tennessee|minnesota|wisconsin|missouri|indiana|alabama|arkansas|connecticut|kentucky|louisiana|maine|
mississippi|montana|nebraska|new hampshire|new mexico|north dakota|oklahoma|rhode island|south dakota|
vermont|west virginia|wyoming|al|ak|az|ar|ca|co|ct|de|fl|ga|hi|id|il|in|ia|ks|ky|la|me|md|ma|mi|mn|ms|mo|mt|ne|nv|nh|nj|nm|nd|oh|ok|or|pa|ri|sc|sd|tn|tx|ut|vt|va|wa|wv|wi|wy|
美国|加拿大|英国|德国|法国|西班牙|葡萄牙|意大利|荷兰|瑞士|奥地利|波兰|罗马尼亚|
印度|中国|日本|韩国|马来西亚|印度尼西亚|菲律宾|澳大利亚|新西兰|巴西|墨西哥|
欧洲|亚洲|非洲|北美|南美|美洲|大洋洲|中东|全球`.replace(/\s*\n\s*/g, "").split("|"));
const timezonePattern = /(?:time\s*zones?|timezones?|utc|gmt|[aecmp][sd]t)(?:\b|[+-])/i;
const locationAliases = new Map([
  ["grand central, manhattan", "New York City"],
  ["new york city", "New York City"],
  ["nyc", "New York City"],
  ["san francisco bay", "San Francisco"],
  ["sf bay", "San Francisco"]
]);

const companyHeadquarters = new Map([
  ["figma", "San Francisco, California"],
  ["webflow", "San Francisco, California"],
  ["poll everywhere", "San Francisco, California"]
]);

function decodeHtml(value = "") {
  return String(value)
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;|&apos;/g, "'")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanUrl(raw) {
  try {
    const url = new URL(raw);
    return `${url.origin}${url.pathname}`;
  } catch (_) {
    return raw;
  }
}

function regionTokens(value) {
  return String(value || "")
    .toLocaleLowerCase("en")
    .replace(/\b(?:fully\s+)?remote(?:-friendly)?\b/g, " ")
    .replace(/\bhome office\b|\bhybrid\b|\bonsite\b|\bon-site\b/g, " ")
    .replace(/远程|混合办公|到岗|项目制/g, " ")
    .replace(/\barea\b/g, " ")
    .split(/[、;|/·,]+/)
    .map((part) => part.replace(/[()[\]]/g, " ").replace(/\s+/g, " ").trim())
    .filter((part) => !timezonePattern.test(part))
    .filter(Boolean);
}

function locationKind(value) {
  const text = String(value || "").trim();
  if (!text || globalPattern.test(text)) return "global";
  const tokens = regionTokens(text);
  if (!tokens.length) return "global";
  if (tokens.every((token) => regionNames.has(token))) return "region";
  return "candidate";
}

function cleanCandidate(value) {
  let text = String(value || "")
    .replace(/\b(?:fully\s+)?remote(?:-friendly)?\b/gi, " ")
    .replace(/\bhome office\b|\bhybrid\b|\bonsite\b|\bon-site\b/gi, " ")
    .replace(/远程|混合办公|到岗|项目制/g, " ")
    .replace(/\barea\b/gi, " ")
    .replace(/^\s*(?:in|within|based in)\s+/i, "")
    .replace(/\s+/g, " ")
    .replace(/^[,;|/·\s-]+|[,;|/·\s-]+$/g, "")
    .trim();
  const alias = locationAliases.get(text.toLocaleLowerCase("en"));
  if (alias) return alias;
  const pieces = text
    .split(/[、;|/·,]+/)
    .map((part) => part.replace(/[()[\]]/g, " ").replace(/\s+/g, " ").trim())
    .filter(Boolean);
  const cityPiece = pieces.find((part) => !regionNames.has(part.toLocaleLowerCase("en")) && !timezonePattern.test(part));
  if (cityPiece) {
    text = cityPiece;
  }
  text = locationAliases.get(text.toLocaleLowerCase("en")) || text;
  return text.slice(0, 100);
}

async function fetchText(url) {
  const response = await fetch(url, { headers: { "User-Agent": "work-globe-location-enrichment/1.0" } });
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return response.text();
}

async function collectWwrHeadquarters() {
  const result = new Map();
  const feeds = (await Promise.all(wwrFeeds.map(async (feed) => {
    try {
      return await fetchText(`https://weworkremotely.com/categories/${feed}.rss`);
    } catch (error) {
      process.stderr.write(`跳过 We Work Remotely ${feed}：${error.message}\n`);
      return "";
    }
  }))).filter(Boolean);
  feeds.forEach((xml) => {
    for (const match of xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)) {
      const item = match[1];
      const url = decodeHtml(item.match(/<link>([\s\S]*?)<\/link>/i)?.[1] || item.match(/<guid>([\s\S]*?)<\/guid>/i)?.[1] || "");
      const description = decodeHtml(item.match(/<description>([\s\S]*?)<\/description>/i)?.[1] || "");
      const rawHeadquarters = description.match(/Headquarters:\s*(.{1,100}?)\s+URL:/i)?.[1]?.trim();
      if (!url || !rawHeadquarters) continue;
      const candidate = cleanCandidate(rawHeadquarters);
      if (locationKind(candidate) === "candidate") result.set(cleanUrl(url), candidate);
    }
  });
  return result;
}

function candidateFor(job, hqByUrl) {
  if (locationKind(job.location) === "candidate") {
    return { value: cleanCandidate(job.location), basis: "job-city" };
  }
  const sourceHq = hqByUrl.get(cleanUrl(job.sourceUrl));
  if (sourceHq) return { value: sourceHq, basis: "company-hq" };
  const knownHq = companyHeadquarters.get(String(job.company || "").toLocaleLowerCase("en"));
  if (knownHq) return { value: knownHq, basis: "company-hq" };
  return null;
}

async function geocode(query) {
  const attempts = [query];
  const parts = query.split(",").map((part) => part.trim()).filter(Boolean);
  if (parts.length > 2) attempts.push(parts.slice(0, 2).join(", "));
  if (parts.length > 1) attempts.push(parts[0]);

  for (const attempt of [...new Set(attempts)]) {
    try {
      const url = new URL("https://geocoding-api.open-meteo.com/v1/search");
      url.searchParams.set("name", attempt);
      url.searchParams.set("count", "8");
      url.searchParams.set("language", "en");
      url.searchParams.set("format", "json");
      const data = JSON.parse(await fetchText(url));
      const city = (data.results || []).find((item) => /^PPL/.test(item.feature_code || ""));
      if (city) {
        return {
          lat: city.latitude,
          lng: city.longitude,
          city: [city.name, city.admin1, city.country].filter((part, index, list) => part && list.indexOf(part) === index).join(", ")
        };
      }
    } catch (_) {
      // 单个地点失败时继续尝试更短的城市名。
    }
  }
  return null;
}

async function mapWithConcurrency(items, concurrency, handler) {
  const results = new Map();
  let cursor = 0;
  let finished = 0;
  async function worker() {
    while (cursor < items.length) {
      const item = items[cursor++];
      results.set(item, await handler(item));
      finished += 1;
      if (finished % 50 === 0 || finished === items.length) process.stdout.write(`城市解析 ${finished}/${items.length}\n`);
    }
  }
  await Promise.all(Array.from({ length: concurrency }, () => worker()));
  return results;
}

const hqByUrl = await collectWwrHeadquarters();
process.stdout.write(`职位页总部候选：${hqByUrl.size} 个\n`);

const candidates = new Map();
jobs.forEach((job) => {
  const candidate = candidateFor(job, hqByUrl);
  if (candidate?.value) candidates.set(job.id, candidate);
});

const uniqueQueries = [...new Set([...candidates.values()].map((item) => item.value))];
const geocoded = await mapWithConcurrency(uniqueQueries, 8, geocode);
const mapping = {};
let cityCount = 0;
let hqCount = 0;

jobs.forEach((job) => {
  const candidate = candidates.get(job.id);
  const location = candidate ? geocoded.get(candidate.value) : null;
  if (location) {
    mapping[job.id] = {
      lat: location.lat,
      lng: location.lng,
      mapCity: location.city,
      mapPrecision: "city",
      mapBasis: candidate.basis
    };
    cityCount += 1;
    if (candidate.basis === "company-hq") hqCount += 1;
    return;
  }
  mapping[job.id] = {
    mapCity: "",
    mapPrecision: locationKind(job.location) === "global" ? "global" : "region",
    mapBasis: "eligibility-region"
  };
});

const output = `(function () {\n  "use strict";\n  const locations = ${JSON.stringify(mapping, null, 2)};\n  (window.WORK_JOBS || []).forEach((job) => { if (locations[job.id]) Object.assign(job, locations[job.id]); });\n  if (window.WORK_DATA_META) {\n    window.WORK_DATA_META.cityPointTotal = window.WORK_JOBS.filter((job) => job.mapPrecision === "city").length;\n    window.WORK_DATA_META.headquartersPointTotal = window.WORK_JOBS.filter((job) => job.mapBasis === "company-hq").length;\n    window.WORK_DATA_META.locationRule = "城市点只表示职位明确城市或可核实的公司总部；国家、地区与全球远程岗位不伪造城市坐标。";\n  }\n})();\n`;

await writeFile(path.join(projectDir, "data-locations.js"), output, "utf8");
process.stdout.write(`写入城市点 ${cityCount} 个，其中公司总部点 ${hqCount} 个。\n`);
