// Zadanie 8 (~ 15min - 20min)
// Napisz funkcję calculateTip(amount, raiting), która będzie przyjmować dwa argumenty:
//
//     kwotę do zapłaty,
//     opis słowny obsługi. Jeśli opis jest taki jak zdefiniowano poniżej,
//     funkcja ma zwracać kwotę napiwku, jeśli opis jest nieznany –
//     funkcja powinna zwracać napis "Opis nieczytelny".
//     Opis może przyjmować następujące wartości:
//     "Bardzo dobra obsluga" => 25% napiwku, "Dobra obsluga" => 20% napiwku,
//     "Srednia obsluga" =>15% napiwku, "Zla obsluga" => 0% napiwku.
//
//     Przykład:
//
// input -> 100, "Bardzo dobra obsluga"
// output -> 25


function calculateTip(amount, rating) {
    if(rating == "Bardzo dobra obsluga") {
        tip = amount * 0.25;
    } else if(rating == "Dobra obsluga") {
        tip = amount * 0.2;
    } else if(rating == "Srednia obsluga") {
        tip = amount * 0.15;
    } else if(rating == "Zla obsluga") {
        tip = 0;
    } else {
        return "Opis nieczytelny";
    }
    return tip;
}

console.log(calculateTip(100, "Bardzo dobra obsluga"));
console.log(calculateTip(100, "Zla obsluga"));
console.log(calculateTip(100, "Srednia obsluga"));
console.log(calculateTip(1000, "Dobra obsluga"));
console.log(calculateTip(1000, "Blaa"));