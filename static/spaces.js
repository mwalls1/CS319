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
var major = new Space(1, "major", 0, "Choose Major");
var y1 = new Space(2, "yellow", 10, "Move in");
var y2 = new Space(3, "yellow", 10, "Join a club");
var y3 = new Space(4, "yellow", -5, "Turn all of your white clothes pink doing laundry");
var y4 = new Space(5, "yellow", 5, "Meet a new friend");
var gpa1 = new Space(6, "major", 0, "GPA Boost");
var y5 = new Space(7, "yellow", -15, "Fail a midterm");
var y6 = new Space(8, "yellow", 5, "Go campaniling");
var y7 = new Space(9, "yellow", -5, "Your roommate snores too loud");
var y8 = new Space(10, "yellow", 5, "Eat at Hickory Park");
var sophomore = new Space(11, "major", 0, "Start sophomore year");
var y9 = new Space(12, "yellow", 5, "Go to a football game");
var y10 = new Space(13, "yellow", -10, "Forgot to turn in an assignment");
var y11 = new Space(14, "yellow", 10, "Wing night at the dining center");
var y12 = new Space(15, "yellow", 5, "Get an on campus job");
var gpa2 = new Space(16, "major", 0, "GPA Boost");
var y13 = new Space(17, "yellow", -20, "Get Covid-19");
var y14 = new Space(18, "yellow", 5, "Go to Cyclone Cinema");
var y15 = new Space(19, "yellow", -5, "Stuck washing dishing in the dining center");
var y16 = new Space(20, "yellow", 5, "Go to Barks at Parks");
var junior = new Space(21, "major", 0, "Start junior year");
var y17 = new Space(22, "yellow", 10, "Become a TA");
var y18 = new Space(23, "yellow", -10, "Cyclones lost a football game");
var y19 = new Space(24, "yellow", -5, "Car breaks down");
var y20 = new Space(25, "yellow", 5, "Join intramurals");
var y21 = new Space(26, "yellow", 5, "Go to ISU AfterDark");
var gpa3 = new Space(27, "major", 0, "GPA Boost");
var y22 = new Space(28, "yellow", -10, "Got locked out of your apartment");
var y23 = new Space(29, "yellow", 15, "Study abroad");
var y24 = new Space(30, "yellow", -5, "Lose your student ID");
var y25 = new Space(31, "yellow", 10, "Ace an exam");
var y26 = new Space(32, "yellow", 15, "Receive an academic scholarship");
var y27 = new Space(33, "yellow", -5, "Sleep past your alarm");
var y28 = new Space(34, "yellow", -5, "Pop quiz");
var y29 = new Space(35, "yellow", 15, "Get a summer internship");
var senior = new Space(36, "major", 0, "Start senior year");
var y30 = new Space(37, "yellow", 15, "Pick up a minor");
var y31 = new Space(38, "yellow", 10, "Become a peer mentor");
var y32 = new Space(39, "yellow", 5, "Visit Reiman Gardens");
var gpa4 = new Space(40, "major", 0, "GPA Boost");
var y33 = new Space(41, "yellow", -10, "Forgot to submit a group project");
var y34 = new Space(42, "yellow", -5, "Heater breaks");
var y35 = new Space(43, "yellow", -5, "Dog eats your homework");
var y36 = new Space(44, "yellow", -10, "Fall asleep during lecture");
var y37 = new Space(45, "yellow", 5, "Take a cycling class");
var y38 = new Space(46, "yellow", -5, "Fall on the treadmill at the gym");
var y39 = new Space(47, "yellow", -5, "Pull an all-nighter");
var end = new Space(48, "end", 0, "Graduation");

var board = new Array(start, major, y1, y2, y3, y4, gpa1, y5, y6, y7, y8, sophomore, 
						y9, y10, y11, y12, gpa2, y13, y14, y15, y16, junior, y17, y18,
						y19, y20, y21, gpa3, y22, y23, y24, y25, y26, y27, y28, y29,
						senior, y30, y31, y32, gpa4, y33, y34, y35, y37, y38, y39, end);
						