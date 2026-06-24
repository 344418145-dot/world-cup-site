import { mkdir, writeFile } from "node:fs/promises";

const token = process.env.FOOTBALL_DATA_TOKEN;
const endpoint = process.env.FOOTBALL_DATA_ENDPOINT || "https://api.football-data.org/v4/competitions/WC/standings";

if (!token) {
  throw new Error("Missing FOOTBALL_DATA_TOKEN. Add it as a GitHub Actions repository secret.");
}

const teamMap = new Map([
  ["Mexico", "mexico"],
  ["South Africa", "southAfrica"],
  ["Korea Republic", "southKorea"],
  ["South Korea", "southKorea"],
  ["Czechia", "czechia"],
  ["Canada", "canada"],
  ["Qatar", "qatar"],
  ["Switzerland", "switzerland"],
  ["Bosnia and Herzegovina", "bosnia"],
  ["Bosnia-Herzegovina", "bosnia"],
  ["Bosnia Herzegovina", "bosnia"],
  ["Bosnia & Herzegovina", "bosnia"],
  ["Brazil", "brazil"],
  ["Morocco", "morocco"],
  ["Scotland", "scotland"],
  ["Haiti", "haiti"],
  ["United States", "usa"],
  ["USA", "usa"],
  ["Turkiye", "turkey"],
  ["Turkey", "turkey"],
  ["Paraguay", "paraguay"],
  ["Australia", "australia"],
  ["Germany", "germany"],
  ["Cote d'Ivoire", "ivoryCoast"],
  ["Ivory Coast", "ivoryCoast"],
  ["Curacao", "curacao"],
  ["Curaçao", "curacao"],
  ["Ecuador", "ecuador"],
  ["Netherlands", "netherlands"],
  ["Japan", "japan"],
  ["Tunisia", "tunisia"],
  ["Sweden", "sweden"],
  ["Belgium", "belgium"],
  ["Iran", "iran"],
  ["New Zealand", "newZealand"],
  ["Egypt", "egypt"],
  ["Spain", "spain"],
  ["Cape Verde", "capeVerde"],
  ["Saudi Arabia", "saudiArabia"],
  ["Uruguay", "uruguay"],
  ["France", "france"],
  ["Senegal", "senegal"],
  ["Norway", "norway"],
  ["Iraq", "iraq"],
  ["Argentina", "argentina"],
  ["Algeria", "algeria"],
  ["Austria", "austria"],
  ["Jordan", "jordan"],
  ["Portugal", "portugal"],
  ["DR Congo", "drCongo"],
  ["Congo DR", "drCongo"],
  ["Uzbekistan", "uzbekistan"],
  ["Colombia", "colombia"],
  ["England", "england"],
  ["Croatia", "croatia"],
  ["Ghana", "ghana"],
  ["Panama", "panama"]
]);

const response = await fetch(endpoint, {
  headers: {
    "X-Auth-Token": token
  }
});

if (!response.ok) {
  throw new Error(`Standings request failed: ${response.status} ${response.statusText}`);
}

const payload = await response.json();
const groups = (payload.standings || [])
  .filter((standing) => standing.type === "TOTAL" && Array.isArray(standing.table))
  .map((standing) => {
    const groupName = String(standing.group || "")
      .replace(/^GROUP[\s_-]*/i, "")
      .trim()
      .slice(0, 1)
      .toUpperCase();

    return {
      name: groupName,
      rows: standing.table.map((row) => {
        const teamName = row.team?.name || row.team?.shortName || "";
        const id = teamMap.get(teamName) || teamMap.get(row.team?.shortName) || "";
        return {
          id,
          team: teamName,
          played: row.playedGames,
          won: row.won,
          drawn: row.draw,
          lost: row.lost,
          gf: row.goalsFor,
          ga: row.goalsAgainst,
          points: row.points
        };
      }).filter((row) => row.id)
    };
  })
  .filter((group) => group.name && group.rows.length);

if (!groups.length) {
  throw new Error("The standings response did not contain usable World Cup group tables.");
}

await mkdir("data", { recursive: true });
await writeFile("data/standings.json", `${JSON.stringify({
  source: "football-data.org",
  updatedAt: new Date().toISOString(),
  groups
}, null, 2)}\n`);
