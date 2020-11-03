var name = localStorage.getItem("name");
var color = localStorage.getItem("color");
var socket = io.connect();
var pData = {
	pName: name,
	pColor: color
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
setInterval(function() {
  socket.emit('move', move);
}, 1000/60);
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
var index = 1;
socket.on('list', function(players) {
	for(var id in players)
	{
		document.getElementById(index+"").innerHTML = ""+players[id].name;
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