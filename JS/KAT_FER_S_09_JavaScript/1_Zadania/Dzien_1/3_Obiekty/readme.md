 <img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">
 
 # Obiekty &ndash; zadania

> Odpowiedzi wpisz w pliku **main.js**, chyba że treść polecenia wskazuje inaczej.
Pamiętaj, żeby oddzielać ćwiczenia komentarzami i pisać czytelny, dobrze sformatowany kod.

## Zadanie rozwiązywane z wykładowcą

### Obiekt Country (~ 5min - 7min)

Stwórz obiekt country. Dopisz do niego następujące właściwości:

* capital - string, 
* population - number,
* president - string,
* primeMinisters - tablica stringów

Wypisz w konsoli wszystkie właściwości.

### Obiekt timeMachine (~ 5min - 7min)

Stwórz obiekt timeMachine. Dopisz do niego następujące właściwości:

* shape - string, 
* model - string,
* run(date, place) - metoda, dzięki której można się przenieść w czasie. Argument ```date``` to data, do jakiej chcemy się przenieść, a ```place``` to miejsce, do którego chcemy się przenieść. Oba argumenty to stringi. 

Wypisz w konsoli wszystkie właściwości i uruchom metodę run.

-------------------------------------------------------------------------------

## Zadania do samodzielnego wykonania

### Zadanie 1 (~ 5min - 7min)

Stwórz obiekt book. Dopisz do niego następujące właściwości:

1. title,
2. author,
3. numberOfPages

Wypisz te właściwości w konsoli.


### Zadanie 2 (~ 5min - 7min)

Stwórz obiekt person. Dopisz do niego następujące właściwości i metodę:

1. name,
2. age,
3. sayHello() - wypisującą string "hello"

Wypisz właściwości w konsoli, wywołaj metodę.


### Zadanie 3 (~ 5min - 7min)

Stwórz obiekt, który będzie przetrzymywał Twój ulubiony przepis. Obiekt powinien mieć własność ```title``` (string), ```servings``` (number) oraz ```ingredients``` (tablica stringów). Dodaj pole ```ingredients``` poza ciałem obiektu. Wypisz w konsoli te wszystkie informacje.


### Zadanie 4 (~ 5min - 10min)

Do pliku ```main.js``` przekopiuj poniższy kod:

```JavaScript
var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

```
Następnie sprawdź czy łyżka istnieje. 
