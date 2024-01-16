let coinNode = document.querySelector(".coin");
let throwNode = document.querySelector(".throw");
let orelNode = document.querySelector(".orel");
let reshkaNode = document.querySelector(".reshka");

let counterThrow = 0;
let counterOrel = 0;
let counterReshka = 0;

function click() {
  counterThrow++;
  throwNode.textContent = counterThrow;
  orelNode.textContent = counterOrel;
  reshkaNode.textContent = counterReshka;
  if (Boolean(Math.floor(Math.random() * 2))) {
      counterOrel++;
      coinNode.src = "./images/orel.png";
  } else {
      counterReshka++;
      coinNode.src = "./images/reshka.png";
  }
  }

coinNode.addEventListener("click", click);
