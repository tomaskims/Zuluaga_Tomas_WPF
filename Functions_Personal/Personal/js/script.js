/**
 * Created by tomaszuluaga on 12/19/13.
 */


//If you burn 600 calories in a 90 minute soccer game

//calories per game = 600
//games per month = user prompt

var gamesLocalLeague = prompt("Please enter how many games you play in your local league ");

function amountCalBurnt(gamesll, minutes){
    var calPerMonth = gamesll * 600;
    var calPerMinute = calPerMonth / minutes;
    return calPerMonth;
    return calPerMinute;

}

amountCalBurnt(gamesLocalLeague);

console.log("you burn " + amountCalBurnt(gamesLocalLeague)+ ' calories per month if you play all of the games');
console.log("and you burn calories " + amountCalBurnt(gamesLocalLeague)/ 90 + " per minute a month");
