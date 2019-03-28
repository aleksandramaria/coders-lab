//zad z wyk 1
var country = {
	capital: 'Warszawa',
	population: 213535738,
	president: 'Duda',
	primeMinisters: ['fdsfasd', 'adfdsoi', 'dfhasdf'],
}

// var population = 'population';
// console.log(country.capital, country[population]);

//or

// console.log(country['capital'], country['population']);

for(var k in country) {
	console.log( country[k] );
}

//zad z wyk 2

var timeMachine = {};

timeMachine.shape = 'bla';
timeMachine.model = '4444';
timeMachine.run = function(date, place) {
	console.log(date, place);
}

console.log(timeMachine.shape, timeMachine.model);
timeMachine.run('2019-02-03', 'Katowice');

//zadanie 1

var book = {
	title: 'Kobiety',
	author: 'Charles Bukowski',
	numberOfPages: 300,
}

for(var k in book) {
	console.log( book[k] );
}

//zadanie 2

var person = {
	name: 'Ania',
	age: 25,
	sayHello: function() { 
		console.log('hello');
	},
}

for(var k in person) {
	if(typeof person[k] === 'function') {
		person[k]();
	} else {
		console.log(k, person[k]);
	}
}

console.log(person.name);
console.log(person.age);
person.sayHello();

//zadanie 3

var recipe = {
	title: 'pasta',
	servings: 4,
}

recipe.ingredients = ['wholewheat pasta', 'dried tomateos', 'feta cheese', 'aubergine'];

for(var k in recipe) {
	console.log(recipe[k]);
}

//zadanie 4

var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

console.log(spoon.isExist);



