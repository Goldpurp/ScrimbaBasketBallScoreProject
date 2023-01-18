let scoreElH = document.getElementById("score-elH");
let scoreElA = document.getElementById("score-elA");

let resetBtn = document.getElementById("reset-btn");


let btnHome1 = document.getElementById("btn1-home");
let btnHome2 = document.getElementById("btn2-home");
let btnHome3 = document.getElementById("btn3-home");

let btnAway1 = document.getElementById("btn1-away");
let btnAway2 = document.getElementById("btn2-away");
let btnAway3 = document.getElementById("btn3-away");

let pointH = 0
let pointA = 0
let resetAll = 0

      // ===Rest Updates===

function reset(){
  
  scoreElH.textContent = 0
  pointH = 0
 
  scoreElA.textContent = 0
  pointA = 0

}


// ===Home Plus Updates===

function homeScore1() {
  let btnHome1 = 1;

  pointH += btnHome1;

  scoreElH.textContent = pointH
  
}

function homeScore2() {
  let btnHome2 = 2;

  pointH += btnHome2;

  scoreElH.textContent = pointH
}

function homeScore3() {
  let btnHome3 = 3;

  pointH += btnHome3;

  scoreElH.textContent = pointH;
}


                // ===Home Minus Updates===

function homeScoreM1() {
  let btnHome1 = 1;

  pointH -= btnHome1;

  scoreElH.textContent = pointH;
}

function homeScoreM2() {
  let btnHome2 = 2;

  pointH -= btnHome2;

  scoreElH.textContent = pointH;
}

function homeScoreM3() {
  let btnHome3 = 3;

  pointH -= btnHome3;

  scoreElH.textContent = pointH;
}



             // ===Away  Plus Updates===


function awayScore1() {
  let btnAway1 = 1;

  pointA += btnAway1;

  scoreElA.textContent = pointA;
}

function awayScore2() {
  let btnAway2 = 2;

  pointA += btnAway2;

  scoreElA.textContent = pointA;
}

function awayScore3() {
  let btnAway3 = 3;

  pointA += btnAway3;

  scoreElA.textContent = pointA;
}

             // ===Away Minus Updates===

function awayScoreM1() {
  let btnAway1 = 1;

  pointA -= btnAway1;

  scoreElA.textContent = pointA;
}

function awayScoreM2() {
  let btnAway2 = 2;

  pointA -= btnAway2;

  scoreElA.textContent = pointA;
}

function awayScoreM3() {
  let btnAway3 = 3;

  pointA -= btnAway3;

  scoreElA.textContent = pointA;
}

