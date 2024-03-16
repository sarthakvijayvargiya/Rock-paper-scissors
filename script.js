const img = document.querySelectorAll("img");
const randomValue = Math.floor(Math.random() * 3);
const restartButton = document.querySelector("#button");
const h1 = document.createElement("h1");
const container = document.querySelector("#container");

// User Selection
let userSelection;
function selectUserValue(image) {
  userSelection = image.alt;
  selectCompValue();
  winnerChecker(image);
}

for (const image of img) {
  image.addEventListener("click", () => {
    selectUserValue(image);
  });
}

// Computer Selection
let computerSelection;
function selectCompValue() {
  switch (randomValue) {
    case 0:
      computerSelection = "Stone";
      break;
    case 1:
      computerSelection = "Paper";
      break;
    case 2:
      computerSelection = "Scissor";
      break;
  }
}

function winnerChecker() {
  if (userSelection == computerSelection) {
    h1.innerHTML = `Both Select the same. Game is Draw`;
  } else if (
    (computerSelection == "Stone" && userSelection == "Paper") ||
    (computerSelection == "Paper" && userSelection == "Scissor") ||
    (computerSelection == "Scissor" && userSelection == "Stone")
  ) {
    h1.innerHTML = `User Selected ${userSelection}, Computer Selected ${computerSelection}. So Winner is User`;
  } else if (
    (computerSelection == "Stone" && userSelection == "Scissor") ||
    (computerSelection == "Paper" && userSelection == "Stone") ||
    (computerSelection == "Scissor" && userSelection == "Paper")
  ) {
    h1.innerHTML = `User Selected ${userSelection}, Computer Selected ${computerSelection}. So Winner is Computer`;
  }
  // for (const image of img) {
  //   if (!(image.alt == userSelection || image.alt == computerSelection)) {
  //     image.style =
  //       "display: none; transform: rotate(-90deg); pointer-events: none; ";
  //   } else {
  //     image.style = "transform: rotate(-90deg); pointer-events: none; ";
  //   }
  // }
  container.appendChild(h1);
}

// Restart Game
restartButton.addEventListener("click", function () {
  computerSelection = "";
  userSelection = "";
  container.removeChild(h1);
});
