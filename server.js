var express = require('express');  
var app = express();  
var server = require('http').createServer(app);  
var io = require('socket.io')(server);
const Max = require('max-api');

server.listen(3000);

app.use(express.static(__dirname + '/'));  

io.on('connection', function(socket) {
  console.log('a new connection');

  socket.on('sensor', function(data) {
    // do something with sensordata
    console.log(data);
    Max.outlet(data);
  });

  socket.on('disconnection', function(){
    // do something with disconnedtioninformation
    console.log('a disconnection');
  });
});
