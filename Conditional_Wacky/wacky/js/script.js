/**
 * Created by tomaszuluaga on 12/12/13.
 */
// Conditional assignment

//You want to go to the shooting range with your friend but it costs you 10 just to get in.
    //will you have enough money to go ? if not what will happen ?

var moneyAvailable = prompt("Please enter the amount of money you have");
var byYourself = 10;


if(moneyAvailable >= byYourself){
    console.log("You can only go by yourself");


}else{
    console.log("We'll only let you shoot one round you and your friend")

}