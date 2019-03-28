//Wylosuj liczbę z zakresu 1 - 10 i zapisz do zmiennej.
//Za pomocą metody prompt() poproś użytkownika o wpisanie liczby od 1 do 10.
//Jeśli użytkownik wpisał liczbę taką samą, wylosował komputer - 
//wypisz w konsoli informacje "Brawo!", jeśli złą - "Spróbuj jeszcze raz!".


var random = (Math.random() * 9 + 1).toFixed(0);

var userChoice = Number( prompt('Podaj mi liczbę od 1-10!') );

console.log(random);

if(random === userChoice) {
	console.log("Brawo!"); 
} else {
	console.log("Spróbuj jeszcze raz!");
}

