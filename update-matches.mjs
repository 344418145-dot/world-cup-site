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
  ["Bosnia-Herzegovina", "bosnia"],
  ["Bosnia Herzegovina", "bosnia"],
  ["Bosnia & Herzegovina", "bosnia"],
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
  ["Curaçao", "curacao"],
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

const seededRoundOf32 = [
  seedKnockout(73, "southAfrica", "canada", "北京时间 2026年6月29日 03:00", "15:00 ET", "纽约/新泽西", "FINISHED", { home: 0, away: 1 }),
  seedKnockout(74, "germany", "paraguay", "北京时间 2026年6月30日 04:30", "16:30 ET", "波士顿", "FINISHED", { home: 1, away: 1, penalties: { home: 3, away: 4 } }),
  seedKnockout(75, "netherlands", "morocco", "北京时间 2026年6月30日 09:00", "21:00 ET", "蒙特雷", "FINISHED", { home: 1, away: 1, penalties: { home: 2, away: 3 } }),
  seedKnockout(76, "brazil", "japan", "北京时间 2026年6月30日 01:00", "13:00 ET", "休斯敦", "FINISHED", { home: 2, away: 1 }),
  seedKnockout(77, "france", "sweden", "北京时间 2026年7月1日 05:00", "17:00 ET", "费城", "SCHEDULED"),
  seedKnockout(78, "ivoryCoast", "norway", "北京时间 2026年7月1日 01:00", "13:00 ET", "多伦多", "SCHEDULED"),
  seedKnockout(79, "mexico", "ecuador", "北京时间 2026年7月1日 09:00", "21:00 ET", "墨西哥城", "SCHEDULED"),
  seedKnockout(80, "england", "drCongo", "北京时间 2026年7月2日 00:00", "12:00 ET", "迈阿密", "SCHEDULED"),
  seedKnockout(81, "usa", "bosnia", "北京时间 2026年7月2日 08:00", "20:00 ET", "亚特兰大", "SCHEDULED"),
  seedKnockout(82, "belgium", "senegal", "北京时间 2026年7月2日 04:00", "16:00 ET", "西雅图", "SCHEDULED"),
  seedKnockout(83, "portugal", "croatia", "北京时间 2026年7月3日 07:00", "19:00 ET", "达拉斯", "SCHEDULED"),
  seedKnockout(84, "spain", "austria", "北京时间 2026年7月3日 03:00", "15:00 ET", "堪萨斯城", "SCHEDULED"),
  seedKnockout(85, "switzerland", "algeria", "北京时间 2026年7月3日 11:00", "23:00 ET", "旧金山湾区", "SCHEDULED"),
  seedKnockout(86, "argentina", "capeVerde", "北京时间 2026年7月4日 06:00", "18:00 ET", "洛杉矶", "SCHEDULED"),
  seedKnockout(87, "colombia", "ghana", "北京时间 2026年7月4日 09:30", "21:30 ET", "迈阿密", "SCHEDULED"),
  seedKnockout(88, "australia", "egypt", "北京时间 2026年7月4日 02:00", "14:00 ET", "温哥华", "SCHEDULED")
];

const response = await fetch(endpoint, {
  headers: {
    "X-Auth-Token": token
  }
});

if (!response.ok) {
  throw new Error(`Matches request failed: ${response.status} ${response.statusText}`);
}

const payload = await response.json();
const rawMatches = payload.matches || [];
const apiMatches = rawMatches
  .map(normalizeMatch)
  .filter(Boolean)
const apiKnockout = normalizeKnockoutMatches(rawMatches);
const knockout = deriveKnockoutProgression(mergeKnockout(apiKnockout, seededRoundOf32));
const matches = mergeMatches(apiMatches, knockout.map(knockoutToMatch))
  .sort((a, b) => `${a.beijingTime}-${a.home}`.localeCompare(`${b.beijingTime}-${b.home}`));

if (!matches.length) {
  throw new Error("The matches response did not contain usable World Cup fixtures.");
}

await mkdir("data", { recursive: true });
await writeFile("data/matches.json", `${JSON.stringify({
  source: "football-data.org",
  updatedAt: new Date().toISOString(),
  matches,
  knockout
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
    groupName: getDisplayGroupName(item),
    time: utcDate ? `${utcDate.slice(11, 16)} UTC` : "待定",
    beijingTime: formatBeijingTime(utcDate),
    venue: getVenue(item),
    status: item.status || "",
    score: getScore(item),
    data: defaultMatchData(home, away)
  };
}

function seedKnockout(matchNo, home, away, beijingTime, time, venue, status, score = null) {
  return {
    matchNo,
    stage: "LAST_32",
    date: beijingDateKey(beijingTime),
    home,
    away,
    homeName: chineseName.get(home) || home,
    awayName: chineseName.get(away) || away,
    time,
    beijingTime,
    venue,
    status,
    score
  };
}

function mergeKnockout(apiRows, seedRows) {
  const rows = new Map(seedRows.map((item) => [item.matchNo, item]));
  apiRows.forEach((item) => {
    const seed = rows.get(item.matchNo) || {};
    rows.set(item.matchNo, {
      ...seed,
      ...item,
      score: item.score || seed.score || null,
      status: item.status || seed.status || "",
      venue: item.venue && item.venue !== "待定" ? item.venue : seed.venue || item.venue
    });
  });
  return [...rows.values()].sort((a, b) => a.matchNo - b.matchNo);
}

function deriveKnockoutProgression(rows) {
  const map = new Map(rows.map((item) => [item.matchNo, item]));
  const rounds = [
    [89, 73, 75],
    [90, 74, 77],
    [91, 76, 78],
    [92, 79, 80],
    [93, 83, 84],
    [94, 81, 82],
    [95, 86, 88],
    [96, 85, 87],
    [97, 89, 90],
    [98, 93, 94],
    [99, 91, 92],
    [100, 95, 96],
    [101, 97, 98],
    [102, 99, 100],
    [104, 101, 102]
  ];

  rounds.forEach(([matchNo, first, second]) => {
    const current = map.get(matchNo) || seedFutureKnockout(matchNo);
    const home = current.home || knockoutWinner(rows, first);
    const away = current.away || knockoutWinner(rows, second);
    map.set(matchNo, {
      ...current,
      home,
      away,
      homeName: home ? chineseName.get(home) || home : current.homeName || "",
      awayName: away ? chineseName.get(away) || away : current.awayName || ""
    });
  });

  return [...map.values()].sort((a, b) => a.matchNo - b.matchNo);
}

function seedFutureKnockout(matchNo) {
  const stage = matchNo >= 104 ? "FINAL" : matchNo >= 101 ? "SEMI_FINALS" : matchNo >= 97 ? "QUARTER_FINALS" : "LAST_16";
  return {
    matchNo,
    stage,
    date: beijingDateKey(fallbackKnockoutTime(matchNo)),
    home: "",
    away: "",
    homeName: "",
    awayName: "",
    time: "待定",
    beijingTime: fallbackKnockoutTime(matchNo),
    venue: "待定",
    status: "SCHEDULED",
    score: null
  };
}

function knockoutWinner(rows, matchNo) {
  const item = rows.find((row) => row.matchNo === matchNo);
  if (!item?.score || !item.home || !item.away) return "";
  const homeScore = Number(item.score.home);
  const awayScore = Number(item.score.away);
  if (homeScore > awayScore) return item.home;
  if (awayScore > homeScore) return item.away;
  const penaltyHome = Number(item.score.penalties?.home);
  const penaltyAway = Number(item.score.penalties?.away);
  if (Number.isFinite(penaltyHome) && Number.isFinite(penaltyAway)) {
    if (penaltyHome > penaltyAway) return item.home;
    if (penaltyAway > penaltyHome) return item.away;
  }
  return "";
}

function fallbackKnockoutTime(matchNo) {
  const times = {
    89: "北京时间 2026年7月5日 03:00",
    90: "北京时间 2026年7月5日 07:00",
    91: "北京时间 2026年7月6日 03:00",
    92: "北京时间 2026年7月6日 07:00",
    93: "北京时间 2026年7月5日 23:00",
    94: "北京时间 2026年7月6日 11:00",
    95: "北京时间 2026年7月7日 03:00",
    96: "北京时间 2026年7月7日 07:00",
    97: "北京时间 2026年7月10日 03:00",
    98: "北京时间 2026年7月10日 07:00",
    99: "北京时间 2026年7月11日 03:00",
    100: "北京时间 2026年7月11日 07:00",
    101: "北京时间 2026年7月15日 08:00",
    102: "北京时间 2026年7月16日 08:00",
    104: "北京时间 2026年7月20日 03:00"
  };
  return times[matchNo] || "北京时间待定";
}

function knockoutToMatch(item) {
  return {
    date: item.date || beijingDateKey(item.beijingTime),
    home: item.home,
    away: item.away,
    groupName: getStageDisplayName(item.stage),
    time: item.time,
    beijingTime: item.beijingTime,
    venue: item.venue,
    status: item.status,
    score: item.score,
    data: defaultMatchData(item.home, item.away)
  };
}

function mergeMatches(apiRows, seedRows) {
  const rows = new Map();
  [...seedRows, ...apiRows].forEach((item) => {
    rows.set(matchMergeKey(item), {
      ...(rows.get(matchMergeKey(item)) || {}),
      ...item,
      score: item.score || rows.get(matchMergeKey(item))?.score || null
    });
  });
  return [...rows.values()];
}

function matchMergeKey(item) {
  return `${item.home}-${item.away}-${beijingDateKey(item.beijingTime)}`;
}

function normalizeKnockoutMatches(rawMatches) {
  const counters = new Map();
  return rawMatches
    .filter(isKnockout)
    .map((item) => {
      const stage = getStage(item);
      const count = (counters.get(stage) || 0) + 1;
      counters.set(stage, count);
      const home = getTeamId(item.homeTeam) || "";
      const away = getTeamId(item.awayTeam) || "";
      const matchNo = getKnownRoundOf32MatchNo(home, away) || getKnockoutMatchNo(stage, count);
      if (!matchNo) return null;
      const utcDate = item.utcDate || item.date || "";
      return {
        matchNo,
        stage,
        date: utcDate ? utcDate.slice(0, 10) : "",
        home,
        away,
        homeName: getTeamName(item.homeTeam),
        awayName: getTeamName(item.awayTeam),
        time: utcDate ? `${utcDate.slice(11, 16)} UTC` : "待定",
        beijingTime: formatBeijingTime(utcDate),
        venue: getVenue(item),
        status: item.status || "",
        score: getScore(item)
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.matchNo - b.matchNo);
}

function isKnockout(item) {
  const stage = getStage(item);
  return Boolean(stage) && stage !== "GROUP_STAGE" && !stage.startsWith("GROUP_");
}

function getStage(item) {
  return String(item.stage || item.group || "").trim().toUpperCase();
}

function getKnockoutMatchNo(stage, index) {
  const starts = new Map([
    ["LAST_32", 73],
    ["ROUND_OF_32", 73],
    ["LAST_16", 89],
    ["ROUND_OF_16", 89],
    ["QUARTER_FINALS", 97],
    ["QUARTER_FINAL", 97],
    ["SEMI_FINALS", 101],
    ["SEMI_FINAL", 101],
    ["FINAL", 104]
  ]);
  const start = starts.get(stage);
  return start ? start + index - 1 : 0;
}

function getKnownRoundOf32MatchNo(home, away) {
  const pairs = new Map([
    ["southAfrica-canada", 73],
    ["germany-paraguay", 74],
    ["netherlands-morocco", 75],
    ["brazil-japan", 76],
    ["france-sweden", 77],
    ["ivoryCoast-norway", 78],
    ["mexico-ecuador", 79],
    ["england-drCongo", 80],
    ["usa-bosnia", 81],
    ["belgium-senegal", 82],
    ["portugal-croatia", 83],
    ["spain-austria", 84],
    ["switzerland-algeria", 85],
    ["argentina-capeVerde", 86],
    ["colombia-ghana", 87],
    ["australia-egypt", 88]
  ]);
  return pairs.get(`${home}-${away}`) || pairs.get(`${away}-${home}`) || 0;
}

function getScore(item) {
  const fullTime = item?.score?.fullTime || {};
  if (fullTime.home === null || fullTime.home === undefined || fullTime.away === null || fullTime.away === undefined) {
    return null;
  }
  const home = Number(fullTime.home);
  const away = Number(fullTime.away);
  if (Number.isNaN(home) || Number.isNaN(away)) return null;
  const penalties = item?.score?.penalties || item?.score?.penaltyShootout || {};
  const penaltyHome = penalties.home;
  const penaltyAway = penalties.away;
  if (penaltyHome !== null && penaltyHome !== undefined && penaltyAway !== null && penaltyAway !== undefined) {
    return { home, away, penalties: { home: Number(penaltyHome), away: Number(penaltyAway) } };
  }
  return { home, away };
}

function getTeamId(team) {
  if (!team) return "";
  return teamMap.get(team.name) || teamMap.get(team.shortName) || teamMap.get(team.tla) || "";
}

function getTeamName(team) {
  if (!team) return "";
  const id = getTeamId(team);
  if (id) return chineseName.get(id) || id;
  return team.shortName || team.name || team.tla || "";
}

function getGroupName(item) {
  const raw = String(item.group || item.stage || "").trim();
  const letter = raw.match(/(?:GROUP[_\s-]*)?([A-L])$/i)?.[1];
  return letter ? `Group ${letter.toUpperCase()}` : "Group";
}

function getDisplayGroupName(item) {
  if (!isKnockout(item)) return getGroupName(item);
  return getStageDisplayName(getStage(item));
}

function getStageDisplayName(stage) {
  const names = new Map([
    ["LAST_32", "32强"],
    ["ROUND_OF_32", "32强"],
    ["LAST_16", "16强"],
    ["ROUND_OF_16", "16强"],
    ["QUARTER_FINALS", "8强"],
    ["QUARTER_FINAL", "8强"],
    ["SEMI_FINALS", "半决赛"],
    ["SEMI_FINAL", "半决赛"],
    ["FINAL", "决赛"]
  ]);
  return names.get(stage) || "淘汰赛";
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

function beijingDateKey(value) {
  const match = String(value || "").match(/2026年(\d+)月(\d+)日/);
  if (!match) return "";
  return `2026-${String(match[1]).padStart(2, "0")}-${String(match[2]).padStart(2, "0")}`;
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
