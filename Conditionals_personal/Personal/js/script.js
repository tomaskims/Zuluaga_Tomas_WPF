/**
 * Created by tomaszuluaga on 12/12/13.
 */

//If I want to make it into the Varsity soccer team I have to run 2 miles in 13 min but if I don't make it within that time then
    //I will be sent to the junior varsity team.

var howFastYourun = prompt("Please enter your average speed in mpg");//user enters sped
var varsityTeam = 13;//time required for 2 miles in order to make the varsity team
var juniorVar = 13;//if more than 13 min then you will be sent to JV
if(((2 * 60) / howFastYourun) < varsityTeam){

    console.log("Yes you will make the Varsity team")

}else if(howFastYourun < juniorVar){

    console.log("No you will make Junior Varsity")
}


