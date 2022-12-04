var diceArr = [];
var diceBankedScore = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
};
var totalScore = 0;

function initializeDice() {
  document.getElementById("totalScore").innerHTML = totalScore;

  for (i = 0; i < 6; i++) {
    diceArr[i] = {};
    diceArr[i].id = "die" + i + 1;
    diceArr[i].value = i + 1;
    diceArr[i].clicked = 0;
  }
}

/*Rolling dice values*/
function rollDice() {
  for (var i = 0; i < 6; i++) {
    if (diceArr[i].clicked === 0) {
      diceArr[i].value = Math.floor(Math.random() * 6 + 1);
    }
  }
  updateDiceImg();
}

/*Updating images of dice given values of rollDice*/
function updateDiceImg() {
  var diceImage;
  for (var i = 0; i < 6; i++) {
    diceImage = "images/" + diceArr[i].value + ".png";
    var dice = document.getElementById("die" + parseInt(i + 1));
    dice.setAttribute("src", diceImage);
  }
}

function diceClick(img) {
  var i = img.getAttribute("data-number");
  console.log("i in diceClick() is " + i);

  img.classList.toggle("transparent");
  if (diceArr[i].clicked === 0) {
    diceArr[i].clicked = 1;
    scoreDice(i);
  } else {
    diceArr[i].clicked = 0;
    takeAwayDice(i);
  }
  //   console.log(diceArr);
}

function scoreDice(diceDataNumber) {
  console.log("diceDataNumber is " + diceDataNumber);
  diceBankedScore[diceArr[diceDataNumber].value]++;
  console.log(
    "diceArr[diceDataNumber].value is " + diceArr[diceDataNumber].value
  );
  addDiceToScore(diceArr[diceDataNumber].value);
}

function takeAwayDice(diceDataNumber) {
  diceBankedScore[diceArr[diceDataNumber].value]--;
  console.log(
    "diceArr[diceDataNumber].value is " + diceArr[diceDataNumber].value
  );
  removeDiceFromScore(diceArr[diceDataNumber].value);
}

// Increases the total score when a dice is unclicked
function addDiceToScore(diceValue) {
  console.log("diceValue is " + diceValue);
  var valueKey = parseInt(diceValue);
  switch (valueKey) {
    case 1:
      if (diceBankedScore[valueKey] === 1) {
        totalScore = totalScore + 100;
      } else if (diceBankedScore[valueKey] === 2) {
        totalScore = totalScore + 100;
      } else if (diceBankedScore[valueKey] === 3) {
        totalScore = totalScore + 1000;
      }
      break;

    case 2:
      if (diceBankedScore[valueKey] === 3) {
        totalScore = totalScore + 200;
      }
      break;

    case 3:
      if (diceBankedScore[valueKey] === 3) {
        totalScore = totalScore + 300;
      }
      break;

    case 4:
      if (diceBankedScore[valueKey] === 3) {
        totalScore = totalScore + 400;
      }
      break;

    case 5:
      if (diceBankedScore[valueKey] === 1) {
        totalScore = totalScore + 50;
      } else if (diceBankedScore[valueKey] === 2) {
        totalScore = totalScore + 50;
      } else if (diceBankedScore[valueKey] === 3) {
        totalScore = totalScore + 500;
      }
      break;

    case 6:
      if (diceBankedScore[valueKey] === 3) {
        totalScore = totalScore + 600;
      }
      break;
  }

  console.log("totalScore is " + totalScore);
  document.getElementById("totalScore").innerHTML = totalScore;
}

// Decreases the total score when a dice is unclicked
function removeDiceFromScore(diceValue) {
  console.log("diceValue is " + diceValue);
  var valueKey = parseInt(diceValue);
  switch (valueKey) {
    case 1:
      if (diceBankedScore[valueKey] === 0 || diceBankedScore[valueKey] === 1) {
        totalScore = totalScore - 100;
      } else if (diceBankedScore[valueKey] === 2) {
        totalScore = totalScore - 1000;
      }
      break;

    case 2:
      if (diceBankedScore[valueKey] === 2) {
        totalScore = totalScore - 200;
      }
      break;

    case 3:
      if (diceBankedScore[valueKey] === 2) {
        totalScore = totalScore - 300;
      }
      break;

    case 4:
      if (diceBankedScore[valueKey] === 2) {
        totalScore = totalScore - 400;
      }
      break;

    case 5:
      if (diceBankedScore[valueKey] === 0 || diceBankedScore[valueKey] === 1) {
        totalScore = totalScore - 50;
      } else if (diceBankedScore[valueKey] === 2) {
        totalScore = totalScore - 500;
      }
      break;

    case 6:
      if (diceBankedScore[valueKey] === 2) {
        totalScore = totalScore - 600;
      }
      break;
  }

  console.log("totalScore is " + totalScore);
  document.getElementById("totalScore").innerHTML = totalScore;
}
