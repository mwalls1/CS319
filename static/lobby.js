var name = localStorage.getItem("name");
var socket = io.connect();

var temp1 = new Image(15,15);
temp1.src = '../images/notReady.png';
var temp2 = new Image(15,15);
temp2.src = '../images/ready.png';

var temp3 = new Image(15,15);
temp3.src = '../images/notReady.png';
var temp4 = new Image(15,15);
temp4.src = '../images/ready.png';

var temp5 = new Image(15,15);
temp5.src = '../images/notReady.png';
var temp6 = new Image(15,15);
temp6.src = '../images/ready.png';

var temp7 = new Image(15,15);
temp7.src = '../images/notReady.png';
var temp8 = new Image(15,15);
temp8.src = '../images/ready.png';

var nReady1 = temp1;
var Ready1 =temp2;
var nReady2 = temp3;
var Ready2 =temp4;
var nReady3 = temp5;
var Ready3 =temp6;
var nReady4 = temp7;
var Ready4 =temp8;


var listData = {};
var data = false;
var pData = {
	pName: name
}
var index = 1;
socket.emit('new player', pData);
function readyCheck()
{
	data = !data;
	socket.emit('ready',data);
	console.log(data);
}
var index = 1;
socket.on('start', function(){
	console.log("start");
	window.location.href="board3.html";
});
socket.on('list', function(players) {
	for(var id in players)
	{
		document.getElementById(index+"").innerHTML = ""+players[id].name;
		if(!players[id].isReady)
		{
			if(index==1)
			{
				document.getElementById(index+"").appendChild(nReady1);
			}
			if(index==2)
			{
				document.getElementById(index+"").appendChild(nReady2);
			}
			if(index==3)
			{
				document.getElementById(index+"").appendChild(nReady3);
			}
			if(index==4)
			{
				document.getElementById(index+"").appendChild(nReady4);
			}
		}
		else if(players[id].isReady){
			if(index==1)
			{
				document.getElementById(index+"").appendChild(Ready1);
			}
			if(index==2)
			{
				document.getElementById(index+"").appendChild(Ready2);
			}
			if(index==3)
			{
				document.getElementById(index+"").appendChild(Ready3);
			}
			if(index==4)
			{
				document.getElementById(index+"").appendChild(Ready4);
			}
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
function back(){
	window.location.replace("../index.html");
}





