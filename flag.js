#!/usr/bin/env node

const repl = require('repl');
const chalk = require('chalk');

// Set variables
const stars7 = chalk.white.bgBlue.bold(' * * * * * * * ');
const stars6 = chalk.white.bgBlue.bold('  * * * * * *  ')
const red = chalk.bgRed('                                   ');
const white = chalk.bgWhite('                                   ');
const blue_redStripe = `${stars7}${red}`;
const blue_whiteStripe = `${stars6}${white}`;
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





