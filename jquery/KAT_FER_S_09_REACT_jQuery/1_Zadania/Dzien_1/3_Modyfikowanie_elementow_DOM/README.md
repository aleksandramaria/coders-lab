<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Modyfikowanie elementów

> Odpowiedzi wpisz w odpowiednich plikach, chyba że treść polecenia wskazuje inaczej.
Pamiętaj, żeby oddzielać ćwiczenia komentarzami i pisać czytelny, dobrze sformatowany kod.
Jeśli  polecenie w zadaniach brzmi: "Stwórz nową funkcję, w której wykonasz te czynności" to znaczy, że należy stworzyć funkcję. Nawet jeśli treści zadań są mało skomplikowane
ucz się używać funkcji.

## Zadanie rozwiązywane z wykładowcą

### Dodawanie (~ 5min - 7min)

Stwórz element ```div``` o **klasie** ```info``` i wstaw go przed sekcją ```section-users```. Dodaj mu za pomocą jQuery dowolny tekst - np. "Zaczynamy kolejne zadania".

-----------------------------------------------------------------------------------------------------

## Zadania do samodzielnego wykonania


### Zadanie 1 (~ 15min - 20min)

Znajdź w pliku **index.html** element o **klasie** ```section-users```. Pobierz w niej wszystkie elementy, na których będziesz działać:
- formularz
- inputy
- listę użytkowników

Dla formularza ustaw event ```submit``` na formularzu. W evencie tym wykonaj następujące czynności:

1. Zablokuj domyślną akcję formularza
2. Pobierz pod zmienne wartości z inputów
4. Wstaw nowy element na koniec listy, ustaw jej wiek jako atrybut ```data-age```.
5. Wyczyść inputy poprzez ustawienie ich wartości value na pusty ciąg znaków
6. Dodaj warunek, który zapobiegnie dodawaniu nowych użytkowników jeżeli pola nie są wypełnione

Napisz funkcję (ale nie wewnątrz eventu submit), która niech pobierze elementy LI z listy użytkowników, a następnie robiąc po nich pętlę **each** dla każdego LI ustawi klasę ```color-white``` oraz dany kolor dla wszystkich **li** w następujący sposób:
  * dla osób w wieku do 15 lat - **#75D701**,
  * dla osób mających od 16 do 40 lat - **#f9c00c**,
  * dla osób mających 41 lat i więcej - **#c03546**.
Odpal tą funkcję po dodaniu nowego LI do listy.

### Zadanie 2 (~ 7min - 10min)

Zapoznaj się z plikiem **index.html**. Znajdź w nim elementy o klasach ```panel-left``` i ```panel-right```. Znajdź w nich elementy li o klasach ```list-element```.

Napisz funkcję, która po kliknięciu w element o **klasie** ```list-element```, przeniesie go do kolumny o **klasie** ```panel-right```.
Spróbuj dodać funkcjonalność, która będzie przenosiła taki element z lewa na prawo, i z prawa na lewo (podpowiedź - możesz sprawdzić w jakim rodzicu znajduje się ten element w chwili kliknięcia)
