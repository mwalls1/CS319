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




