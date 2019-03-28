// zadanie z wykladowca

// function distFromAvarage(arr) {
//     var sum = 0;
//     for(var i=0; i<arr.length; i++) {
//         sum += arr[i];
//     }

//     var av = sum / arr.length;

//     var res = [];
//     for(var j=0; j<arr.length; j++) {
//         var num = Math.abs( arr[j] - av );

//         res.push( num );
//     }

//     return res;
// }

// var result = distFromAvarage([1, 2, 3, 4, 5, 6, 7]);
// console.log(result, distFromAvarage([1,1,1,1]));

// zadanie 1
// Stwórz tablicę z listą swoich ulubionych owoców. Następnie:

// Wypisz pierwszy owoc w konsoli.
// Wypisz ostatni owoc w konsoli (skorzystaj z atrybutu length).
// W pętli wypisz wszystkie owoce (skorzystaj z atrybutu length).

// var arr = ["banana", "apple", "pomegranate"];

// 	console.log(arr[0]);

// 	console.log(arr[arr.length-1]);

// for(var i=0; i<arr.length; i++) {
// 	console.log(arr[i]);
// }

// zadanie 3

// function printTable(array) {
// 	for(var i=0; i<array.length; i++) {
// 		console.log(array[i]);
// 	}
// }

// printTable([1, 2, 3]);
// printTable([15, 2, "apple", 63]);

// // zadanie 4

// function multiply(array) {
// 	var res = 1;
// 	for(var i=0; i<array.length; i++) {
// 		res = res * array[i];
// 	} 
// 	return res;
// }

// var result = multiply([1,2,3,4,5,6,7]);
// console.log(result);

// console.log(multiply([1,1,1,1]));
// console.log(multiply([2,8,3,7]));

// // zadanie 5

// function getEvenAverage(arr) {
// 	var arrEven = [];
// 	for(var i=0; i<arr.length; i++) {
// 		if(arr[i] % 2 === 0) {
// 			arrEven.push(arr[i]);
// 		}
// 	}
	
// 	var sum = 0;
// 	for(var j=0; j<arrEven.length; j++) {
// 		sum = sum + arrEven[j];
// 	}
// 	if(sum !== 0) {
// 		return sum / arrEven.length;
// 	} else {
// 		return null;
// 	}
// }

// console.log(getEvenAverage([1,2,3,4,5,6,7]));
// console.log(getEvenAverage([1,1,1,1]));
// console.log(getEvenAverage([2,8,3,7,4])); 

// zadanie 6
//  function sortArray(array) {
//  	array.sort( function(a, b) {
//  		return a - b
//  	});
//  	return array;
//  }

// console.log(sortArray([145,11,3,64,4,6,10]));
// console.log(sortArray([1,11,77,6400,6,26,10]));



// zadanie 7
// function addArrays(arr1, arr2) {
// 	var newArr = [];
// 	for(var i=0; i<arr1.length; i++) {
// 		newArr[i] = arr1[i] + arr2[i];
// 		newArr.push(arr2[arr1.length]);
// 	}
// 	return newArr;
// }

// console.log(addArrays([4,0,1,3,4], [1,9,6,7,8,17,18])); //5,9,7,10,12,17]


function addArrays(arr1, arr2) {
    var small, big, arr = [];

    if(arr1.length > arr2.length) {
        small = arr2;
        big = arr1;
    } else {
        small = arr1;
        big = arr2;
    }

    for(var i=0; i<small.length; i++) {
        arr[i] = small[i] + big[i];
    }

    for(var j=small.length; j<big.length; j++) {
        arr[j] = big[j];
    }

    return arr;
}


console.log( addArrays([1, 2], [1, 2, 3, 4 ]) )
console.log( addArrays([1, 2, 3 ,4], [1, 2]) )



