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
app.use(express.static(__dirname));
// Routing
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});
// Starts the server.

// Add the WebSocket handlers
io.on('connection', function(socket) {
});

var players = {};
io.on('connection', function(socket) {
  socket.on('new player', function(data) {
	numPlayers++;
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
	  num: numPlayers,
	  name: data.pName,
	  isTurn: temp,
	  color: data.pColor
    };
  });
  socket.on('disconnect', function() {
	  numPlayers--;
	delete players[socket.id];
  });
  socket.on('move', function(data) {
    var player = players[socket.id] || {};
	if(player.isTurn)
	{
	if (data.left) {
      player.x -= 5;
    }
    if (data.up) {
      player.y -= 5;
    }
    if (data.right) {
      player.x += 5;
    }
    if (data.down) {
      player.y += 5;
    }
	if(data.next)
	{
		players[socket.id].isTurn = false;
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
	}
  });
});
setInterval(function() {
  io.sockets.emit('state', players);
}, 1000 / 60);
server.listen(app.get('port'), function() {
  console.log('Starting server on port 5000');
});