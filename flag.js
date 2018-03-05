#!/usr/bin/env node

const repl = require('repl');
const chalk = require('chalk');

// Set variables
const star = chalk.white.bgBlue.bold('*');
const blue = chalk.bgBlue(' ');
const red = chalk.bgRed('                                   ');
const white = chalk.bgWhite('                                   ');
const blue_redStripe = `${blue}${star}${blue}${star}${blue}${star}${blue}${star}${blue}${star}${blue}${star}${blue}${star}${blue}${red}`;
const blue_whiteStripe = `${blue}${blue}${star}${blue}${star}${blue}${star}${blue}${star}${blue}${star}${blue}${star}${blue}${blue}${white}`;
const redStripe = chalk.bgRed('                                                  ');
const whiteStripe = chalk.bgWhite('                                                  ');

// Create Flag
console.log(blue_redStripe);
console.log(blue_whiteStripe);
console.log(blue_redStripe);
console.log(blue_whiteStripe);
console.log(blue_redStripe);
console.log(blue_whiteStripe);
console.log(blue_redStripe);
console.log(whiteStripe);
console.log(redStripe);
console.log(whiteStripe);
console.log(redStripe);
console.log(whiteStripe);
console.log(redStripe);





