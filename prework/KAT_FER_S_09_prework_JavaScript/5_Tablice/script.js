//Zadanie 1
var numbers=[1, 2, 3];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

//Zadanie 2
var faveFruits = ["orange", "kiwi", "apple"];
console.log(faveFruits[0]);
console.log(faveFruits[faveFruits.length-1]);
for(var i=0; i<faveFruits.length; i++) {
	console.log(faveFruits[i]);
}

//Zadanie 3
var arr = [2, 3, 5, 5, 4, 1, 7, 3, 8, 2];
var sum = 0;

for(var i=0; i<arr.length; i++) {
	sum = sum + arr[i];
}
console.log(sum);

//Zadanie 4
var arr1 = [2, 3, 5, 5, 4, 1, 7, 3, 8, 2];
var sumEven = 0;
for(var i=0; i<arr1.length; i++) {
	if(arr1[i] % 2 == 0) {
		sumEven = sumEven + arr1[i];
	}
}
console.log(sumEven);

//Zadanie 5
var arr3 = [2, 3, 5, 5, 4, 1, 7, 3, 8, 2];
var max = 0;
for(var i=0; i<arr3.length; i++) {
	if(arr3[i] > max) {
		max = arr3[i];
	}
}
console.log(max);

//Zadanie 6
var arrWithNumbers = [1, 2, 4, 5, 2, 3, 5, 1, 2, 4];
var firstIndex = 0;

for (var i=0; i<arrWithNumbers.length; i++) {
    for(var j=i+1; j<arrWithNumbers.length; j++) {
        if(arrWithNumbers[i] == arrWithNumbers[j])
            firstIndex = arrWithNumbers.indexOf(arrWithNumbers[i]);
            break;
    }
}
console.log(firstIndex);


//Zadanie 7
var arr4 = [2, 3, 5, 5, 4, 1, 7, 3, 8, 17];
for(var i=arr4.length-1; i>=0; i--) {
	console.log(arr4[i]);
}










