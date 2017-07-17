function Student(fName, lName, ACC200, FIN201, BUSM241, IS110, IS201, IS303) {
	this.fName = fName;
	this.lName = lName;
	this.ACC200 = ACC200;
	this.FIN201 = FIN201;
	this.BUSM241 = BUSM241;
	this.IS110 = IS110;
	this.IS201 = IS201;
	this.IS303 = IS303;
	this.gpa = (getGPA(ACC200, 3) + getGPA(FIN201, 3) + getGPA(BUSM241, 3) + getGPA(IS110, 1) + getGPA(IS201, 3) + getGPA(IS303, 3)) / 16;
	this.probability = getAccepted(this.gpa);
} //create student class

function Global(i) {
	this.i = i;
} // create global variable that can be passed by reference.


function getGPA(course, credits) {
	return Number(course) * credits;
} 

function getAccepted(iGPA) {
	var probability;

	if (iGPA >= 3.7) {
		probability = "HIGH PROBABILITY";
	}
	else if (iGPA >= 3.5 && iGPA < 3.7) {
		probability = "MEDIUM PROBABILITY";
	}
	else if (iGPA >= 3.3 && iGPA < 3.5) {
		probability = "LOW PROBABILITY";
	}
	else if (iGPA < 3.3) {
		probability = "SLIGHT CHANCE";
	}
	return probability;
}

function getGPA_Value(str) {
	if (str === 'A') {
		return 4.0;
	} else if (str === 'A-') {
		return 3.7;
	} else if (str === 'B+') {
		return 3.4;
	} else if (str === 'B') {
		return 3.0;
	} else if (str === 'B-') {
		return 2.7;
	} else if (str === 'C+') {
		return 2.4;
	} else if (str === 'C') {
		return 2.0;
	} else if (str === 'C-') {
		return 1.7;
	} else if (str === 'D+') {
		return 1.4;
	} else if (str === 'D') {
		return 1.0;
	} else if (str === 'D-') {
		return 0.7;
	} else if (str === 'E') {
		return 0;
	}
	return null;
}


var studArray = []; // global student array passable by reference
var it = new Global(0); // call the global object iterator through it.i;
var numberOfStudents = new Global(1); // create global object number of students passable through reference

function go() {
	
	numberOfStudents.i = document.getElementById("number_of_students").value;
	
	if (isNull(numberOfStudents.i)) {
		alert("Please enter a valid number of students");
		return;
	}
	
	console.log("Number of Students: " + numberOfStudents.i); // for debug
	clear();
	
	printInput(it.i, numberOfStudents.i);
}

function clear() {
	var blank = "";
	var replaced = document.getElementById("replace_me");
	var inputs = document.getElementById("input");
	
	inputs.innerHTML = blank;
	replaced.innerHTML = blank;
}

function printInput(i, num) { //@param(iterator object passed by reference, number of students passed by reference)
	var input = document.getElementById("input");
	var studNumber = it.i + 1;
	var normalForm = "<h1><strong>Student " + studNumber + " of " + numberOfStudents.i + "</strong></h1>First Name: <input type='text' id='firstname' autofocus/><br/><br/>Last Name: <input type='text' id='lastname'/><br/><h3>Input Your Grades Below: </h3> <br /><h3>Business Prerequisites:</h3><br>ACC 200:<select id = 'ACC200'><option value = 'A'>A </option><option value = 'A-'>A-</option><option value = 'B+'>B+</option><option value = 'B'>B </option><option value = 'B-'>B-</option><option value = 'C+'>C+</option><option value = 'C'>C </option><option value = 'C-'>C-</option><option value = 'D+'>D+</option><option value = 'D'>D </option><option value = 'D-'>D-</option><option value = 'E'>E</option></select><br>FIN 201: <select id = 'FIN201'><option value = 'A'>A </option><option value = 'A-'>A-</option><option value = 'B+'>B+</option><option value = 'B'>B </option><option value = 'B-'>B-</option><option value = 'C+'>C+</option><option value = 'C'>C </option><option value = 'C-'>C-</option><option value = 'D+'>D+</option><option value = 'D'>D </option><option value = 'D-'>D-</option><option value = 'E'>E</option></select><br>BUS M 241: <select id = 'BUSM241'><option value = 'A'>A </option><option value = 'A-'>A-</option><option value = 'B+'>B+</option><option value = 'B'>B </option><option value = 'B-'>B-</option><option value = 'C+'>C+</option><option value = 'C'>C </option><option value = 'C-'>C-</option><option value = 'D+'>D+</option><option value = 'D'>D </option><option value = 'D-'>D-</option><option value = 'E'>E</option></select><br><br /><h3>Information Systems Prerequisites:</h3><br>IS 110: <select id = 'IS110'><option value = 'A'>A </option><option value = 'A-'>A-</option><option value = 'B+'>B+</option><option value = 'B'>B </option><option value = 'B-'>B-</option><option value = 'C+'>C+</option><option value = 'C'>C </option><option value = 'C-'>C-</option><option value = 'D+'>D+</option><option value = 'D'>D </option><option value = 'D-'>D-</option><option value = 'E'>E</option></select><br> IS 201: <select id = 'IS201'><option value = 'A'>A </option><option value = 'A-'>A-</option><option value = 'B+'>B+</option><option value = 'B'>B </option><option value = 'B-'>B-</option><option value = 'C+'>C+</option><option value = 'C'>C </option><option value = 'C-'>C-</option><option value = 'D+'>D+</option><option value = 'D'>D </option><option value = 'D-'>D-</option><option value = 'E'>E</option></select><br>IS 303: <select id = 'IS303'><option value = 'A'>A </option><option value = 'A-'>A-</option><option value = 'B+'>B+</option><option value = 'B'>B </option><option value = 'B-'>B-</option><option value = 'C+'>C+</option><option value = 'C'>C </option><option value = 'C-'>C-</option><option value = 'D+'>D+</option><option value = 'D'>D </option><option value = 'D-'>D-</option><option value = 'E'>E</option></select><br><br /><br /><br /><button onclick='next()'>Next Student</button><br/><br/><span id='write'> </span><script type='text/javascript' src='next.js'> </script>"
	
	var lastForm = "<h1><strong>Student " + studNumber + " of " + numberOfStudents.i + "</strong></h1>First Name: <input type='text' id='firstname' autofocus/><br/><br/>Last Name: <input type='text' id='lastname'/><br/><h3>Input Your Grades Below: </h3> <br /><h3>Business Prerequisites:</h3><br>ACC 200:<select id = 'ACC200'><option value = 'A'>A </option><option value = 'A-'>A-</option><option value = 'B+'>B+</option><option value = 'B'>B </option><option value = 'B-'>B-</option><option value = 'C+'>C+</option><option value = 'C'>C </option><option value = 'C-'>C-</option><option value = 'D+'>D+</option><option value = 'D'>D </option><option value = 'D-'>D-</option><option value = 'E'>E</option></select><br>FIN 201: <select id = 'FIN201'><option value = 'A'>A </option><option value = 'A-'>A-</option><option value = 'B+'>B+</option><option value = 'B'>B </option><option value = 'B-'>B-</option><option value = 'C+'>C+</option><option value = 'C'>C </option><option value = 'C-'>C-</option><option value = 'D+'>D+</option><option value = 'D'>D </option><option value = 'D-'>D-</option><option value = 'E'>E</option></select><br>BUS M 241: <select id = 'BUSM241'><option value = 'A'>A </option><option value = 'A-'>A-</option><option value = 'B+'>B+</option><option value = 'B'>B </option><option value = 'B-'>B-</option><option value = 'C+'>C+</option><option value = 'C'>C </option><option value = 'C-'>C-</option><option value = 'D+'>D+</option><option value = 'D'>D </option><option value = 'D-'>D-</option><option value = 'E'>E</option></select><br><br /><h3>Information Systems Prerequisites:</h3><br>IS 110: <select id = 'IS110'><option value = 'A'>A </option><option value = 'A-'>A-</option><option value = 'B+'>B+</option><option value = 'B'>B </option><option value = 'B-'>B-</option><option value = 'C+'>C+</option><option value = 'C'>C </option><option value = 'C-'>C-</option><option value = 'D+'>D+</option><option value = 'D'>D </option><option value = 'D-'>D-</option><option value = 'E'>E</option></select><br> IS 201: <select id = 'IS201'><option value = 'A'>A </option><option value = 'A-'>A-</option><option value = 'B+'>B+</option><option value = 'B'>B </option><option value = 'B-'>B-</option><option value = 'C+'>C+</option><option value = 'C'>C </option><option value = 'C-'>C-</option><option value = 'D+'>D+</option><option value = 'D'>D </option><option value = 'D-'>D-</option><option value = 'E'>E</option></select><br>IS 303: <select id = 'IS303'><option value = 'A'>A </option><option value = 'A-'>A-</option><option value = 'B+'>B+</option><option value = 'B'>B </option><option value = 'B-'>B-</option><option value = 'C+'>C+</option><option value = 'C'>C </option><option value = 'C-'>C-</option><option value = 'D+'>D+</option><option value = 'D'>D </option><option value = 'D-'>D-</option><option value = 'E'>E</option></select><br><br /><br /><br /><button onclick='results()'>Calculate!</button><br/><br/><span id='write'> </span>";
	if (studNumber < num)
		input.innerHTML = normalForm;
	else if (studNumber == num)
		input.innerHTML = lastForm;
	console.log("printed student input for it.i = " + it.i); // for debug
}

function isNull(str) {
	if (str == null) {
		return true;
	}
	return (str <= 0)? true : false;
}



function increment(Global) {
	Global.i++;
}

function next() {
	var ACC200 = getGPA_Value(document.getElementById("ACC200").value);
	var FIN201 = getGPA_Value(document.getElementById("FIN201").value);
	var BUSM241 = getGPA_Value(document.getElementById("BUSM241").value);
	var IS110 = getGPA_Value(document.getElementById("IS110").value);
	var IS201 = getGPA_Value(document.getElementById("IS201").value);
	var IS303 = getGPA_Value(document.getElementById("IS303").value);
	var firstName = document.getElementById("firstname").value;
	var lastName = document.getElementById("lastname").value;
	
	if (isNull(firstName)) {
		console.log("im null");
		alert("Please insert a first name.");
		return;
	}
	if (isNull(lastName)) {
		alert("Please insert a last name.");
		return;
	}
	
	studArray[it.i] = new Student(firstName, lastName, ACC200, FIN201, BUSM241, IS110, IS201, IS303);
	
	console.log(studArray[it.i].fName + " " + studArray[it.i].lName);
	console.log("GPA: " + studArray[it.i].gpa); // for debug
	increment(it);
	console.log("standby student and it.i is now " + it.i); // for debug
	printInput(it.i, numberOfStudents.i);
	console.log("accepted student at studArray[" + (it.i - 1) + "] and it.i incremented to " + it.i); // for debug
}

function results() {
	var ACC200 = getGPA_Value(document.getElementById("ACC200").value);
	var FIN201 = getGPA_Value(document.getElementById("FIN201").value);
	var BUSM241 = getGPA_Value(document.getElementById("BUSM241").value);
	var IS110 = getGPA_Value(document.getElementById("IS110").value);
	var IS201 = getGPA_Value(document.getElementById("IS201").value);
	var IS303 = getGPA_Value(document.getElementById("IS303").value);
	var firstName = document.getElementById("firstname").value;
	var lastName = document.getElementById("lastname").value;
	
	if (isNull(firstName)) {
		alert("Please insert a first name.");
		return;
	}
	if (isNull(lastName)) {
		alert("Please insert a last name.");
		return;
	}
	studArray[it.i] = new Student(firstName, lastName, ACC200, FIN201, BUSM241, IS110, IS201, IS303);
	
	console.log(studArray[it.i].fName + " " + studArray[it.i].lName); // for debug
	console.log("GPA: " + studArray[it.i].gpa);  // for debug
	clear();
	
	var results = document.getElementById("input");
	
	var i = 0;
	
	for (i = 0; i < studArray.length; i++) {
		console.log("im in the array");  // for debug
		results.innerHTML += studArray[i].fName + " " + studArray[i].lName + " with a GPA of " + studArray[i].gpa.toFixed(2) + " has a " + studArray[i].probability + " of being accepted. <br/><br/>";
	}
}





