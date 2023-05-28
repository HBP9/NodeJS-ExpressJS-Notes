const path = require('path'); //nodejs path function
const express = require('express');
const app = express();
const port = 3000;
const staticPath = path.join(__dirname,"../public"); //here path is use in wrapper function to get path of directory and .join join two different path __dirname is providing path

app.use(express.static(staticPath));  //built-in middleware which does all the funtion behind the code,staticPath is path of static website
app.get('/',(req,res) => {
    res.status(200).send()
});
app.listen(port,() => {
    console.log(`Port Is Listening On ${port}`);
})

//In this we are learning how to connect static website with html,css,js into express js
//Never use relative path while providing it for website