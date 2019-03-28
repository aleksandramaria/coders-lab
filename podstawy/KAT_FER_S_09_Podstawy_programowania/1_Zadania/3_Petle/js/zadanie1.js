// Napisz program, który na podstawie wartości zmiennej n
// wypisuje wszystkie liczby od zera do n. 
// Przy każdej liczbie program ma napisać,
// czy liczba jest parzysta czy nie. Np.:


var n = 25;
for(var i=0; i<=n; i++) {
	if(i % 2 == 0) {
		console.log(i + " - parzysta");
	} else {
		console.log(i + " - nieparzysta");
	}
}