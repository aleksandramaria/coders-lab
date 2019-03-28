// Napisz funkcję, która przyjmuje jako argument liczbę n
// i wyświetla n razy na stronie napis "Programowanie jest fajne!".
//


function showMessage(n) {
    while(n>0) {
        console.log("Programowanie jest fajne!");
        n--;
    }
}

showMessage(5);