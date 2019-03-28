// Napisz funkcję rentCost(days), która będzie pobierać liczbę
// dni jako argument, a następnie wyliczać koszt wynajmu pokoju według podanego wzoru:
//
//     wynajem trwa jeden dzień, koszt pokoju 200 zł/dzień,
//     wynajem trwa od dwóch do trzech dni, koszt pokoju 180 zł/dzień,
//     wynajem trwa od czterech do siedmiu dni, koszt pokoju 160 zł/dzień,
//     wynajem trwa osiem lub więcej dni, koszt pokoju 150 zł/dzień.
//     Dodatkowo za każdy pełny tydzień przysługuje 50 zł zniżki. Do wyliczenia pełnych tygodni użyj poniższego kodu:
//
//     var numbersOfWeeks = Math.floor(days / 7); //Math.floor jest metodą, która zaokrągla liczbę w dół.
// Przykład:
//
//     input -> 8
// output -> 1150


function rentCost(days) {
    var price = 0;
    var numberOfWeeks = Math.floor(days / 7);

    if(days == 1) {
        price = 200;
        return price;
    } else if (days < 4) {
        price = 180;
        return price * days;
    } else if (days < 8) {
        price = 160;
        return ((price * days) - (numberOfWeeks * 50));
    } else if (days >= 8) {
        price = 150;
        return ((price * days) - (numberOfWeeks * 50));
    }
}

console.log( rentCost(19));
console.log( rentCost(8));
console.log( rentCost(3));
console.log( rentCost(1));
console.log( rentCost(7));