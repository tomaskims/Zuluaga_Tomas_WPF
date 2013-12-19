/**
 * Created by tomaszuluaga on 12/19/13.
 */
//assignment functions

//If you burn 600 calories in a 90 minute soccer game

//calories per game = 600
//games per month = user prompt

var gamesLocalLeague = prompt("Please enter how many games you play in your local league ");
var durationOfGame = prompt("Please enter how long the soccer games are ");
function amountCalBurnt(gamesll){
    var calories = 600;
    var calPerMonth = gamesll * calories



    return calPerMonth;



}

amountCalBurnt();


console.log("you burn " + amountCalBurnt(gamesLocalLeague)+ ' calories per month if you play all of the games');
console.log("and you burn calories " + amountCalBurnt(gamesLocalLeague)/ durationOfGame + " per minute a month");
