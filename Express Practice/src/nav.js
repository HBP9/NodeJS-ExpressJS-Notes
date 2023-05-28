const express = require('express');
const app = express();

app.get("/",(req,res) => {
    res.send('Welcome to home page');
});
app.get("/about",(req,res) => {
    res.send('Welcome to about page');
});
app.get("/contact",(req,res) => {
    res.send('Welcome to contact page');
});
app.get("/temp",(req,res) => {
    res.send('Welcome to temp page');
});
app.listen("3000",() => {
    console.log(`Port Is Listening on 3000`);
});

//How to do navigation using express