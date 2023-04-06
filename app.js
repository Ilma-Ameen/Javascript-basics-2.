//------chapter 12 : if...else and else if statements-------

var x = prompt("Where does the Pope live?");
if (x === "Vatican") {
alert("Correct!");
}


var x = prompt("Where does the Pope live?");
if (x === "Vatican") {
alert("Correct!");
}
if (x !== "Vatican") {
alert("Wrong answer");
}

if (x === "Vatican") {
alert("Correct!");
}
else {
alert("Wrong answer");
}

var correctAnswer = "Vatican";
if (x === correctAnswer) {
alert("Correct!");
}
else {
score--;
userIQ = "problematic";
alert("Incorrect");
}

var correctAnswer = "Vatican";
if (x === correctAnswer) {

alert("Correct!");
}
else if (x === "Rome") {
alert("Incorrect but close");
}
else {
alert("Incorrect");
}

//------chapter 13 : Testing sets of conditions-------

if (weight > 300 && time < 6) {
alert("Come to our tryout!");
}
else {
alert("Come to our cookout!");
}

if (weight > 300 && time < 6 && age > 17 && gender === "male") {
alert("Come to our tryout!");
}
else {
alert("Come to our cookout!");
}

// Here's an example of OR || operator.
if (SAT > avg || GPA > 2.5 || sport === "football") {
alert("Welcome to Bubba State!");
}
else {
alert("Have you looked into appliance repair?");
}


if (age > 65 || age < 21 && res === "U.S.") 
{
    console.log("It's pass");
}
if ((age > 65 || age < 21) && res === "U.S.") 
{
    console.log("It'a pass");
}
if (age > 65 || (age < 21 && res === "U.S."))
{
    console.log("It'a pass");
}
else{
    console.log("It's Fail");
}


//-------- chapter 14 : if statements nested--------

if ((x === y || a === b) && c === d)
{
    g = h;
    }
    else {
    e = f;
    }
if (c === d) 
{
    if (x === y)
     {
       g = h;
     }
     else if (a === b) 
     {
       g = h;
     }
    else {
    e = f;
    }
}
    else 
    {
    e = f;
}

//-------- chapter 15 : Arrays--------

var city0 = "Atlanta";
var city1 = "Baltimore";
var city2 = "Chicago";
var city3 = "Denver";
var city4 = "Los Angeles";
var city5 = "Seattle";

alert("Welcome to " + city3);

var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];

alert("Welcome to " + cities[3]);

var mixedArray = [1, "Bob", "Now is", true];


//-------- chapter 16 : Arrays: Adding and removing elements--------

var pets = [];

pets[0] = "dog";
pets[1] = "cat";
pets[2] = "bird";

pets[3] = "lizard";
pets[6] = "snake";

pets[3] = "lizard";
pets[4] = "fish";
pets[5] = "gerbil";
pets[6] = "snake";

pets.pop();  //pop to remove the item from array list
pets.push("fish", "ferret"); //push to add the item from array list



    