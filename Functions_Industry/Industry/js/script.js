/**
 * Created by tomaszuluaga on 12/19/13.
 */
//

var priceOfticket = function(x, y, age){
    var x = 10
    var y = 20;
    var z = age;
    if(z < 18 || z <=18){
        console.log("you pay" + y + "for two tickets");


    }else if(z > 18){
        console.log("you pay" + x +  "regular price");

    }else{
        console.log("whatevee");
    }
}

priceOfticket(prompt("enter your age" ));

