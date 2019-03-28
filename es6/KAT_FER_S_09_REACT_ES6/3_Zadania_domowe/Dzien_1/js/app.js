// zad 1

// function getNumbers(array) {
//     return array.map(a => a * 2);
// }

const arr = [1, 2, 3];
// console.log(getNumbers(arr));

function getNum(array) {
    const newArr = [];
    arr.forEach(el => {
        newArr.push(el * 2);
    })
    return newArr;
}

console.log(getNum(arr));

// zad 2
const Weather = function(temp) {
    this.temp = temp;
}

Weather.prototype.getAvgTemperature = function () {
    let arr = [];
    let sum = 0;
    this.temp.forEach(el => {
        arr.push(el);
        sum += el;
    });
    return sum / arr.length;
}

var day1 = new Weather([-2, 5, 3]);
let avgTemp = day1.getAvgTemperature();
console.log( day1.getAvgTemperature());

let avg = $('.avg');

avg.text(avgTemp);

// zad 3

let btn = $('button');
let par = $('p');
console.log(par, btn);

btn.on('click', (e) => {
    $(e.target).next().slideToggle();
})