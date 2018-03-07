'use strict'
let { randomInt } = require('./math');

let toDiceNotation = (count, sides) => `${count}d${sides}`;
let roll = (dice) => {
  let [count, sides] = dice.split('d');
  let diceRoll = 0;

  for (let i = 0; i < count; i++) {
    diceRoll += randomInt(1, sides);
  }

  return diceRoll;
}

module.exports = { roll, toDiceNotation }