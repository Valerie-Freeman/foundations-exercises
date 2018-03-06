'use strict'
let { randomInt } = require('./math');

let toDiceNotation = (count, sides) => `${count}d${sides}`;
let roll = (dice) => {
  let diceArr = dice.split('d');
  let lower = +diceArr[0];
  let upper = (+diceArr[0] * +diceArr[1]);
  return randomInt(lower, upper);
}

module.exports = { roll, toDiceNotation }