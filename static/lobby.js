var name = localStorage.getItem("name");
var color = localStorage.getItem("color");
console.log(name+" "+color);
var socket = io.connect();
var listData = {};
var pData = {
	pName: name,
	pColor: color
}
var index = 1;
socket.emit('new player', pData);
socket.on('message', function(data) {
  console.log(data);
});
var index = 1;
socket.on('start', function(){
	console.log("start");
	window.location.href="board3.html";
});
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




