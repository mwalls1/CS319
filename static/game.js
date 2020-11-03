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


var move = {
	up: false,
	down: false,
	left: false,
	right: false,
	next: false
}
document.addEventListener('keydown',function(key){
	switch(key.keyCode){
		case 65:
			move.left = true;
			break;
		case 87:
			move.up = true;
			break;
		case 68:
			move.right = true;
			break;
		case 83:
			move.down = true;
			break;
		case 81:
			move.next = true;
			break;
	}
});
document.addEventListener('keyup',function(key){
	switch(key.keyCode){
		case 65:
			move.left = false;
			break;
		case 87:
			move.up = false;
			break;
		case 68:
			move.right = false;
			break;
		case 83:
			move.down = false;
			break;
		case 81:
			move.next = false;
			break;
	}
});




socket.emit('new player', pData);
setInterval(function() {
  socket.emit('move', move);
}, 1000/60);
<<<<<<< HEAD
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
var index = 1;
socket.on('list', function(players) {
	for(var id in players)
	{
		document.getElementById(index+"").innerHTML = ""+players[id].name;
		index++;
	}
	if(index<5)
>>>>>>> origin/masonsBranch
	{
		for(index; index<5; index++)
		{
			document.getElementById(index+"").innerHTML = "Open";
		}
	}
<<<<<<< HEAD
  }*/
=======
	index = 1;
>>>>>>> origin/masonsBranch
});