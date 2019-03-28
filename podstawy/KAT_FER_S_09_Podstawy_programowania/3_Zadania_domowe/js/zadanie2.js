function getNegativeNumbers(array) {
    var arr = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            arr.push(array[i]);
        }
    }
    return arr;
}

var arr1 = [4, -5, 0, 2, -67, 8, 10, -34 ];
console.log(getNegativeNumbers(arr1));
