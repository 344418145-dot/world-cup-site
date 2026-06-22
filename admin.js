const ADMIN_PASSWORD = "worldcup2026";

const loginPanel = document.querySelector("#loginPanel");
const editorPanel = document.querySelector("#editorPanel");
const passwordInput = document.querySelector("#adminPassword");
const unlockButton = document.querySelector("#unlockAdmin");
const loginStatus = document.querySelector("#loginStatus");
const takeInput = document.querySelector("#takeInput");
const saveButton = document.querySelector("#saveTake");
const takeStatus = document.querySelector("#takeStatus");

function unlock() {
  if (passwordInput.value !== ADMIN_PASSWORD) {
    loginStatus.textContent = "口令不正确。";
    passwordInput.select();
    return;
  }

  sessionStorage.setItem("worldcup-admin-unlocked", "1");
  showEditor();
}

function showEditor() {
  loginPanel.hidden = true;
  editorPanel.hidden = false;
  takeInput.value = localStorage.getItem("worldcup-match-take") || "";
  takeInput.focus();
}

unlockButton.addEventListener("click", unlock);
passwordInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") unlock();
});

saveButton.addEventListener("click", () => {
  localStorage.setItem("worldcup-match-take", takeInput.value);
  takeStatus.textContent = "已保存，返回前台刷新后可见。";
  window.setTimeout(() => {
    takeStatus.textContent = "";
  }, 2000);
});

if (sessionStorage.getItem("worldcup-admin-unlocked") === "1") {
  showEditor();
}
