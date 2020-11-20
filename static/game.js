var name = localStorage.getItem("name");
var socket = io.connect();
var boardSpots = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var pData = {
	pName: name,
}
socket.on('message', function(data) {
  console.log(data);
});


var turn = {
	next: false,
	hasSpun: false
}
document.addEventListener('keydown',function(key){
	switch(key.keyCode){
		case 81:
			socket.emit('turnOver');
			break;
	}
});
document.addEventListener('keyup',function(key){
	switch(key.keyCode){
		case 81:
			turn.next = false;
			break;
	}
});




socket.emit('new player', pData);
function spin() {
		socket.emit('spin');
}
/*setInterval(function() {
  socket.emit('move', move);
}, 1000/60);*/
//var canvas = document.getElementById('canvas');
//canvas.width = 800;
//canvas.height = 600;
//var context = canvas.getContext('2d');
socket.on('state', function(players) {
	console.clear();
	for (var id in players) {
		var player = players[id];
		console.log(player.name);
	}
  /*context.clearRect(0, 0, 800, 600);
  for (var id in players) {
    var player = players[id];
	context.fillStyle = player.color;
    context.beginPath();
    context.arc(player.x, player.y, 10, 0, 2 * Math.PI);
    context.fill();
	 context.fillStyle = 'black';
	context.fillText(player.name, player.x-15, player.y+20);
	if(player.isTurn)
=======
socket.on('state', function(players) {
  /*for (var id in players) {
  }*/
});
socket.on('spinVal', function(tempVal) {
	window.alert(tempVal);
});


socket.on('yellowSpace', function(tempPoint) {
	window.alert(tempPoint);
});
socket.on('end', function(players){
	var max = -1000;
	var winner = "";
	for(var id in players)
	{
		if(players[id].score > max)
		{
			max = players[id].score;
			winner = players[id].name;
		}
	}
	window.alert("The winner is: "+winner);
	window.location.href="lobby.html";
});

var index = 1;
socket.on('list', function(players) {
	for(var i = 0; i < 49; i++)
	{
		for(var j = 1; j < 4; j++)
		{
			document.getElementById(""+i+""+j).innerHTML=" ";
		}
	}
	for(var id in players)
	{
		boardSpots[players[id].curSpot]++;
		if(players[id].curSpot > 0 && players[id].curSpot< 48)
			document.getElementById(""+players[id].curSpot+""+boardSpots[players[id].curSpot]).innerHTML = ""+players[id].name;
	}
	boardSpots = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
	for(var id in players)
	{
		document.getElementById(index+"").innerHTML = "Player " + index + ": " + players[id].name+" | Current Space: "+players[id].curSpot + " | Current Score: " + players[id].score + " | Major: " + players[id].major.name + " (+" + players[id].major.points + " points)";
		if(players[id].isTurn)
		{
			document.getElementById("turn").innerHTML=players[id].name+"'s turn";
		}
		index++;
	}
	if(index<5)
	{
		for(index; index<5; index++)
		{
			document.getElementById(index+"").innerHTML = "Open";
		}
	}
	index = 1;
});