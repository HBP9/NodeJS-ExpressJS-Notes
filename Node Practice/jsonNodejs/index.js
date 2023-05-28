//How to create a JSON(JavaScript Object Notation) File.
//JSON Have only 2 method to create data into json file.
//First is parse and second is stringfy.
//Stringify method is only used when you have to convert object or array into json.
//Parse method is only used to convert json into object form.
//Example :
const fs = require('fs');
const object = {
    name : 'Yash',
    age : '21',
    description : 'Node Practice',
};
// const jsonData = JSON.stringify(object); //Converting Object Into JSON file using stringify
// // console.log(jsonData);
// const data = JSON.parse(jsonData); //Converting JSON file into object
// // console.log(data);
const jsonData = JSON.stringify(object); //Converting Object into json file
// fs.writeFile('data.json',jsonData,(err) => { console.log("Completed"); }); //creating a json file using object data and fs module
// fs.readFile('data.json','utf-8',(err,data) => { const orgData = JSON.parse(data); console.log(orgData); }); //reading json file and then converting it to object again using parse