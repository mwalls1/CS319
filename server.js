var numPlayers = 0;
var pTurn = 1;
var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');
var app = express();
app.set('port', process.env.PORT || 5000);
var server = http.createServer(app);
var io = require('socket.io').listen(server);
var gStart = true;
var gameStarted = false;
app.use(express.static(__dirname));
// Routing
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});
// Starts the server.


var players = {};
io.on('connection', function(socket) {
  socket.on('new player', function(data) {
	numPlayers++;
	console.log('New player connected. Num Players:'+numPlayers);
	var temp;
	if(numPlayers==pTurn)
	{
		temp = true;
	}
	else
	{
		temp = false;
	}
    players[socket.id] = {
      x: 300,
	  y: 300,
	  name: data.pName,
	  isTurn: temp,
	  color: data.pColor,
	  isReady: false,
	  num: numPlayers,
	  curSpot: 0
    };
	var name = data.pName;
   io.to(socket.id).emit('name', name);
  });
  socket.on('disconnect', function() {
	  numPlayers--;
	  console.log('Player Disconnected. Num Players:'+numPlayers);
	delete players[socket.id];
  });
  socket.on('ready', function(data) {
	  players[socket.id].isReady = data;
  });
  socket.on('turnOver', function (){
	   var player = players[socket.id] || {};
	   if(player.isTurn)
	   {
			player.isTurn = false;
			if(pTurn >= numPlayers)
			{
				pTurn = 1;
			}
			else
			{
				pTurn++;
			}
			for (var id in players) {
				if(players[id].num == pTurn)
				{
					players[id].isTurn = true;
				}
			}
	   }
  });
  socket.on('spin', function() {
    var player = players[socket.id] || {};
	if(player.isTurn)
	{
		var spinVal = Math.floor((Math.random() * 4) + 1);
		player.curSpot += spinVal;
		var tempVal = player.name+" spun a "+spinVal;
		io.sockets.emit('spinVal', tempVal);
	}
  });
});
setInterval(function() {
  io.sockets.emit('state', players);
  io.sockets.emit('list', players);
  gStart = true;
  for(var id in players)
  {
	  if(!players[id].isReady)
	  {
		  gStart = false;
	  }
  }
  if(!gameStarted && gStart && numPlayers > 0)
  {
	  io.sockets.emit('start');
  }
  
}, 1000);
server.listen(app.get('port'), function() {
  console.log('Starting server on port 5000');
});