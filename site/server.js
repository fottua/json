var app = require('express')();
var server = require('http').createServer(app);

var port = process.env.PORT || 80;
server.listen(port);
var obj={};
var unirest = require('unirest');

unirest.get("http://stats..com/channels-suggest/ru")
  .send()
  .end(response=> {
    if (response.ok) {
      
	  obj = JSON.parse(response.raw_body);
	  return obj;
    } else {
      console.log("Got an error: ", response.error)
    }
  })
  app.get('/', function (req, res) {
  res.send(obj);
});
