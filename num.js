"use strict";
/*
console.log(document.querySelector(".msg").textContent);
document.querySelector(".msg").textContent = "Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

//console.log(document.querySelector(".guess").value);
document.querySelector(".guess").value = 23;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (Message) {
  document.querySelector(".msg").textContent = Message;
};
//document.querySelector(".number").textContent = secretNumber;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //when there is no input..
  if (!guess) {
    //document.querySelector(".msg").textContent = "No Number!";
    displayMessage("No Number!");
    //when player wins..
  } else if (guess === secretNumber) {
    //document.querySelector(".msg").textContent = "Correct Number!";
    displayMessage("Correct Number!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector(".number").style.width = "30rem";
  }
  if (score > highscore) {
    highscore = score;
    document.querySelector(".highscore").textContent = highscore;
  }
  //when is guess is wrong..
  else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector(".msg").textContent =
      //guess > secretNumber ? "Too High!" : "Too Low";
      displayMessage(guess > secretNumber ? "Too High!" : "Too Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game!");
      //document.querySelector(".msg").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }

  //when guess is to high..
  /*} else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".msg").textContent = "Too High!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".msg").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
    }

    //when guess is to low..
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".msg").textContent = "Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".msg").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }

*/
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "rgb(0, 0, 0)";
  document.querySelector(".number").style.width = "15rem";
});
