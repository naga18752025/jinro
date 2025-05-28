const rolesPool = [
  "人狼", "占い師", "村人", "村人", "村人", "狂人", "狩人", "霊媒師"
];

let playerCount = 0;
let roles = [];
let currentPlayer = 0;

function startGame() {
  playerCount = parseInt(document.getElementById("playerCount").value);

  if (playerCount < 4 || playerCount > 8) {
    alert("4〜8人でプレイしてください");
    return;
  }

  // 役職をシャッフルして配る
  roles = shuffle(rolesPool.slice(0, playerCount));
  currentPlayer = 0;

  document.getElementById("setup").classList.add("hidden");
  document.getElementById("roleReveal").classList.remove("hidden");
  showRole();
}

function showRole() {
  document.getElementById("playerLabel").textContent = `プレイヤー ${currentPlayer + 1} の役職：`;
  document.getElementById("roleCard").textContent = roles[currentPlayer];
}

function nextPlayer() {
  currentPlayer++;
  if (currentPlayer < playerCount) {
    showRole();
  } else {
    document.getElementById("roleReveal").classList.add("hidden");
    document.getElementById("allDone").classList.remove("hidden");
  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}