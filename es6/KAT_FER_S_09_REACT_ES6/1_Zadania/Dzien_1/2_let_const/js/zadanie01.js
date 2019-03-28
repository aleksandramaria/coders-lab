//I. Sprawdź najpierw zasięg let
 {
     //A1 - wypisuję zmienną numbers przed deklaracją
     // Wynik w konsoli to TODO: blad
     // Dlaczego taki wynik? TODO: hoisting nie dziala na let
     // console.log(numbers);

     let numbers = [2,3, 4];
     //A2 - wypisuję zmienną numbers po deklaracji
     //Wynik w konsoli to TODO: konsola wyswietla tablice numerow
     //Dlaczego taki wynik? TODO: poniewaz najpierw deklaracja potem wywyolanie
     // console.log(numbers);
 }

 // A3 - wypisuję zmienną numbers za blokiem
 // Wynik w konsoli to TODO: blad numbers is not defined
 // Dlaczego taki wynik? TODO: let ma zasieg blokowy i nie mozemy jej wyswietlic poza blokiem
 // console.log(numbers);



//II. Sprawdź teraz  zasięg const
{
    //A1 - wypisuję zmienną PI przed deklaracją
    //Wynik w konsoli to TODO: PI is not defined - blad w konsoli
    //Dlaczego taki wynik? TODO: zasada hoistingu nie obowiazuje na const
    // console.log(PI);

    const PI = 3.14;
    //A2 - wypisuję zmienną PI po deklaracji
    //Wynik w konsoli to TODO: zmienna const wyswietla sie w konsoli
    //Dlaczego taki wynik? TODO: - deklaracja a potem wywolanie
    console.log(PI);
}

//A3 - wypisuję zmienną PI za blokiem
//Wynik w konsoli to TODO: po raz kolejny blad w konsoli
//Dlaczego taki wynik? TODO: const rowniez ma zakres blokowy
console.log(PI);
