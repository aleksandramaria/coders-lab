//zadanie z kuba

const ar = [ "snow", "rain", "sun" ];

const [first,, third] = ar;

console.log(first, third);

// drugie z kuba

const slider = {
    type: "infinite",
    numberOfItems: 10,
    center: true,
    autoStart: true
};

const {type, autoStart} = slider;

console.log(type, autoStart);

// zad 1
const names = ['zosia', 'hania', 'stefania'];
[ name1, name2, name3 ] = names;
console.log(name3);

// zad 2
function generateRandomNumbers() {
    let arr = [];
    for (let i=0; i<6; i++) {
        arr.push(Math.floor(Math.random() * 5));
    }
        const [ x, ,y ] = arr;
        console.log(x);
        console.log(y);
    return arr;
}
console.log(generateRandomNumbers());

// zad 4

const getAnimal = () => {
 return {
     name: "Mruczek",
     age: 10,
     getVoice: () => "miau miau"
 }
}

const {name: catName, getVoice: catVoice } = getAnimal();
// const {getVoice: catVoice } = getAnimal();
console.log(catName, catVoice());






