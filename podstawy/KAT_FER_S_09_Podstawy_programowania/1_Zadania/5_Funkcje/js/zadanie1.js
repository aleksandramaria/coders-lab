// Napisz funkcję miksującą o nazwie miksowanie,
// która jako argument będzie przyjmowała napis.
// Zadaniem funkcji jest zwrócenie tego napisu, ale poprzedzonego
// słowem zmiksowana . Funkcja ma zwracać nowo powstały napis (poprzez return).
// Następnie wypisz w konsoli to, co zwróciła funkcja.
//
//     Przykład:
//
// input -> "marchewka"
// output -> "zmiksowana marchewka"


function miksowanie(str) {
    return "zmiksowana " + str;
}

console.log( miksowanie("bla bla bla"));