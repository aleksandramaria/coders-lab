// Stwórz w pliku app.js pętlę for, która wypisze 10 razy zmienną i.
// Zainicjalizuj zmienną i jako var od 0 - 10. Spróbuj wypisać poza pętlą zmienną i. Co zostanie wypisane?
//
//     Następnie stwórz drugą taką samą pętlę niżej, ale zmienną wewnątrz pętli nazwij inaczej
//     np. j i zainicjalizuj ją jako let. Spróbuj wypisać poza pętlą zmienną j. Co zostanie wypisane?


for(var i=0; i<10; i++) {
    console.log(i);
    //konsola wypisze liczby od 0-9
}

console.log(i);
// konsola wyswietla 10 jest to ostatnia wartosc i po opuszczeniu petli (pomimo iz warunek jest niespelniony i sie nie wykona)


for(let j=0; j<10; j++) {
    console.log(j);
    //konsola wypisze liczby od 0-9
}

console.log(j);
//Uncaught ReferenceError: j is not defined
//nie mozemy wywolac zmiennej let poza cialem bloku