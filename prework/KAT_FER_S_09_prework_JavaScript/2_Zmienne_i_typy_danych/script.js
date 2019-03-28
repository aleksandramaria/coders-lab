//Zadanie 1
var num = 2; 
console.log(num);
console.log(typeof num); //Ta zmienna jest typu number i przechowuje wartość 2

var word = 'kot';
console.log(word);
console.log(typeof word); //Ta zmienna jest typu string i przechowuje wartość kot

var something = 2 + "dwa";
console.log(something);
console.log(typeof something); //Ta zmienna jest typu string i przechowuje wartość 2dwa

var isSunny = false;
console.log(isSunny);
console.log(typeof isSunny); //Ta zmienna jest typu boolean i przechowuje wartość false

var specialVal = '_';
console.log(specialVal);
console.log(typeof specialVal); //Ta zmienna jest typu Uncaught ReferenceError: _ is not defined
//lub typu string jezeli pomiedzy ''


//Zadanie 2
var number1 = 12;
var number2 = 158;
var result = 0;

result = number1 + number2;
console.log(result); //suma dwoch liczb - 170

//Zadanie 3
var randomNumber;
console.log(randomNumber); //konsola wyswietla wynik undefined