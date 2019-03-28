// Napisz funkcję, która przyjmuje jako argumenty
// trzy liczby i zwraca największą z nich (zwraca,
// a nie wypisuje na ekranie).
// Wypisać możesz dopiero jak zwrócisz wynik z funkcji.

function theHighestNumber(a, b, c) {
    if((a > b) && (a > c)) {
        return a;
    } else if(b > c){
        return b;
    }
    return c;
}

console.log( theHighestNumber(10, 60, 90));