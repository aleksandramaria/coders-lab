function getSecondMaxNumber(array) {
    array.sort(function(a, b){return a - b});
    console.log(array);
    return array[array.length -2];
}

var arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];
console.log(getSecondMaxNumber(arr1));


var arr2 = [2, 300, 1, 6, 9, 49, 5, 7, 8, 99 ];
console.log(getSecondMaxNumber(arr2));