/**
 * Created by tomaszuluaga on 12/12/13.
 */
//Conditionals Assignment

// To be hired as a full time employee at my company one of the requirements is to have 2 years of experience, but
// if you don't have that much experience, they will hire you as a part time for 6 months to train you.

var newEmployee = prompt("Please enter how many years of experience you have");
var fulltimeRequiremnt = 2;//years required
var parTimePlacement = 2 - 1;

if(newEmployee >= fulltimeRequiremnt){
    console.log("Congratulations, you are qualified to work at Naples floor coverings")
}else if(parTimePlacement > fulltimeRequiremnt){
    console.log("You qualify for part time employment and if hired you will be trained for 6 months")
}else{
    console.log("Sorry you don't qualify for any type of employment ")
}