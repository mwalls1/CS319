//NEW SEMESTER/YEAR
var spaces = {};

//Choose a major!
if (player.location == 1){ 
	player.points += player.major.points;
	alert ("You chose your major! Your major is " + player.major + ". +" + player.major.points);
}
var temp = {
	points: 10,
	string: "You afunboasbfoilabfo"
}
spaces[1] = temp;



alert(player.name+" "+spaces[player.curSpot].string);


//Sophmore Year
else if (player.location == 11){ 
	player.points += player.major.points;
	alert ("Start of Sophmore Year! New year, new adventures! +" + player.major.points);
}
//Junior Year
else if (player.location == 21){ 
	player.points += player.major.points;
	alert ("Start of Junior Year! You got this! +" + player.major.points);
}
//Senior Year
else if (player.location == 36){ 
	player.points += player.major.points;
	alert ("Senior Year! Almost there! +" + player.major.points);
}
//GPA Boost
else if (player.location == 6 || player.location == 16 || player.location == 27 || player.location == 40 ){
	player.points += player.major.points;
	alert ("GPA Boost! +" + player.major.points);
}
//graduation
else if (player.location == 48){
	alert("You graduated!!!!");
//GOOD
//join a club
else if (player.location == ){
	player.points += 10;
	alert ("Joined a new club! +10");
}
//meet a new friend
else if (player.location == ){
	player.points += 5;
	alert ("Meet a new friend! +5");
}
//go to ISU AfterDark
else if (player.location == ){
	player.points += 5;
	alert ("Had fun at ISU AfterDark! +5");
}
//join intramurals
else if (player.location == ){
	player.points += 5;
	alert ("Join an intramural with friends on your floor +5");
}
//wing night at the dining center
else if (player.location == ){
	player.points += 10;
	alert ("Wing night at the dining center! +10");
}
//get a summer internship
else if (player.location == ){
	player.points += 15;
	alert ("Secured a summer internship! +15");
}

//go to barks at parks
else if (player.location == ){
	player.points += 5;
	alert ("Saw lots of cute puppies at Barks at Parks +5");
}
//ace an exam
else if (player.location == ){
	player.points += 10;
	alert ("Aced your exam! +10");
}
//receive an academic scholarship
else if (player.location == ){
	player.points += 15;
	alert ("Received a $1000 Academic Scholarship! +15");
}
//study abroad
else if (player.location == ){
	player.points += 15;
	alert ("Studied abroad for the semester! +15");
}
//on campus job
else if (player.location == ){
	player.points += 5;
	alert ("Get an on campus job! +5");
}
//move in
else if (player.location == ){
	player.points += 10;
	alert ("Moved into your new dorm! +10");
}
//take a cycling class
else if (player.location == ){
	player.points += 5;
	alert ("Take a cycling class +5");
}

//become a peer mentor
else if (player.location == ){
	player.points += 10;
	alert ("Become a peer mentor for freshmen in your major! +10");
}
//go to cyclone cinema
else if (player.location == ){
	player.points += 5;
	alert ("Go to Cyclone Cinema with some of your friends! +5");
}
//go campaniling
else if (player.location == ){
	player.points += 5;
	alert ("Go campaniling! +5");
}
//eat a Hickory Park
else if (player.location == ){
	player.points += 5;
	alert ("Eat a Hickory Park! +5");
}
//go to a football game
else if (player.location == ){
	player.points += 5;
	alert ("Go to a Cyclones Football Game! +5");
}
//become a TA
else if (player.location == ){
	player.points += 10;
	alert ("Become a TA! +10");
}
//visit Reiman Gardens
else if (player.location == ){
	player.points += 5;
	alert ("Visit Reiman Gardens! +5");
}
//pick up a minor
else if (player.location == ){
	player.points += 15;
	alert ("Pick up a minor in something you are passionate about! +15");
}
//BAD
//car broke down
else if (player.location == ){
	player.points -= 5;
	alert ("Car broke down :( -5");
}
//heater broke
else if (player.location == ){
	player.points -= 5;
	alert ("The heater in your dorm room broke -5");
}
//fall on treadmill at the gym
else if (player.location == ){
	player.points -= 5;
	alert ("You fell on the treadmill at the gym. Ouch -5");
}
//forget to turn in an assignment
else if (player.location == ){
	player.points -= 10;
	alert ("Your forgot to complete a big assignment for one of your classes -10");
}
//fail a midterm
else if (player.location == ){
	player.points -= 15;
	alert ("Failed a midterm -15");
}
//get Covid-19
else if (player.location == ){
	player.points -= 20;
	alert ("Got Covid-19 and have to go live in Linden for the next week. :( -20");
}
//stuck washing dishes at the dining enter 
else if (player.location == ){
	player.points -= 5;
	alert ("Got stuck washing the dishes at the dining center -5");
}
//lose your student ID
else if (player.location == ){
	player.points -= 5;
	alert ("Lost your student ID card -5");
}
//pull an all-nighter
else if (player.location == ){
	player.points -= 5;
	alert ("Pull an All-Nighter -5");
}
//cyclones lost a football game
else if (player.location == ){
	player.points -= 10;
	alert ("Cyclones lost the football game against Iowa -10");
}
//your roommate snores too loud
else if (player.location == ){
	player.points -= 5;
	alert ("Your roommate snores very loudly and keeps you up for hours -5");
}
//forget to submit a project
else if (player.location == ){
	player.points -= 10;
	alert ("Forgot to submit an assignment -10");
}
//pop quiz
else if (player.location == ){
	player.points -= 5;
	alert ("Pop Quiz :( -5");
}
//dog ate your homework
else if (player.location == ){
	player.points -= 5;
	alert ("Your dog ate your homework but your professor does not believe you -5");
}
//fall asleep during lecture
else if (player.location == ){
	player.points -= 15;
	alert ("You fell asleep during a really borring lecture -10");
}
//sleep past your alarm
else if (player.location == ){
	player.points -= 5;
	alert ("You slept past your alarm and missed your 8am class -5");
}
//turned all your white clothes pink while doing laundry
else if (player.location == ){
	player.points -= 5;
	alert ("All your white clothes turned pink while doing laundry -5");
}
//get locked out of your apartment
else if (player.location == ){
	player.points -= 10;
	alert ("You got locked out of your apartment and your roommate will not be back for hours. -10");
}