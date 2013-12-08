/**
 * Created by tomaszuluaga on 12/7/13.
 */
//Student number 0003286681
//Expressions Assignment

    //In  this part of the assignment I wanted to show how many hours I spend working out a week
var exHours = 4;//x
var dayWeek = 7;//y
var hourWord;//z
//x * y = z

hourWord = (exHours) * (dayWeek);
console.log("This is the amount of hours I work out a week " + "= " + hourWord);

//Here I wanted to add the amount of hours I would have left a week after working out every day for 4 hours
var totalWhours = (dayWeek) * 24;
console.log("This is the amount of hours there are in a week " + "= " +totalWhours);

var hoursLeft;

hoursLeft = (totalWhours) - (hourWord);
console.log("This is the amount of hours I would have left a week" + "= " +hoursLeft);

