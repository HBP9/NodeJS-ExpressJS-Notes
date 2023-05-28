const express = require('express');
const app = express();
const port = 3000;

app.get("/",(req,res) => {
    res.status(200).send("<h1>Welcome To Home Page</h1>"); //status() gives status code in http header which is a good practice here we are learning how we can use html element in express
})
app.get("/temp",(req,res) => {
    res.status(200).send({
        id: 1,
        name: "Yash"
    }) //here we can see how can we use plain js object and array which express converts into json file and serve it as json in api
})
app.get("/about",(req,res) => {
    res.status(200).json([{
        id: 1,
        name: "Yash"
    }]) //this is a second method to pass json data in an api
})
app.listen(port,() => {
    console.log(`Listening On Port Number ${port}`);
})

//Although .json and .send looks identical they work differenly
//res.json() will also convert non-objects, such as null and unidentified which are non valid json