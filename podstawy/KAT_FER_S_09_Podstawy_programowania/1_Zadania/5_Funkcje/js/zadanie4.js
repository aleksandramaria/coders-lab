// Stwórz funkcję, która będzie zwracała (poprzez return)
// sumę liczb z tablicy. Tablica powinna
// być przekazana do funkcji jako argument.
//
//     Przykład:
//
// input -> [1,2,3]
// output -> 6


function sum(input) {
    var sum = 0;
    for(var i=0; i<input.length; i++) {
        sum += input[i];
    }
    return sum;
}

console.log( sum([5, 5, 5]));
console.log( sum([10, 4, 1, 16]));