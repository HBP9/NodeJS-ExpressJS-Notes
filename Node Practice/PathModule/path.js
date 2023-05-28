const path = require('path');
console.log(path.dirname('C:/Users/hp/OneDrive/Desktop/Node Practice/PathModule/path.js')); // To know directory name
console.log(path.extname('C:/Users/hp/OneDrive/Desktop/Node Practice/PathModule/path.js')); // To Know Extension of your file
console.log(path.basename('C:/Users/hp/OneDrive/Desktop/Node Practice/PathModule/path.js')); // To know file name
console.log(path.parse('C:/Users/hp/OneDrive/Desktop/Node Practice/PathModule/path.js')); // To know complete data about path
const name = path.parse('C:/Users/hp/OneDrive/Desktop/Node Practice/PathModule/path.js');
console.log(name.name) // To know any specific detail about your file
