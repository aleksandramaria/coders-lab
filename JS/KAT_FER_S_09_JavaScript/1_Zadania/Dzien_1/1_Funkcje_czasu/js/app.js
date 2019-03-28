// Napisz funkcję countHello(), która jako
// parametr przyjmie liczbę całkowitą od 1-10. 
// W funkcji uruchom funkcję setInterval. 
// Niech jego zadaniem będzie wypisywanie na konsoli 
// tekstu "Hello" oraz licznika, zliczającego, 
// który raz już został uruchomiony setInterval. 
// Jeśli licznik osiągnie wartość podaną do funkcji jako parametr, 
// powinien zostać usunięty setInterval.

// function countHello(num) {
// 	var counter = 0;
//
// 	var interval = setInterval( function() {
// 		counter++;
// 		console.log("Hello", counter);
//
// 		if(counter === num) {
// 		  clearInterval(interval);
// 		}
// 	}, 1000);
// }
//
// countHello(15);



function countHello(num) {
	var counter = 0;

	var id = setInterval(function () {
		counter += 1;
		alert('hello ' + counter);

		if(counter === num) {
			clearInterval(id);
		}
	}, 1000);
}

countHello(5);






function countBye(x) {
	var counter = 0;

	var id = setInterval(function () {
		counter++;
		console.log('byebye ' + counter);

		if(counter === x) {
			clearInterval(id);
		}
	}, 2000);
}

countBye(5);