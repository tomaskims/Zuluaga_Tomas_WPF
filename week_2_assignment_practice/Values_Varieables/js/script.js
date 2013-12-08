var age = "how old is tomas";
alert(age);
age = 24
alert("tomas is???")
alert(age);

//assigning variables the value of other variables

var string1 = "hello";
var string2 = "goodbye";

alert(string1);
alert(string2);

string2 = string1;

alert(string1);
alert(string2);

string1 = "now for something different";

alert(string1);
alert(string2);

console.log("assigning variables the variables with the same value of other variables");




var isStudent = false; //boolean variable

var phrase = 'I don\'t know you\'all';

console.log("I hope I get a good grade in this class");

console.log("I got it apparently");

var muppets = ["kermit","yo mama","paco"]; //array values in this order kermit=0, yo mama=1, and paco = 3

console.log(muppets[2]);// gave the variable muppets a value of 0 = which is kermit in the array value before,
                        //showing console.log kermit insteat of muppets

// Using data calculations and basic string manipulation

var firstNumber = 15;

var secondNumber= 10;


var answer
answer = 15 / 10;
alert(answer);

alert(15 / 10);

answer = firstNumber / secondNumber;

alert(answer);

//increment and decrement operators

    //Fahrenheit to Centigrade conversion and the equation is C = 5/9 ( F - 32 )

var degFahren = prompt("Enter the degrees in Fahrenheit",50);
var degCent;

degCent = 5/9 * (degFahren - 32);

alert(degCent);

//concatenating strings

var greetingString = "hello";
var myName = prompt ("Please enter your name", "")
var concatString;

document.write(greetingString + " " + myName + "<br>");

concatString = greetingString + " " + myName;

document.write(concatString);

//making temperature converter user-friendly

var degFahrenh = prompt("Enter the degrees in fahrenheit", 50);
var degcentig;

degcentig = 5/9 * (degfahrenh - 32);

alert(degFahrenh + "\xB0 Fahrenheit is " + degcentig + "\xB0 centigrade" );



