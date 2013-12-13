/**
 * Created by tomaszuluaga on 12/12/13.
 */
//Conditionals Assignment

// To be hired as a full time employee at my company one of the requirements is to have 3 years of experience, but
// if you don't have that much experience, they will hire you as a part time for 6 months to train you.

var newEmployee = prompt("Please enter how many years of experience you have");
var fulltimeRequiremnt = 3;//years required
var parTimePlacement = 2;//part time qualification

if(newEmployee >= fulltimeRequiremnt){
    console.log("Congratulations, you are qualified to work at Naples floor coverings");// If meet requirements
}else if(newEmployee <= parTimePlacement){
    console.log("You qualify for part time employment and if hired you will be trained for 6 months");// If meet certain requirements
}else{
    console.log("Sorry you don't qualify for any type of employment ");// iF entered a different character
}