// Stwórz tablicę z losowymi liczbami (10 liczb) z 
// przedziału 1-60. Wylosuj liczby za pomocą Math.random(). 
// Następnie sprawdź każdą liczbę w tablicy 
// i zmodyfikuj tak, aby była parzysta. Przykład:

// Przykładowa tablica:  [4, 55, 17, 22, 1, 43, 53, 11, 9, 20];
// Zmodyfikowana tablica: [4, 56, 18, 22, 2, 44, 54, 12, 10, 20];

var arr = [];

for(var i=0; i<10; i++) {
	arr.push(Math.round(Math.random() * 60));
}

console.log(arr);

for(var j=0; j<arr.length; j++) {
	if(arr[j] % 2 === 1) {
		arr[j] = arr[j] + 1;
	}
}

console.log(arr);