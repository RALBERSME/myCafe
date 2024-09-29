const cat = document.getElementById("cat");
const heading = document.getElementsByTagName("h1")[0];
const cup = document.querySelector(".cup");
setTimeout(() => {
  cat.classList.remove("hide");
  cat.style.transition = "2s";
  document.querySelector(".whiteDots").classList.add("hide");
  heading.innerHTML =
    "<h1>Ich inhaliere gerade meinen Kaffee. <br>Darf ich Ihnen auch eine Tasse anbieten?</h1>";
  heading.style.marginTop = "-5%";
}, 11000);

setTimeout(() => {
  cat.style.animation = "fadeOut 2s 0s linear forwards";
  cup.classList.remove("hide");
  cup.style.animation = "fadeIn 2s 0s linear forwards";
  document.querySelector(".whiteDots").classList.add("hide");
  document.getElementsByTagName("h1")[0].style.opacity = 0;
}, 17000);

function showNav() {
  document.getElementById("nav").style.animation =
    "showNav 3s 1s linear forwards";
}

/*sound */

let audio = new Audio("drinking.mp3");
audio.play();
