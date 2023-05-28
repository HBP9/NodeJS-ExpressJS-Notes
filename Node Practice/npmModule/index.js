const chalk = require('chalk');
const validator = require('validator');
console.log(chalk.blue.italic.inverse('Hello world!'));
const res = validator.isEmail('yashvj97@gmail.com');
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));