const express = require('express');
const app = express();
app.get("/",(req,res) => {
    res.send("Hello from backend");
});
app.listen(8000,() => {
    console.log("Listening to Port");
})

//The Callback function has 2 parameters,request(req) and response(res)
//The request object(req) represents the http requests and has properties for the request query string,
//parameters,body,HTTP headers etc
//Similarly,the response object(res) represents the HTTP response that the Express app sends when it receives an HTTP request.