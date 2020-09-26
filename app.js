const chalk = require('chalk');


const getNotes = require('./notes');

getNotes();

console.log(chalk.blue('Here I am in Blue!'));

const greenMsg = chalk.green('Success');
const boldGreenMsg = chalk.green.bgRed.bold('Success');
console.log(greenMsg);
console.log(boldGreenMsg);
