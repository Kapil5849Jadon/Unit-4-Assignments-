// const express = require("express")
// console.log(express)
// const app = express()
// console.log(app)
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);
