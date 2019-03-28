//String + number
var text = "Ala ma kota";
var number = 87;

var resultAddTextToNumber = text + number;
console.log(typeof resultAddTextToNumber);
// Wynik: Ala ma kota87 -> String


var boolean = true;
var string = "white cat";

var resultBooleanAndString = boolean + string;
console.log(resultBooleanAndString, typeof(resultBooleanAndString));
//wynik: truewhite cat -> String

var age = 30;
var height = 160;

var resultAgeAndHeight = age + height;
console.log(resultAgeAndHeight, typeof(resultAgeAndHeight));
//wynik: 190 -> "number"

var special = null;
var num1 = 12;

var resultNullAndNumber = special + num1;
console.log(resultNullAndNumber, typeof(resultNullAndNumber));
//wynik: 12 "number"

var num2 = 13;
var truthSpoken = false;

var resultNumberAndBoolean = num2 + truthSpoken;
console.log(resultNumberAndBoolean, typeof(resultNumberAndBoolean));
//wynik: 13 "number"