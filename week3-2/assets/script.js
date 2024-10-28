const WHITE_MAX = 69;
const RED_MAX = 26;

function getBall(maxValue) {
  return Math.ceil(Math.random() * maxValue);
}

function getPowerball() {
  var redBall = getBall(RED_MAX);
  var whiteBalls = [];

  //   for (let i = 0; i < 5; i++) {
  //     var whiteBall = getBall(WHITE_MAX);
  //     whiteBalls.push(whiteBall);
  //   }

  while (whiteBalls.length < 5) {
    var whiteBall = getBall(WHITE_MAX);
    if (!whiteBalls.includes(whiteBall)) {
      whiteBalls.push(whiteBall);
    }
  }

  document.getElementById('redball').innerHTML = 'Your Powerball: ' + redBall;
  document.getElementById('whiteballs').innerHTML =
    'Your White Balls: ' + whiteBalls;
}
