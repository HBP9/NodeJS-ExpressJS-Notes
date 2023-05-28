const http = require('http'); //import http module
const fs = require('fs');
const server = http.createServer((req,res) => { //createServer create a new server with a callback function which have two necessary parameters which are req and res
    if (req.url == '/'){ //req take order from user to which site they have to go
    res.end("Home Page"); //res give response to user after redirecting to page
    } else if (req.url == '/about') { //.url is a module of nodejs but we can use it without importing it,it come under http module
        res.end("About Page");
    } else if (req.url == '/contact') {
        res.end("Contact Page");
    }else if (req.url == '/userapi') {
        fs.readFile(`${__dirname}/UserApi/api.json`,'utf-8',(err,data) => { console.log(data); const objData = JSON.parse(data); res.end(JSON.stringify(objData.Full[0].FirstName)); });
        // res.end(data);
    } else {
        res.writeHead(404,{"Content-type" : "text/html"}); //writeHead give our page a status code and we can define here what type of page it is
        res.end("<h1>Error Page Not Found</h1>"); //if its a html file you have to write it in its html format
    }
});
server.listen(8000,'127.0.0.1',() => { console.log("Listening to web server"); }); //.listen gives output of server request and response in this you have to add its port number which is not getting used and ip address with a callback function