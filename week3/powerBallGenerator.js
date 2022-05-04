function randomElement(arr) {
  var random = Math.random();
  var index = Math.floor(random * arr.length);
  return arr[index];
}

function getNumberArray(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(i + 1);
  }
  return arr;
}

function generate() {
  var whiteBalls = getNumberArray(69);
  var redBalls = getNumberArray(26);
  var powerBallNumbers = [];
  for (i = 0; i < 5; i++) {
    powerBallNumbers.push(randomElement(whiteBalls));
  }
  powerBallNumbers.push(randomElement(redBalls));
  return powerBallNumbers;
}

console.log(generate());
