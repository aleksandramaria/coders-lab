// Na podstawie dwóch tablic, wypisz w konsoli elementy, 
// które się powtarzają w obu tablicach. 
// Załóż, że porównywane tablice są równe. Przykład:
// Wynik w consoli: 4,22;
//
var arr1 = [4, 55, 17, 22, 1];
var  arr2 = [4, 53, 11, 22, 20];

var res = [];
// for(var i=0; i<arr1.length; i++) {
// 	for(var j=0; j<arr2.length; j++) {
// 		if(arr1[i] === arr2[j]) {
// 			console.log(arr1[i]);
// 		}
// 	}
// }

for(var i=0; i<arr1.length; i++) {
	// if(arr1[i] === arr2[i]) {
	// 	res.push(arr1[i]);
// }

		var num = arr1[i];
		if(arr2.indexOf(num) >= 0) {
			res.push(num);
		}
}

console.log(res);