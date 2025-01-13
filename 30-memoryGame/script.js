/* Domyślnie plansza gry jest nieaktywna. Kliknięcie na start aktywuje planszę.
Plansza składa się z x na y kafelków
Kliknięcie na kafelek odsłania go.
Jeżeli drugi kliknięty kafelek jest taki sam jak pierwszy, wtedy oba tiles zostają usunięte z planszy.
Jeżeli drugi kliknięty kafelek jest różny od pierwszego, wtedy oba tiles są zasłaniane i zwiększany jest licznik prób.
Gra kończy się z chwilą usunięcia wszystkich kafelków z planszy */

const divBoard = document.querySelector(".game-board");
const divScore = document.querySelector(".game-score");
const startBtn = document.querySelector(".game-start");
const tileCount = 20;
const tilesImg = [
  "images/element1.png",
  "images/element2.png",
  "images/element3.png",
  "images/element4.png",
  "images/element5.png",
  "images/element6.png",
  "images/element7.png",
  "images/element8.png",
  "images/element9.png",
  "images/element10.png",
];
let mixedTiles = [];
let tilesChecked = [];
let moveCount = 0;
let canGet = true;
let tilePairs = 0;

const tileClick = (e) => {
  if (canGet) {
    if (
      !tilesChecked[0] ||
      tilesChecked[0].dataset.index !== e.target.dataset.index
    ) {
      tilesChecked.push(e.target);
      e.target.style.backgroundImage = `url(${
        tilesImg[e.target.dataset.cardType]
      })`;
    }
    if (tilesChecked.length === 2) {
      canGet = false;
      if (
        tilesChecked[0].dataset.cardType === tilesChecked[1].dataset.cardType
      ) {
        setTimeout(() => deleteTiles(), 500);
      } else {
        setTimeout(() => resetTiles(), 500);
      }
      moveCount++;
      divScore.innerText = moveCount;
    }
  }
};

const deleteTiles = () => {
  tilesChecked.forEach((el) => {
    const emptyDiv = document.createElement("div");
    el.after(emptyDiv);
    el.remove();
  });
  canGet = true;
  tilesChecked = [];
  tilePairs++;
  if (tilePairs >= tileCount / 2) {
    alert("Udało ci się odgadnąć wszystkie obrazki");
  }
};

const resetTiles = () => {
  tilesChecked.forEach((el) => (el.style.backgroundImage = ""));
  tilesChecked = [];
  canGet = true;
};

const startGame = () => {
  divBoard.innerHTML = "";
  divScore.innerText = 0;
  mixedTiles = [];
  tilesChecked = [];
  moveCount = 0;
  canGet = true;
  tilePairs = 0;

  for (let i = 0; i < tileCount / 2; i++) {
    mixedTiles.push(i);
    mixedTiles.push(i);
  }

  for (let i = tileCount - 1; i > 0; i--) {
    const swap = Math.floor(Math.random() * i);
    const tmp = mixedTiles[i];
    mixedTiles[i] = mixedTiles[swap];
    mixedTiles[swap] = tmp;
  }

  for (let i = 0; i < tileCount; i++) {
    const tile = document.createElement("div");
    tile.classList.add("game-tile");
    divBoard.appendChild(tile);
    tile.dataset.cardType = mixedTiles[i];
    tile.dataset.index = i;
    tile.addEventListener("click", (e) => tileClick(e));
  }
};

divBoard.innerHTML = "";
divScore.innerText = 0;

startBtn.addEventListener("click", startGame);
