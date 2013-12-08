//Tomas Zuluaga
//Dic- 07 - 2013
//Assignment Expressions

// In this part I want to show the calculation of money spent on lunch yearly (x) y = total days worked a year
var dailyLunch = 10;
var workDaysyear = 245;

var moneySpent = (dailyLunch) * (workDaysyear);
console.log("This is the total spent a year on lunch " + "= " + moneySpent);

//In this part I want to show what would be my remaining balance per year after subtracting the money spent on lunch
var yearSal = 12000;
var remBal = (yearSal) - (moneySpent);

console.log( "This is the remaining balance " + "= " + remBal);

// If I wanted to save money and found a cheaper lunch special

var chepLunch = workDaysyear * (dailyLunch - 5);
console.log( "cheaper lunch " + "= " + chepLunch);




