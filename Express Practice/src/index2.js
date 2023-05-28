const path = require('path')
const express = require('express');
const app = express();
const port = 3000;
const resPath = path.join(__dirname,'../public')

//built-in middleware
app.use(express.static(resPath));
app.get('/',(req,res) => {
    res.send('Hello From The Express Server');
})
app.listen(port,() => {
    console.log(`Listening on Port ${port}`);
})

//Practice for static website