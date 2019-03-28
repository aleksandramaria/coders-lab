//Zadanie
var rainyDay = true;
var sunnyDay = false; 

console.log(rainyDay == sunnyDay);
//wynik false

//Zadanie 2
var number1 = 22;
var number2 = 7;
var resultModulo = 0;
resultModulo = number1 % number2;
console.log(resultModulo); //1

//Zadanie 3
var string1 = "ala ma kota";
var string2 = "Hodor Hodor";
var joinedStrings = '';
joinedStrings = string1 + string2;
console.log(joinedStrings); //ala ma kotaHodor Hodor

//Zadanie 4
var myNumber = 4;
var myString = "4";

console.log(myNumber == myString); //true - równe sobie 
//(ta sama wartosc, i moga miec rozne typy)

console.log(myNumber === myString); //false - rowne sobie 
//ale nie bedace tego samegp typu

//Zadanie 5
var counter = 145;
counter = counter + 1;
console.log(counter); //146

counter = counter - 1;
console.log(counter); //145

//Zadanie 6
var num1 = 100;
var num2 = 99;
var result = null;
result = num1 > num2;
console.log(result); //true