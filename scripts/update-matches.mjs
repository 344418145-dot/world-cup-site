import { mkdir, writeFile } from "node:fs/promises";

const token = process.env.FOOTBALL_DATA_TOKEN;
const endpoint = process.env.FOOTBALL_DATA_MATCHES_ENDPOINT || "https://api.football-data.org/v4/competitions/WC/matches";

if (!token) {
  throw new Error("Missing FOOTBALL_DATA_TOKEN. Add it as a GitHub Actions repository secret.");
}

const teamMap = new Map([
  ["Mexico", "mexico"],
  ["MEX", "mexico"],
  ["South Africa", "southAfrica"],
  ["RSA", "southAfrica"],
  ["Korea Republic", "southKorea"],
  ["South Korea", "southKorea"],
  ["KOR", "southKorea"],
  ["Czechia", "czechia"],
  ["CZE", "czechia"],
  ["Canada", "canada"],
  ["CAN", "canada"],
  ["Qatar", "qatar"],
  ["QAT", "qatar"],
  ["Switzerland", "switzerland"],
  ["SUI", "switzerland"],
  ["Bosnia and Herzegovina", "bosnia"],
  ["BIH", "bosnia"],
  ["Brazil", "brazil"],
  ["BRA", "brazil"],
  ["Morocco", "morocco"],
  ["MAR", "morocco"],
  ["Scotland", "scotland"],
  ["SCO", "scotland"],
  ["Haiti", "haiti"],
  ["HAI", "haiti"],
  ["United States", "usa"],
  ["USA", "usa"],
  ["Turkiye", "turkey"],
  ["Turkey", "turkey"],
  ["TUR", "turkey"],
  ["Paraguay", "paraguay"],
  ["PAR", "paraguay"],
  ["Australia", "australia"],
  ["AUS", "australia"],
  ["Germany", "germany"],
  ["GER", "germany"],
  ["Cote d'Ivoire", "ivoryCoast"],
  ["Ivory Coast", "ivoryCoast"],
  ["CIV", "ivoryCoast"],
  ["Curacao", "curacao"],
  ["CUW", "curacao"],
  ["Ecuador", "ecuador"],
  ["ECU", "ecuador"],
  ["Netherlands", "netherlands"],
  ["NED", "netherlands"],
  ["Japan", "japan"],
  ["JPN", "japan"],
  ["Tunisia", "tunisia"],
  ["TUN", "tunisia"],
  ["Sweden", "sweden"],
  ["SWE", "sweden"],
  ["Belgium", "belgium"],
  ["BEL", "belgium"],
  ["Iran", "iran"],
  ["IRN", "iran"],
  ["New Zealand", "newZealand"],
  ["NZL", "newZealand"],
  ["Egypt", "egypt"],
  ["EGY", "egypt"],
  ["Spain", "spain"],
  ["ESP", "spain"],
  ["Cape Verde", "capeVerde"],
  ["CPV", "capeVerde"],
  ["Saudi Arabia", "saudiArabia"],
  ["KSA", "saudiArabia"],
  ["Uruguay", "uruguay"],
  ["URU", "uruguay"],
  ["France", "france"],
  ["FRA", "france"],
  ["Senegal", "senegal"],
  ["SEN", "senegal"],
  ["Norway", "norway"],
  ["NOR", "norway"],
  ["Iraq", "iraq"],
  ["IRQ", "iraq"],
  ["Argentina", "argentina"],
  ["ARG", "argentina"],
  ["Algeria", "algeria"],
  ["ALG", "algeria"],
  ["Austria", "austria"],
  ["AUT", "austria"],
  ["Jordan", "jordan"],
  ["JOR", "jordan"],
  ["Portugal", "portugal"],
  ["POR", "portugal"],
  ["DR Congo", "drCongo"],
  ["Congo DR", "drCongo"],
  ["COD", "drCongo"],
  ["Uzbekistan", "uzbekistan"],
  ["UZB", "uzbekistan"],
  ["Colombia", "colombia"],
  ["COL", "colombia"],
  ["England", "england"],
  ["ENG", "england"],
  ["Croatia", "croatia"],
  ["CRO", "croatia"],
  ["Ghana", "ghana"],
  ["GHA", "ghana"],
  ["Panama", "panama"],
  ["PAN", "panama"]
]);

const chineseName = new Map([
  ["mexico", "墨西哥"],
  ["southAfrica", "南非"],
  ["southKorea", "韩国"],
  ["czechia", "捷克"],
  ["canada", "加拿大"],
  ["qatar", "卡塔尔"],
  ["switzerland", "瑞士"],
  ["bosnia", "波黑"],
  ["brazil", "巴西"],
  ["morocco", "摩洛哥"],
  ["scotland", "苏格兰"],
  ["haiti", "海地"],
  ["usa", "美国"],
  ["turkey", "土耳其"],
  ["paraguay", "巴拉圭"],
  ["australia", "澳大利亚"],
  ["germany", "德国"],
  ["ivoryCoast", "科特迪瓦"],
  ["curacao", "库拉索"],
  ["ecuador", "厄瓜多尔"],
  ["netherlands", "荷兰"],
  ["japan", "日本"],
  ["tunisia", "突尼斯"],
  ["sweden", "瑞典"],
  ["belgium", "比利时"],
  ["iran", "伊朗"],
  ["newZealand", "新西兰"],
  ["egypt", "埃及"],
  ["spain", "西班牙"],
  ["capeVerde", "佛得角"],
  ["saudiArabia", "沙特"],
  ["uruguay", "乌拉圭"],
  ["france", "法国"],
  ["senegal", "塞内加尔"],
  ["norway", "挪威"],
  ["iraq", "伊拉克"],
  ["argentina", "阿根廷"],
  ["algeria", "阿尔及利亚"],
  ["austria", "奥地利"],
  ["jordan", "约旦"],
  ["portugal", "葡萄牙"],
  ["drCongo", "民主刚果"],
  ["uzbekistan", "乌兹别克斯坦"],
  ["colombia", "哥伦比亚"],
  ["england", "英格兰"],
  ["croatia", "克罗地亚"],
  ["ghana", "加纳"],
  ["panama", "巴拿马"]
]);

const response = await fetch(endpoint, {
  headers: {
    "X-Auth-Token": token
  }
});

if (!response.ok) {
  throw new Error(`Matches request failed: ${response.status} ${response.statusText}`);
}

const payload = await response.json();
const matches = (payload.matches || [])
  .map(normalizeMatch)
  .filter(Boolean)
  .sort((a, b) => `${a.beijingTime}-${a.home}`.localeCompare(`${b.beijingTime}-${b.home}`));

if (!matches.length) {
  throw new Error("The matches response did not contain usable World Cup fixtures.");
}

await mkdir("data", { recursive: true });
await writeFile("data/matches.json", `${JSON.stringify({
  source: "football-data.org",
  updatedAt: new Date().toISOString(),
  matches
}, null, 2)}\n`);

function normalizeMatch(item) {
  const home = getTeamId(item.homeTeam);
  const away = getTeamId(item.awayTeam);
  if (!home || !away) return null;

  const utcDate = item.utcDate || item.date || "";
  return {
    date: utcDate ? utcDate.slice(0, 10) : "",
    home,
    away,
    groupName: getGroupName(item),
    time: utcDate ? `${utcDate.slice(11, 16)} UTC` : "待定",
    beijingTime: formatBeijingTime(utcDate),
    venue: getVenue(item),
    data: defaultMatchData(home, away)
  };
}

function getTeamId(team) {
  if (!team) return "";
  return teamMap.get(team.name) || teamMap.get(team.shortName) || teamMap.get(team.tla) || "";
}

function getGroupName(item) {
  const raw = String(item.group || item.stage || "").trim();
  const letter = raw.match(/(?:GROUP[_\s-]*)?([A-L])$/i)?.[1];
  return letter ? `Group ${letter.toUpperCase()}` : "Group";
}

function getVenue(item) {
  if (typeof item.venue === "string" && item.venue.trim()) return item.venue.trim();
  if (item.area?.name) return item.area.name;
  return "待定";
}

function defaultMatchData(home, away) {
  const homeName = chineseName.get(home) || home;
  const awayName = chineseName.get(away) || away;
  return {
    h2h: "暂无完整交锋数据",
    form: `${homeName} 待更新 · ${awayName} 待更新`,
    ranking: `${homeName} 待更新 · ${awayName} 待更新`
  };
}

function formatBeijingTime(value) {
  if (!value) return "北京时间待定";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "北京时间待定";
  const parts = new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23"
  }).formatToParts(date).reduce((memo, part) => {
    memo[part.type] = part.value;
    return memo;
  }, {});

  return `北京时间 ${parts.year}年${parts.month}月${parts.day}日 ${parts.hour}:${parts.minute}`;
}
