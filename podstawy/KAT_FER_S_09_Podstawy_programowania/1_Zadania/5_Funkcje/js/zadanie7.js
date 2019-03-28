// Napisz funkcję rockPaperScissors(player1, player2),
//     która będzie pobierać dwa napisy i na ich podstawie zwracać informacje,
//     kto wygrał. Poprawne napisy przyjmowane przez funkcję to: papier, nozyce, kamien.
//
//     Funkcja ma zwracać jeden z czterech napisów:
//
//     "Gracz 1 wygrał",
//         "Gracz 2 wygrał",
//         "Remis",
//         "Błędne informacje".
//             Przykład:
//
// input -> "papier", "nozyce"
// output -> "Gracz 2 wygrał"


function rockPaperScissors(player1, player2) {
    if(player1 == player1) {
        return "Remis";
    } else if((player1 == "papier" && player2 == "kamien")  (player1 == "kamien" && player2 == "nozyce") || (player1 == "nozyce" && player2 == "papier")) {
        return "Gracz 1 wygral";
    } else {
        return "Bledne informacje";
    }
    return "Gracz 2 wygral";

}

console.log( rockPaperScissors("nozyce", "kamien"));