
/**
 * Created by tomaszuluaga on 12/12/13.
 */
//Conditionals Worksheet

// Group one



//Givens

var nextGast = 200;//miles
var gasCap = 20;//gallons
var gasEff = 34;// miles per gallon
var gasTank = 10;//percent
//if the current gas in the tank is not at the full capacity or the gas in the tank is not enough or equal to make it to
//next gas station based on gas efficiency and the amount of gas you have right now is not enough to make it to the gas station
if(gasTank == gasCap || gasTank >= gasEff && nextGast == gasTank){
    console.log("Yes, you can make it without stopping for gas!")
}else{
    console.log("You only have 2 gallons of gas in your tank, better get gas now while you can!")
}

//





//Group Two


//Make sure the user has the correct username and password.
// If the username doesn’t match then a specific message for that should be printed to the console.
// If the password doesn’t match a message should appear for that, etc. Only one error message should appear.
//Given:
    //Username entered by user
//Password entered by user
//Correct username
//Correct password

    var userName = "12345";
var passWord = "54321";
var userNamein = "12345";
var passWordin = "54321";

if(userNamein === userName && passWordin === passWord){
    console.log("Welcome back 12345")
}else{
    console.log("The user name you entered does not match our records")

}










//Group three
//The local movie theater in town has a ticket price of $12.00 but if you are a senior (55 and older), under 10 you get the discounted price of $7.00. In addition, if a customer is seeing a movie between 3pm and 5pm they can also get the discounted price.
//Determine which of the two prices the customer is eligible for.
//Given:
    //Time of Movie (Assume whole numbers here)
//Age of the customer
//Result To Print Out:
    //“The ticket price is X”



var age = 55;
var movTime = 10;

//If you are 55 years old or older or if you are 10 years old or younger and if you go to the movies at 3 and no later than 5
//You will get the $7.00 ticket

if(age <= 55 || age >= 10 && movTime <= 3 && movTime <= 5)//in this case you will get the $7 ticket
{
    console.log("the ticket price is $7")
}else{
//otherwise you will have to pay $12 for your ticket
    console.log("the ticket price is $12");
}