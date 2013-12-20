/**
 * Created by tomaszuluaga on 12/19/13.
 */
//

var priceOfticket = function(x, y, age){
    var onePerson = 19;
    var twoPeople = 19;
    var price = (10, 20, 16);
    var discount = (onePerson && twoPeople );
    if(onePerson< 18 || twoPeople <=18){
        console.log("you pay" + price[0] + "for two tickets");


    }else if(twoPeople > 18){
        console.log("you pay " + price[1] +  " regular price");

    }else{
        console.log("whatevee"+ price[2]);
    }
}

priceOfticket(prompt("enter your age" ));

