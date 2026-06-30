const ADMIN_PASSWORD = "worldcup2026";

const teamNames = {
  argentina: "阿根廷",
  austria: "奥地利",
  france: "法国",
  iraq: "伊拉克",
  norway: "挪威",
  senegal: "塞内加尔",
  jordan: "约旦",
  algeria: "阿尔及利亚",
  portugal: "葡萄牙",
  uzbekistan: "乌兹别克斯坦",
  england: "英格兰",
  ghana: "加纳",
  panama: "巴拿马",
  croatia: "克罗地亚",
  colombia: "哥伦比亚",
  drCongo: "民主刚果",
  switzerland: "瑞士",
  canada: "加拿大",
  bosnia: "波黑",
  qatar: "卡塔尔",
  scotland: "苏格兰",
  brazil: "巴西",
  morocco: "摩洛哥",
  haiti: "海地",
  czechia: "捷克",
  mexico: "墨西哥",
  southAfrica: "南非",
  southKorea: "韩国"
};

const fallbackMatches = [
  match("argentina", "austria", "Group J", "北京时间 2026年6月23日 01:00"),
  match("france", "iraq", "Group I", "北京时间 2026年6月23日 05:00"),
  match("norway", "senegal", "Group I", "北京时间 2026年6月23日 08:00"),
  match("jordan", "algeria", "Group J", "北京时间 2026年6月23日 11:00"),
  match("portugal", "uzbekistan", "Group K", "北京时间 2026年6月24日 01:00"),
  match("england", "ghana", "Group L", "北京时间 2026年6月24日 04:00"),
  match("panama", "croatia", "Group L", "北京时间 2026年6月24日 07:00"),
  match("colombia", "drCongo", "Group K", "北京时间 2026年6月24日 10:00"),
  match("switzerland", "canada", "Group B", "北京时间 2026年6月25日 03:00"),
  match("bosnia", "qatar", "Group B", "北京时间 2026年6月25日 03:00"),
  match("scotland", "brazil", "Group C", "北京时间 2026年6月25日 06:00"),
  match("morocco", "haiti", "Group C", "北京时间 2026年6月25日 06:00"),
  match("czechia", "mexico", "Group A", "北京时间 2026年6月25日 09:00"),
  match("southAfrica", "southKorea", "Group A", "北京时间 2026年6月25日 09:00")
];

const loginPanel = document.querySelector("#loginPanel");
const editorPanel = document.querySelector("#editorPanel");
const passwordInput = document.querySelector("#adminPassword");
const unlockButton = document.querySelector("#unlockAdmin");
const loginStatus = document.querySelector("#loginStatus");
const takeInput = document.querySelector("#takeInput");
const saveButton = document.querySelector("#saveTake");
const takeStatus = document.querySelector("#takeStatus");
const matchOpinionEditors = document.querySelector("#matchOpinionEditors");

let editorMatches = [];

function match(home, away, groupName, beijingTime) {
  return { home, away, groupName, beijingTime };
}

function unlock() {
  if (passwordInput.value !== ADMIN_PASSWORD) {
    loginStatus.textContent = "口令不正确。";
    passwordInput.select();
    return;
  }

  sessionStorage.setItem("worldcup-admin-unlocked", "1");
  showEditor();
}

async function showEditor() {
  loginPanel.hidden = true;
  editorPanel.hidden = false;
  takeInput.value = localStorage.getItem("worldcup-match-take") || "";
  editorMatches = await loadEditorMatches();
  renderMatchEditors(editorMatches);
  takeInput.focus();
}

async function loadEditorMatches() {
  try {
    const response = await fetch(`./data/matches.json?v=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error("No matches feed");
    const payload = await response.json();
    const records = (payload.matches || []).map(normalizeMatch).filter(Boolean);
    return pickEditorDays(records.length ? records : fallbackMatches);
  } catch (error) {
    return pickEditorDays(fallbackMatches);
  }
}

function normalizeMatch(item) {
  const home = item.home || item.homeTeam || item.homeTeamName;
  const away = item.away || item.awayTeam || item.awayTeamName;
  if (!home || !away || !item.beijingTime) return null;
  return {
    home,
    away,
    groupName: item.groupName || item.group || "Group",
    beijingTime: item.beijingTime
  };
}

function pickEditorDays(records) {
  const sorted = [...records].sort((a, b) => beijingDateKey(a).localeCompare(beijingDateKey(b)) || a.beijingTime.localeCompare(b.beijingTime));
  const tomorrowKey = targetDateKey("tomorrow");
  const todayKey = targetDateKey("today");
  const tomorrow = sorted.filter((item) => beijingDateKey(item) === tomorrowKey);
  const today = sorted.filter((item) => beijingDateKey(item) === todayKey);
  const fallback = sorted.find((item) => beijingDateKey(item) >= todayKey) || sorted[0];
  const fallbackKey = fallback ? beijingDateKey(fallback) : "";

  return [
    { title: "明日赛程观点", date: tomorrow.length ? tomorrowKey : fallbackKey, matches: tomorrow.length ? tomorrow : sorted.filter((item) => beijingDateKey(item) === fallbackKey) },
    { title: "今日赛程观点", date: todayKey, matches: today }
  ];
}

function baseDateKey() {
  const override = new URLSearchParams(location.search).get("date");
  if (override) return override;
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date());
}

function addDays(dateKey, days) {
  const [year, month, day] = dateKey.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day + days));
  return date.toISOString().slice(0, 10);
}

function targetDateKey(mode) {
  return mode === "today" ? baseDateKey() : addDays(baseDateKey(), 1);
}

function beijingDateKey(item) {
  const dateMatch = String(item.beijingTime || "").match(/2026年(\d+)月(\d+)日/);
  if (!dateMatch) return "";
  return `2026-${String(dateMatch[1]).padStart(2, "0")}-${String(dateMatch[2]).padStart(2, "0")}`;
}

function matchKey(item) {
  return [beijingDateKey(item), item.home, item.away].join("-");
}

function formatDateLabel(dateText) {
  if (!dateText) return "暂无赛程";
  const [, month, day] = dateText.split("-");
  return `${Number(month)}月${Number(day)}日`;
}

function renderMatchEditors(groups) {
  matchOpinionEditors.innerHTML = groups.map((group) => `
    <section class="admin-match-group">
      <h3>${group.title}<span>${formatDateLabel(group.date)}</span></h3>
      ${group.matches.length ? group.matches.map(renderMatchEditor).join("") : `<p class="admin-empty">暂无可编辑比赛。</p>`}
    </section>
  `).join("");
}

function renderMatchEditor(item) {
  const key = `worldcup-opinion-${matchKey(item)}`;
  const saved = localStorage.getItem(key) || "";
  const home = teamNames[item.home] || item.home;
  const away = teamNames[item.away] || item.away;
  return `
    <article class="admin-match-editor">
      <div>
        <strong>${escapeHtml(home)} vs ${escapeHtml(away)}</strong>
        <span>${escapeHtml(item.groupName)} · ${escapeHtml(item.beijingTime)}</span>
      </div>
      <textarea data-admin-match-opinion="${key}" rows="4" placeholder="输入这场比赛的观点，保存后前台展示。">${escapeTextArea(saved)}</textarea>
    </article>
  `;
}

function saveAll() {
  localStorage.setItem("worldcup-match-take", takeInput.value);
  document.querySelectorAll("[data-admin-match-opinion]").forEach((input) => {
    localStorage.setItem(input.dataset.adminMatchOpinion, input.value);
  });
  takeStatus.textContent = "已保存，返回前台刷新后可见。";
  window.setTimeout(() => {
    takeStatus.textContent = "";
  }, 2000);
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function escapeTextArea(value) {
  return escapeHtml(value);
}

unlockButton.addEventListener("click", unlock);
passwordInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") unlock();
});
saveButton.addEventListener("click", saveAll);

if (sessionStorage.getItem("worldcup-admin-unlocked") === "1") {
  showEditor();
}
