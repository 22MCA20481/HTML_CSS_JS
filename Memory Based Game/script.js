const colors = [
  "#FF5733",
  "#FFC300",
  "#C70039",
  "#900C3F",
  "#581845",
  "#7D3C98",
  "#00BFFF",
  "#2E8B57",
  "#FF6347",
  "#6A5ACD",
  "#1E90FF",
  "#48C9B0",
];

let cards = [];
let cardValues = [];
let flippedCards = [];
let flippedIndices = [];
let numFlipped = 0;

function createGrid() {
  const gridContainer = document.getElementById("grid-container");
  cards = [];
  cardValues = [];
  flippedCards = [];
  flippedIndices = [];
  numFlipped = 0;
  gridContainer.innerHTML = "";
  for (let i = 0; i < 8; i++) {
    const color = colors[i];
    cardValues.push(color);
    cardValues.push(color);
  }
  cardValues.sort(() => Math.random() - 0.5);
  for (let i = 0; i < cardValues.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.index = i;
    card.style.backgroundColor = "#eee";
    card.addEventListener("click", flipCard);
    gridContainer.appendChild(card);
    cards.push(card);
  }
}

function flipCard() {
  if (flippedIndices.includes(parseInt(this.dataset.index))) return;
  this.style.backgroundColor = cardValues[this.dataset.index];
  flippedCards.push(cardValues[this.dataset.index]);
  flippedIndices.push(parseInt(this.dataset.index));
  numFlipped++;
  if (numFlipped === 2) {
    setTimeout(checkMatch, 1000);
  }
}

function checkMatch() {
  if (flippedCards[0] === flippedCards[1]) {
    flippedIndices.forEach((index) => {
      cards[index].style.backgroundColor = "#7FFF00";
    });
  } else {
    flippedIndices.forEach((index) => {
      cards[index].style.backgroundColor = "#eee";
    });
  }
  flippedCards = [];
  flippedIndices = [];
  numFlipped = 0;
}

function startGame() {
  createGrid();
}
