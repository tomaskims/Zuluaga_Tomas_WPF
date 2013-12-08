/**
 * Created by tomaszuluaga on 12/7/13.
 */


//area of the triangle is half of the width times the height

var width = 4;
var height = 5;
var area = width * height/2;





console.log(area);


//Expressions - Modulo Operator

var remainder = 32 % 10;// % to get the remainder of the operations

console.log(remainder);


//Order of operations

var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 60;
var quiz4 = 80;


// the average is the sum of the items divided by the number of items

var average = (quiz1 + quiz2 + quiz3 + quiz4)/4;

console.log(average);

var length = 7;
var width1 = 6;
var perimeter = length * 2 + width1 * 2;
console.log(perimeter);

// Expressions - Expressions with Arrays

var orangeBins = [234, 567, 883];

var total = orangeBins[0] + orangeBins[1] + orangeBins[2];
console.log(total);


//casting

var stringvar = "6";
var result = 7 + Number(stringvar);// put Number in from to use it as a Number
console.log(result);

var areaCode = 239;
var firstPart = 961;
var secPart = 7152;

var phoneNum = "(" + String(areaCode) + ")" + "-" + String(firstPart) + "-" + String(secPart);
console.log(phoneNum);

 // Assignment Operators

var nuM =3;

nuM += 4;// The same as nuM = nuM + 4;

console.log(nuM);

