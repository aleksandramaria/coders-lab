//Zadanie 1
var num1 = 10;
var num2 = 5;

if(num1 > num2) {
    console.log(num1);
} else {
    console.log(num2);
}

//Zadanie 2
var number1 = 12;
var number2 = 25;
var number3 = 99;

if(number1 > number2 && number1 > number3) {
    console.log(number1);
} else if(number2 > number1 && number2 > number3) {
    console.log(number2);
} else {
    console.log(number3);
}

//Zadanie 3
for(var i=0; i<10; i++) {
    console.log('Lubie JavaScript');
}

//Zadanie 4
var result = 0;
for(var i=1; i<=10; i++) {
    result = result + i;
}

console.log(result);

//Zadanie 5
var n=5;
for(var i=0; i<=n; i++) {
    if(i%2 == 0) {
        console.log(i + ' - parzysta');
    } else {
        console.log(i + ' - nieparzysta')
    }
}

//Zadanie 6
for(var i=0; i<10; i++){
    for(var j=0; j<5; j++){
        console.log("i= " + i + ", j= " + j);
    }
}

//Zadanie 7

/*
 Pętla zewnętrzna z licznikiem o zmiennej ```i``` zajmuje się
wierszami, a pętla wewnętrzna z licznikiem o zmiennej ```j``` zajmuje się kolumnami.
Zaczynamy od lewej górnej gwiazdki i przemieszczamy się w prawo będąc w pierwszym wierszu.
Kiedy pętla wewnętrzna dojdzie do ostatniej kolumny, kończy działanie. Wtedy pętla zewnętrzna
zwiększa licznik o 1 (przechodzi do kolejnego wiersza) i tak dalej.
*/

//Zmienna, przechowująca wielkość naszego kwadratu
var size = 5;

//Zmienna przechowująca jedną linię gwiazdek
var lineOfStars = "";

for(var i = 0; i < size; i++) {
    // W każdym kroku muszę zresetować zmienną, ponieważ zaczynam tworzenie nowej linii
    lineOfStars = "";
    for(var j = 0; j < size; j++) {
        //Do zmiennej lineOfStars dodaje gwiazdkę
        lineOfStars = lineOfStars + "*";
    }
    // Oddzielam kazdą linię, pustym wierszem, ponieważ przeglądarka widząc 5 takich samych
    //wyników zwinie nasz kwadrat z gwiazdek do jednej linijki
    console.log(" ");

    //Wypisuje w konsoli zmienną lineOfStars (jej zawartość - dlatego jest bez cudzysłosów)
    console.log(lineOfStars);
}

var size = 5;
var lineOfStars = "";

for(var i = 0; i < size; i++) {
    lineOfStars = "";
    for(var j = 0; j < size; j++) {
        lineOfStars = lineOfStars + "*";
    }
    console.log(" ");
    console.log(lineOfStars);
} //the same code no comments

//Zadanie 8
var size1 = 5;
var lineOfStars1 = "";

for(var i = 1; i < size1; i++) {
    for(var j = 0; j < i; j++) {
        lineOfStars1 = lineOfStars1 + "*";
    }
    console.log(lineOfStars1);
    lineOfStars1 = "";
}

















