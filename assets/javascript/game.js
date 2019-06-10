var wins = 0;
var losses = 0;
var yourScore = 0;

function myRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Function for win/loss conditions and outcomes
function checkYourScore() {
  yourScore = parseInt(yourScore);
  magicNumber = parseInt(magicNumber);

  if (yourScore === magicNumber) {
    wins++;
    $(".wins-text").text(wins);
    start();
  } else if (yourScore > magicNumber) {
    losses++;
    $(".losses-text").text(losses);
    start();
  }
};

//Button click functions
$(".crystal1").on("click", function () {
  yourScore += crystal1Value;
  $(".your-score").text(yourScore);
  checkYourScore();
});

$(".crystal2").on("click", function () {
  yourScore += crystal2Value;
  $(".your-score").text(yourScore);
  checkYourScore();
});

$(".crystal3").on("click", function () {
  yourScore += crystal3Value;
  $(".your-score").text(yourScore);
  checkYourScore();
});

$(".crystal4").on("click", function () {
  yourScore += crystal4Value;
  $(".your-score").text(yourScore);
  checkYourScore();
});

//Home state of game
function start() {
  magicNumber = myRandom(19, 120);
  crystal1Value = myRandom(1, 12);
  crystal2Value = myRandom(1, 12);
  crystal3Value = myRandom(1, 12);
  crystal4Value = myRandom(1, 12);
  yourScore = 0;

  $(".magic-number").text(magicNumber);
  $(".your-score").text(yourScore);
  $(".wins-text").text(wins);
  $(".losses-text").text(losses);
}
start();