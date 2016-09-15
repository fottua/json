var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = process.env.PORT || 8080;
server.listen(port);


app.get('/', function(req, res){
  res.send('hello world');
});
var request = server.get("http://stats.zello.com/channels-suggest/ru/", function(response) {
  response.send(request);
});



