var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server)
var port = process.env.PORT || 80;
var Client = require('node-rest-client').Client;
server.listen(port);
var client = new Client();
 var obj = {};
 var _ = require('underscore');
// direct way 
client.get("http://stats.zello.com/channels-suggest/ua", function (data, response) {
    // parsed response body as js object 
    
    

    //for (var key in data) {
      for (i = 0; i < data.length; ++i){
        obj[i] = _.pick(data[i], 'channel');
        obj[i].channel_name = data[i].channel;//
        obj[i].on_devices = data[i].devices_online;//
        obj[i].admin = data[i].owner_name;//
        obj[i].user = data[i].users_online;//
        obj[i].description = data[i].channel_description;//
        obj[i].picture = data[i].profile.picture;//
        obj[i].voice = data[i].profile.voice;
        obj[i].moder = data[i].moderators;
        delete obj[i].channel;
        
      }
    //}; 
    // raw response 
});






 // });

app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.emit('news', obj);
  socket.on('my other event', function (obj) {
    
  });
});

io.on('connection', function(socket){
  
  
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
    io.emit('chat message', obj);
  });
});
