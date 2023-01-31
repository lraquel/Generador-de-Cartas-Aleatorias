/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document.querySelector("#boton").addEventListener("click", () => {
    let iconos = randomCard();
    document.querySelector("#icono1").innerHTML = iconos;
    document.querySelector("#icono2").innerHTML = iconos;
    if (iconos[2] || iconos[3]) {
      document.querySelector(".top").style.color = "red";
      document.querySelector(".bottom").style.color = "red";
    } else {
      document.querySelector(".top").style.color = "black";
      document.querySelector(".bottom").style.color = "black";
    }
    document.querySelector("#numero").innerHTML = randomNum();
  });
};

let randomCard = () => {
  let card = ["♦", "♥", "♠", "♣"];
  let randomCard = Math.floor(Math.random() * card.length);
  return card[randomCard];
};

let randomNum = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let randomNum = Math.floor(Math.random() * numbers.length);

  return numbers[randomNum];
};
