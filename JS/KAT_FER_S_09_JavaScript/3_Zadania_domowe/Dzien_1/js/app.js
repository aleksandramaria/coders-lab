//zadanie 1

//option 1
function getNumber(num, arr) {
	for(var i=0; i<arr.length; i++) {
		if(num === arr[i]) {
			return true;
		} 
	} 
	return false;
} 

//option 2
function getNumber(num, arr) {
	return arr.indexOf(num) >= 0
}

getNumber(2, [33, 54, 2, 1, 4, 100]); // true
console.log(getNumber(5, [33, 54, 2, 1, 4, 100])); // false

//zadanie 2
// Napisz funkcję addTheSameNumbers, która ma przyjmować dwa 
// argumenty – liczbę i tablicę. Funkcja ta ma zwracać sumę 
// wszystkich elementów tablicy, które są równe liczbie podanej jako 
// pierwszy argument funkcji. Jeżeli liczby, podanej jako pierwszy 
// argument funkcji nie ma w tablicy, zwróć null.

// function addTheSameNumbers(num, arr) {
// 	var newArr = [];
// 	for(var i=0; i<arr.length; i++) {
// 		if(num === arr[i]) {
// 			newArr.push(arr[i]);
// 		}
// 		var sum = 0;
// 		for (var j=0; j<newArr.length; j++) {
// 			sum = sum + newArr[j];
// 		}
// 	}
// 	return sum;
// }

function addTheSameNumbers(num, arr) {
	var newArr = [];
	
	for(var i=0; i<arr.length; i++) {
		if(num === arr[i]) {
			newArr.push(arr[i]); 
		} 
	}

	if(newArr.length === 0) {
		return null;
	}
		var sum = 0;
		for (var j=0; j<newArr.length; j++) {
			sum = sum + newArr[j];
		}
	
	return sum;
}

// function addTheSameNumbers(num, arr) {
// 	var newArr = [];
// 	for(var i=0; i<arr.length; i++) {
// 		if(arr.indexOf(num) >= 0) {
// 			return null;
// 		} else if (num === arr[i]) {
// 			newArr.push(arr[i]);
// 		}
// 		var sum = 0;
// 		for(var j=0; j<newArr.length; j++) {
// 			sum += newArr[j];
// 		}
// 	}
// 	return sum;
// }

// function addTheSameNumbers(num, array){

//    var counter = 0;
//    for(var i=0; i<array.length; i++) {
//        if(array[i] === num) {
//            counter++;
//        }
//    } if(counter === 0) {
//        return null;
//    }
//    return counter * num;
// }

console.log(addTheSameNumbers(7, [4, 7, 24, 7, 0, 10])); // 14
console.log(addTheSameNumbers(9, [33, 54, 2, 1, 9, 100])); // 9
console.log(addTheSameNumbers(0, [33, 0, 2, 0, 9, 0])); // 0
console.log(addTheSameNumbers(43, [6, 0, 2, 2, 3, 46])); // null


//zadanie 3

// function sortPlanet(planets) {

//     planets.sort( function(a, b) {
//         return b.numberOfMoons - a.numberOfMoons
//     });
//     return planets;
// }

// console.log(sortPlanet(planets));


// zadanie 1 - dodatkowe
function factors(num) {
    var arr = [];
    for (var i = num; i >= 1; i--) {
        if (num % i === 0) {
            arr.push(num);
        }
    }
    return arr;
}

console.log(factors(2)); // [2, 1]
console.log(factors(54)); // [54, 27, 18, 9, 6, 3, 2, 1]
console.log(factors(-4)); // []


