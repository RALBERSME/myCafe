const liquid = document.getElementById("liquid");
const statusBtn = document.getElementById("status");
const cup = document.getElementById("cup");
const btns = document.querySelectorAll("button");
const btnsArray = Array.from(btns);

function serveDrink(name) {
  disableBtns();
  if (name === "latte") {
    cup.style.animation = "growCup 1s 0s linear forwards ";
  }
  statusBtn.style.backgroundColor = "red";
  statusBtn.textContent = "Status: in Arbeit";
  liquid.classList.add(name);
  pourCoffee();
  setTimeout(() => {
    statusBtn.style.backgroundColor = "dodgerblue";
    statusBtn.textContent = "Status: Kaffeee wird serviert";
  }, 4000);
  setTimeout(() => {
    statusBtn.style.backgroundColor = "green";
    liquid.classList.remove(name);
    statusBtn.textContent = "Status: bereit";
    cup.style.animation = "reduceCup 1s 0s linear forwards ";
    enableBtns();
  }, 6000);
}

function disableBtns() {
  btnsArray.map((btn) => {
    btn.disabled = true;
  });
}
function enableBtns() {
  btnsArray.map((btn) => {
    btn.disabled = false;
  });
}
let audio = new Audio("pour.mp3");
function pourCoffee() {
  audio.play();
}
