
// zadanie 1

const foo = () => 'hello world';


console.log(foo());

// zadanie 2

const boo = (a = 10) => {
    console.log(a * 2);
}

boo();
boo(5);

// zadanie 3

const bar = (a, b) => {
    if(a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(bar(1, 6));
console.log(bar(4, 3));

// zadanie 4

let arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];

function getSecondMaxNumber(array) {
    array.sort((a, b) => b - a);
    return array[1];
}

console.log(getSecondMaxNumber(arr1));

// zadanie 5

const res5 = (x => x) ('bla');

console.log(res5);

// zadanie 6
const sayHello = (a = 5) => {
    let counter = 0;
    let interval = setInterval( () => {
        counter ++;
        console.log('Hello! ' + counter);
        if(counter === a) {
            clearInterval(interval);
        }
    }, 1000);
}

sayHello();

