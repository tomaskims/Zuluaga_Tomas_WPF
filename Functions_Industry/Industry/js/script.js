/**
 * Created by tomaszuluaga on 12/19/13.
 */
//functions Industry
    //To get tickets for an MLS soccer game you will have to pay $10 per ticket unless any of the people that are going
    //with you are 18 years old or younger then you will get a reduced price 

var priceofTickets = function(a, b, c){
    var regularPrice = 10;
    var priceTwoppl = 20;
    var discountPrice = 16;
    var lowPriceAge = 18;

if(a <= lowPriceAge && a <= lowPriceAge){
    console.log(" you will pay " + discountPrice + " for two people");

}else if(a <= lowPriceAge || b <= lowPriceAge){
    console.log(" You will pay " + lowPriceAge + "for two people");

}else{
    (a > lowPriceAge || b > lowPriceAge || c > lowPriceAge);
    console.log("you will pay " + regularPrice + " for one person " + "and " + priceTwoppl + " if is two people and $10 for any additional person");
 }



}









if(priceofTickets(prompt("Enter your age "))){



}else if(priceofTickets(prompt("Enter your partner's age to see if you quialify for a reduced price "))){

}else{
    priceofTickets(prompt("Enter another person's age to see if you qualify for a reduced price "))
}



// (prompt("Enter your age ") || (prompt("Your friends age ") && (prompt("Anyone else's age "))));

