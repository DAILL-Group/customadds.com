// default dependancies

var http = require("http");
var url = require("url");
var fs = require("fs");


// default files

var configFile = require("./config.json");

var homePage = require("./files/html/home.html");
var settingsPage = require("./files/html/settings.html");


// default datas

var serverPort = configFile.serverConfig.serverPort;


// Server function

var Server = http.createServer(function (req, res) {
     
     var page = url.parse(req.res).pathname;
     
     if (page == "/home") {
          
          res.writeHead(200, {"Content-Type": "text/html"})
          res.write(homePage)
     }
     
     if (page == "/settings") {
          
          res.writeHead(200, {"Content-Type": "text/html"})
          res.write(settingsPage)
          
     }
     
});

Server.listen(serverPort)
