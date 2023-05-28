const os = require('os');
console.log(os.arch()); //to know architecture of your OS
console.log(os.hostname()); //to know hostname
console.log(os.platform()); //to know platform 
console.log(os.tmpdir()); //to know your temp directory location
console.log(os.type()); //to know your OS name
const freeMemory = os.freemem(); //to check free memory of RAM
console.log(`${freeMemory/1024/1024/1024}`);
const totalMemory = os.totalmem(); //to check total memory of RAM
console.log(`${totalMemory/1024/1024/1024}`);