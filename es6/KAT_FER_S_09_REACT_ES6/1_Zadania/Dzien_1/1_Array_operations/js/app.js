var cities = ["Kraków", "Olsztyn", "Szczecin", "Ostrów Wielkopolski"];

function getLength(element) {
    return element.length;
}

var citiesLength = cities.map(getLength);
console.log(citiesLength);

//zad 1

function randomize(param1, param2, callback) {
    if(typeof callback !== "function") {
        console.log('error!');
    } else {
        var num1 = parseInt(param1);
        var num2 = parseInt(param2);

        var res = Math.floor(Math.random() * num2) + num1;

        callback(res);
    }
}

randomize("2", 3, function(res) {
    console.log("wynik: " + res);
});


//zad 2
var animals = ["cat", "shrimp", "giraffe"];

function printAnimal(element) {
    console.log(element);
}

animals.forEach(printAnimal);

//popracuj nad TYM!!

// var animals = ["cat", "shrimp", "giraffe"];

// function printAnimal(element) {
//     console.log(element);
// }

animals.forEach(function (element) {
    console.log(element);
}

// animals.forEach(printAnimal);


//zad 3
var years = [1995, 1856, 2014, 1987];

function getAge(year) {
    return 2019 - year;
}

var result = years.map(getAge);
console.log(result);

//zad 4
var arr = [1, 2, 3, 4];

function getSum(prev, curr) {
    return prev + curr;
}

function getMulti(prev, curr) {
    return prev * curr;
}

console.log(arr.reduce(getSum));
console.log(arr.reduce(getMulti));

// var - zasieg funkcyjny
// let - zasieg blokowy {to co ma wasy}