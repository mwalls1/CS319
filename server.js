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
var gEnd = true;
var gameStarted = false;
app.use(express.static(__dirname));
// Routing
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});
// Starts the server.

//space should include position on board, type, point increment, message
//position - position on gameboard - with table or coordinates?
//type - start, end, major, yellow
//points - points to be added to player's total - spaces with type "major" need specific points added to players
//message - to be displayed

function Space(position, type, points, message) {
	this.position = position;
	this.type = type;
	this.points = points;
	this.message = message;
}	

//still need to figure out position, but this is a start

var start = new Space(0, "start", 0, "Start");
var y0 = new Space(1, "yellow", 20, "Get accepted to ISU (+20)");
var y1 = new Space(2, "yellow", 10, "Move in to the dorms (+10)");
var y2 = new Space(3, "yellow", 10, "Join a club (+10)");
var y3 = new Space(4, "yellow", -5, "Turn all of your white clothes pink doing laundry (-5)");
var y4 = new Space(5, "yellow", 15, "Meet a new friend (+15)");
var gpa1 = new Space(6, "gpa", 10, "GPA Boost (+10)");
var y5 = new Space(7, "yellow", -15, "Fail a midterm (-15)");
var y6 = new Space(8, "yellow", 5, "Go to Cyclone Cinema (+5)");
var y7 = new Space(9, "yellow", -5, "Your roommate snores too loud (-5)");
var y8 = new Space(10, "yellow", 10, "Eat at Hickory Park (+10)");
var sophomore = new Space(11, "major", 0, "Start sophomore year");
var y9 = new Space(12, "yellow", 15, "Go to a football game (+15)");
var y10 = new Space(13, "yellow", -10, "Forgot to turn in an assignment (-10)");
var y11 = new Space(14, "yellow", 10, "Wing night at the dining center (+10)");
var y12 = new Space(15, "yellow", 5, "Get an on campus job (+5)");
var gpa2 = new Space(16, "gpa", 10, "GPA Boost (+10)");
var y13 = new Space(17, "yellow", -20, "Get Covid-19 (-20)");
var y14 = new Space(18, "yellow", 5, "Go campaniling (+5)");
var y15 = new Space(19, "yellow", -5, "Stuck washing dishing in the dining center (-5)");
var y16 = new Space(20, "yellow", 10, "Go to Barks at Parks (+10)");
var junior = new Space(21, "major", 0, "Start junior year");
var y17 = new Space(22, "yellow", 10, "Become a TA (+10)");
var y18 = new Space(23, "yellow", -10, "Cyclones lost a football game (-10)");
var y19 = new Space(24, "yellow", -5, "Car breaks down (-5)");
var y20 = new Space(25, "yellow", 10, "Join intramurals (+10)");
var y21 = new Space(26, "yellow", 5, "Go to ISU AfterDark (+5)");
var gpa3 = new Space(27, "gpa", 10, "GPA Boost (+10)");
var y22 = new Space(28, "yellow", -10, "Got locked out of your apartment (-10)");
var y23 = new Space(29, "yellow", 15, "Study abroad (+15)");
var y24 = new Space(30, "yellow", -5, "Lose your student ID (-5)");
var y25 = new Space(31, "yellow", 20, "Ace an exam (+20)");
var y26 = new Space(32, "yellow", 10, "Receive an academic scholarship (+10)");
var y27 = new Space(33, "yellow", -5, "Sleep past your alarm (-5)");
var y28 = new Space(34, "yellow", 10, "Pick up a minor (+10)");
var y29 = new Space(35, "yellow", 15, "Get a summer internship (+15)");
var senior = new Space(36, "major", 10, "Start senior year");
var y30 = new Space(37, "yellow", -15, "Step on the zodiac (-15)");
var y31 = new Space(38, "yellow", 10, "Become a peer mentor (+10)");
var y32 = new Space(39, "yellow", 5, "Visit Reiman Gardens (+5)");
var gpa4 = new Space(40, "gpa", 10, "GPA Boost (+10)");
var y33 = new Space(41, "yellow", -5, "Pop quiz (-5)");
var y34 = new Space(42, "yellow", -5, "Heater breaks (-5)");
var y35 = new Space(43, "yellow", 10, "See a concert at the Maintenance Shop (+10)");
var y36 = new Space(44, "yellow", 5, "Take a cycling class (+5)");
var y37 = new Space(45, "yellow", -10, "Fall asleep during lecture (-10)");
var y38 = new Space(46, "yellow", 10, "Go bowling at CyBowl & Billiards (+10)");
var y39 = new Space(47, "yellow", -5, "Dog eats your homework (-5)");
var end = new Space(48, "end", 20, "Graduation");

var board = new Array(start, y0, y1, y2, y3, y4, gpa1, y5, y6, y7, y8, sophomore, 
						y9, y10, y11, y12, gpa2, y13, y14, y15, y16, junior, y17, y18,
						y19, y20, y21, gpa3, y22, y23, y24, y25, y26, y27, y28, y29,
						senior, y30, y31, y32, gpa4, y33, y34, y35, y36, y37, y38, y39, end);
						

function Major(name, points) {
	this.name = name;
	this.points = points;
}	
var m1 = new Major("Business", 10);
var m2 = new Major("English", 5);
var m3 = new Major("History", 5);
var m4 = new Major("Engineering", 15);
var m5 = new Major("Design", 10);
var majors = [m1, m2, m3, m4, m5];

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
	  isReady: false,
	  num: numPlayers,
	  curSpot: 0, 
	  hasSpun: false,
	  score: 0,
	  finished: false,
	  major: majors[Math.floor(Math.random() * 5)]
    };
	var name = data.pName;
   io.to(socket.id).emit('name', name);
  });
  socket.on('disconnect', function() {
	  if(numPlayers>0)
		numPlayers--;
	  console.log('Player Disconnected. Num Players:'+numPlayers);
	delete players[socket.id];
  });
  socket.on('ready', function(data) {
	  players[socket.id].isReady = data;
  });
  socket.on('spin', function() {
    var player = players[socket.id] || {};
	if(player.isTurn && !player.hasSpun)
	{
		if(!player.finished)
		{
			player.hasSpun = true;
			var spinVal = Math.floor((Math.random() * 4) + 1);
			var gpaBoost = 0;
			var majorPoints = 0;
			if((player.curSpot < 6 && player.curSpot + spinVal > 6) || (player.curSpot < 16 && player.curSpot + spinVal > 16) || (player.curSpot < 40 && player.curSpot + spinVal > 40) || (player.curSpot < 27 && player.curSpot + spinVal > 27))
			{
				gpaBoost = 10;
			}
			if((player.curSpot < 11 && player.curSpot + spinVal > 11) || (player.curSpot < 21 && player.curSpot + spinVal > 21) || (player.curSpot < 36 && player.curSpot + spinVal > 36))
			{
				majorPoints = players[socket.id].major.points;
			}
			if((player.curSpot + spinVal)>=48)
			{
				player.finished = true;
				player.curSpot = 48;
			}
			else
				player.curSpot += spinVal;
			console.log(player.name+"is at "+player.curSpot);
			var tempVal = player.name+" spun a "+spinVal;
			io.sockets.emit('spinVal', tempVal);
			if(board[player.curSpot].type == "major")
				players[socket.id].score += players[socket.id].major.points+gpaBoost+majorPoints;
			else
				players[socket.id].score += board[player.curSpot].points+gpaBoost+majorPoints;
			var tempPoint;
			var addPoints;
			if(gpaBoost>0)
			{
				if(majorPoints>0)
					tempPoint = board[player.curSpot].message + " You also passed a GPA Boost tile(+10) and started a new year.  -->  Now " + player.name + " has "+ players[socket.id].score + " points.";
				else
					tempPoint = board[player.curSpot].message + " You also passed a GPA Boost tile(+10).  -->  Now " + player.name + " has "+ players[socket.id].score + " points.";
			}
			else if(majorPoints>0)
				tempPoint = board[player.curSpot].message + " You also started a new year.  -->  Now " + player.name + " has "+ players[socket.id].score + " points.";
			else
				tempPoint = board[player.curSpot].message + "  -->  Now " + player.name + " has "+ players[socket.id].score + " points.";
			io.sockets.emit('yellowSpace', tempPoint);
		}
		if(player.hasSpun||player.finished)
	    {
			player.isTurn = false;
			player.hasSpun = false;
			if(pTurn >= numPlayers)
			{
				pTurn = 1;
			}
			else
			{
				pTurn++;
			}
			for (var id in players) {
				if(players[id].num == pTurn && !players[id].finished)
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
  io.sockets.emit('list', players);
  gStart = true;
  gEnd = true;
  for(var id in players)
  {
	  if(!players[id].isReady)
	  {
		  gStart = false;
	  }
	  if(players[id].finished == false)
	  {
		  gEnd = false;
	  }
	  if(players[id].finished&&players[id].num==pTurn)
	  {
		  if(pTurn >= numPlayers)
			{
				pTurn = 1;
			}
			else
			{
				pTurn++;
			}
	  }
	  if(players[id].num==pTurn&&!players[id].finished)
		  players[id].isTurn = true;
  }
  if(!gameStarted && gStart && numPlayers > 0)
  {
	  gameStarted = true;
	  io.sockets.emit('start');
  }
  if(gameStarted && gEnd && numPlayers > 0)
  {
	  gameStarted = false;
	  io.sockets.emit('end', players);
  }
  
}, 100);
server.listen(app.get('port'), function() {
  console.log('Starting server on port 5000');
});