/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//deklaracja funkcji
function jeden() {
    
        //deklaracja zmiennej lokalnej
        var zmienna1 = 1;
    
        //nast funkcja (w funkcji)
        function dwa() {
    
            //wyswietlenie zmiennej = 1
            console.log(zmienna1);
    
            //deklaracja - bardzo lokalna zmienna = 3
            //dostepna tylko w funkcji 2
            var zmienna2 = 3;
        }
    
        //wywolanie drugiej funkcji czyli = wyswietli 1 ale nie 3 (bo tylko deklaracja)
        dwa();
    
        //proba wyswietlenia zmiennej 2 = ktora wyswietli blad
        //poniewaz jest dostepna tylko wewnatrz funkcji 2
        console.log(zmienna2);
    }
    
    //wywolanie glownej funkcji 
    jeden();