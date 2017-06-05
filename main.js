// Answer the following questions in this file using comments without running the code

// 1.
// What does `givenName` equal right now?
var givenName;
// A: givenName is being stored as a vaiable, but has not yet been assigned a value.


// 2.
// What is `givenName` set to right now?
givenName = "Tim";
// A: givenName has been assigned "Tim"


// 3.
// What is `givenName` set to right now?
givenName = givenName;
// A:  givenName is set to "givenName".  This woudl return a Boolean statement of True.


// 4.
// What is `greeting` set to?
var greeting = "Hello, how are you? " + givenName;
// A: greeting is set to "Hello, how are you?" + givenName.  This would result in javascript concatonating the string "Hellow, how are you?" with the variable givenName.


// 5.
// What is `math` set to?
var high = 50;
var low  = 10;
var math = high - low;
// A: the variable math is set to high - low.  high is set to 50 and low is set to 10.  In this case the variable would be 40.


// 6.
// What is `math` set to?
math = high - "5";
// A:  In this example, math is set to the value of high - "5".  the variable high is set to 50, which is a number.  But "5" is a string.  Because the operation started out as a number, javascript translates the string "5" as a number, and preforms math, the result being 45.


// 7.
// Create a variable to calculate Tim's age
// The answer should read "Tim is 33 years old"
// The answer shoud not be written in a comment.
var born = 1984;
var today = 2017;
var age = today - born;
console.log(age);
// A:


// 8.
// Adjust this code. Store some information in the following variables.
// A:
var yourName = "Ethan";
var instructorName = "Kelly";



// 9.
// Update the variables `yourName` and `instructorName` so the expression below reads correctly.
// A:
var yourName = "Ethan";
var instructorName = "Kelly";


// This statement should read correctly
var statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;


// 10.
// We've created a variable named after each primitive type.
// Use the `=` operator to assign a value to each variable matching the type in the name.
var myNumber = 0;
var myString = "My Shoelaces are Strings";
var myBoolean = 10 > 9;
// This one's a little tricky - think carefully about what makes a value "undefined"!
var myUndefined;
// A:  If you fail to assign a value to anything, the variable will automatically return as undefined, since it hasn't been defined.


// For questions 11 - 19: List which boolean value will be stored in each variable. (Remember: `==` does not check data type)

// 11.
var x = (false == 0);
// A. True


// 12.
var y = (false == "");
// A. True


// 13.
var z = (0 == "");
// A. True


// 14.
var a = (null == null);
// A. True


// 25.
var b = (undefined == undefined);
// A. True


// 16.
var c = (undefined == null);
// A.  True


// 17.
var d = (null == false);
// A.  False


// 18.
var e = (NaN == null);
// A.  False


// 19.
var f = (NaN == NaN);
// A.  False


// 20.
// Fix the `if...else` statement below by adding an `if` keyword and conditional expression.
// Use the variable `thirsty` as part of your conditional expression.
// A:
var thirsty = true;
if (thristy = true)
{
  console.log("I'm parched!");
} else {
  console.log("I've had enough to drink.");
}

// For questions 21 - 29 list which statement will be logged.

// 21.
var x;

if(x){
	console.log("True!");
} else {
	console.log("False!");
}
// A: True


// 22.
if(""){
	console.log("True!");
} else {
	console.log("False!");
}
// A: False baby!


// 23.
// this expression will set x to NaN
var x = 1 * undefined;

if(x){
	console.log("True!");
} else {
	console.log("False!");
}
// A:  False


// 24.
if(false){
	console.log("True!");
} else {
	console.log("False!");
}
// A:  False!


// 25.
if(-5 && 5){
	console.log("True!");
} else {
	console.log("False!");
}
// A: True!


// 26.
if("Hello World!"){
	console.log("True!");
} else {
	console.log("False!");
}
// A:  True


// 27.
if({}){
	console.log("True!");
} else {
	console.log("False!");
}
// A:  True


// 28.
if({name: "Yehuda Katz"}){
	console.log("True!");
} else {
	console.log("False!");
}
// A:  True


// 29.
if(new Date()){
	console.log("True!");
} else {
	console.log("False!");
}
// A:  True


// 30.
// Link this file to the sibling `index.html` document, open the file in your browser and request an instructor.
