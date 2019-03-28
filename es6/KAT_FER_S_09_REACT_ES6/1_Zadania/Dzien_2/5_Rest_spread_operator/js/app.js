//zad z wykladowca
// Operator rozproszenia

const namesA = ["Zosia", "Marcin", "Kamil"];
const namesB = ['Sylwia', 'Ola', 'Ciebie', ...namesA, 'Imiona', 'Dwa'];

console.log(namesB);

//Operator reszty (rest operator)

function getAverage(...nums){
    if (nums.length > 0) {
        return nums.reduce((prev, curr) => prev + curr, 0) / nums.length;
    } else {
        console.log('Nie można wyciągnąć średniej dla pustej tablicy!');
    }
}

console.log(getAverage());
console.log(getAverage(1, 2, 9870));


// zad 1
const myName = 'ola';
const myNameAr = [...myName];
console.log(myNameAr);

// zad 2
const fruits = ['apple', 'orange', 'banana'];
const vegetables = ['radish', 'leek', 'carrot'];
const mix = [...fruits, ...vegetables];
console.log(mix);