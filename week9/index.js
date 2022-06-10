// arrow functions
// const not let
// pure functions
// map, filter, and reduce.

// const doubleIt = (arr) => arr.map((i) => i * 2);
// const result = doubleIt([1, 2, 4]);
// console.log(result);

// const getNames = (arr) => arr.map((n) => n.name);

// const users = [{ name: "Rommel" }, { name: "Charlie" }, { name: "Donnahue" }];

// const names = getNames(users);
// const output = ["Rommel", "Charlie", "Donnahue"];
// assert.deepEqual(names, output);

// const getEvens = (arr) => arr.filter((i) => i % 2 === 0);
// const input = [1, 2, 3, 4];
// const expectedOutput = [2, 4];

// const output = getEvens(input);
// assert.deepEqual(output, expectedOutput);

// const formatUser = (arr) =>
//   arr.reduce((accumulator, current) => {
//     return { ...accumulator, [current.name]: current.interests };
//   }, {});

// const input = [
//   { name: "Rommel", interests: ["music", "rock"] },
//   { name: "Charlie", interests: ["travel"] },
//   { name: "Donnahue", interests: ["Python"] },
// ];

// const output = {
//   Rommel: ["music", "rock"],
//   Charlie: ["travel"],
//   Donnahue: ["Python"],
// };

const assert = require("assert");

const input = [
  { name: "Rommel", interests: ["music", "rock"], location: "MO" },
  { name: "Charlie", interests: ["travel"], location: "NY" },
  { name: "Donnahue", interests: ["Python"], location: "NY" },
];

const playersObject = { Rommel: true, Charlie: true, Donnahue: true };

const initializePlayers = (arr) =>
  arr.reduce((accumulator, current) => {
    return { ...accumulator, [current.name]: true };
  }, {});

const countPlayers = (userObject) => Object.keys(userObject).length;

const countDead = (userObject) =>
  Object.values(userObject).filter((e) => e === false).length;

const countAlive = (userObject) =>
  Object.values(userObject).filter((e) => e === true).length;

const killPlayer = (playerName, userObject) => ({
  ...userObject,
  [playerName]: false,
});

assert.deepEqual(playersObject, initializePlayers(input));
assert.equal(countPlayers(playersObject), 3);
assert.equal(countDead(playersObject), 0);
assert.equal(countAlive(playersObject), 3);
assert.deepEqual(killPlayer("Rommel", playersObject), {
  Rommel: false,
  Charlie: true,
  Donnahue: true,
});
assert.equal(countDead({ Rommel: false, Charlie: true, Donnahue: true }), 1);
console.log("All tests pass");
