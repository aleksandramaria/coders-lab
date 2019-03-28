
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//deklaracja funkcji
function sortArray() {
    
        //deklaracja/init lokalnej zmiennej typu tablica
        var points = [41, 3, 6, 1, 114, 54, 64];
    
        //wewnetrzna funkcja sortujaca tablice
        points.sort(function(a, b){
            //porownanie elementow z tablicy 
            //metoda babelkowa
            //od najnizszej do najwyzszej
            return a-b;
        });
    
        //zwrocenie tablicy posortowanej
        return points;
    }
    
    //wywolanie funkcji - czyli organizacja tablicy
    console.log(sortArray());
    