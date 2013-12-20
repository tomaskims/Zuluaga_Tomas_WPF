/**
 * Created by tomaszuluaga on 12/19/13.
 */
//

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









priceofTickets(prompt("Enter your age ") || (prompt("Your friends age ") && (prompt("Anyone else's age "))));

