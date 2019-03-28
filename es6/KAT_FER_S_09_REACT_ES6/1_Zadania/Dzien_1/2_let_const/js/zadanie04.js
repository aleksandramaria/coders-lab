
//TODO: spróbuj zmienić zmienną name nadpisująć ją niżej innym imieniem.
// nie mozna nadpisac const
const name = "Agata";
// name = "Ania";


//TODO:
//a) spróbuj zmienić zmienną simpleArray nadpisująć ją niżej inną tablicą.
//b) spróbuj dodać nową wartość do tablicy
//c) spróbuj zmienić którąkolwiek wartość z tablicy simpleArray
const simpleArray = [1,2,3,4];
// simpleArray = [3, 5, 6];
//nie mozna nadpisac tablicy inna tablica

simpleArray[4] = 5;
console.log(simpleArray);
//spokojnie mozna dodawac elementy do zmiennej const

simpleArray[0] = 10;
console.log(simpleArray);
//spokojnie mozna wymieniac elementy tablicy zapisanej jako zmienna const


//TODO:
//a) spróbuj zmienić zmienną dog nadpisująć ją niżej innym obiektem.
//b) spróbuj zmienić właśność skill obiektu dog
//c) spróbuj dodać nową własność do obiektu dog np. age
const dog = {
    name: "Puszek",
    skill: "killing"
}

// dog = {
//     age: 1;
// }

//a) nie mozna nadpisac innym obiektem

dog.skill = 'high jump';

console.log(dog.skill);
//b) mozna nadpisac wlasnosci w srodku obiektu zapisanego jako zmienna const

dog.age = 2;
console.log(dog.age);
//c) mozna dodac nowe wlasnosci do obiektu zapisanego jako zmienna const
