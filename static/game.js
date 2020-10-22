var name = localStorage.getItem("name");
var color = localStorage.getItem("color");
document.getElementById("name").innerHTML = ""+name;
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
socket.on('state', function(players) {
  /*for (var id in players) {
  }*/
});
var index = 1;
socket.on('list', function(players) {
	socket.on('numPlayers', function(numPlayers) {
		for(var id in players)
		{
			document.getElementById(index+"").innerHTML = ""+players[id].name;
			if(index == numPlayers)
			{
				if(numPlayers < 4)
				{
					var i = index+1;
					for(i; i <= 4; i++)
					{
						document.getElementById(i+"").innerHTML = "Open";
					}
				}
				index = 1;
			}
			else
			{
				index++;
			}
		}
	});
});