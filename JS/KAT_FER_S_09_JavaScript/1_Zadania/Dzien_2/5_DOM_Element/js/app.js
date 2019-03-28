var homeElement = document.getElementById("home");
var childElements = document.querySelector(".oferts").querySelectorAll('div, h2, p');
var banner = document.querySelector(".ban");
var blocks = document.querySelectorAll(".block");
var links = document.querySelector(".links").querySelectorAll('li');

/*
  Poniżej napisz kod rozwiązujący zadania
 */
console.log('zadanie z wykladowca');

function getDatasInfo(elements) {
    var arr = [];

    for(var i=0; i<elements.length; i++) {

      arr.push( elements[i].dataset.color );
    }

    return arr;
}

console.log( getDatasInfo( links ) );

//zadanie 1 (samodzielne) 

// Wypisz w konsoli wszystkie te zmienne. 
// Sprawdź, które z nich to pseudotablice. 
// W przypadku pseudotablic przeiteruj 
// (używając np. pętli for). 
// Wypisz nazwę tagu oraz klasy dla każdego elementu.

console.log('Home elements - tutaj zaczynamy');
console.log(homeElement);

console.log(childElements);

for(var i=0; i<childElements.length; i++) {
	console.log(childElements[i]);
	console.log(childElements[i].tagName);
	if(childElements[i].className === '') {
		console.log('nie ma klasy');
	} else {
		console.log(childElements[i].className)
	}
}

console.log(banner);

console.log(blocks);
for(var i=0; i<blocks.length; i++) {
	console.log(blocks[i]);
	console.log(blocks[i].tagName);
	if(blocks[i].className === '') {
		console.log('block nie ma klasy');
	} else {
		console.log(blocks[i].className);
	}
}

console.log(links);
for(var i=0; i<links.length; i++) {
	console.log(links[i]);
	console.log(links[i].tagName);
	if(links[i].className === '') {
		console.log('links nie ma klasy');
	} else {
		console.log(links[i].className);
	}
}
//zadanie 2
// Wypisz w konsoli wartość innerText dla elementów zmiennej blocks. 
// Natępnie ustaw wartość innerText na "Nowa wartość diva o klasie blocks".

for(var i=0; i<blocks.length; i++) {
	console.log(blocks[i].innerText);
	blocks[i].innerText = 'Nowa wartość diva o klasie blocks';
}

//zadanie 3
// Znajdź na stronie element o class superFooter
// Stwórz funkcję getId(element), do której przekaż 
// jako argument znaleziony element
// pobierz w funkcji nazwę id elementu i zwróć ją

var superFooter = document.querySelector('.superFooter');

function getId(element) {
	return element.id;
}

console.log(getId(superFooter));

//zadanie 4
function getTags(elements) {
	var arr = [];
	for(var i=0; i<elements.length; i++) {
		arr.push(elements[i].tagName);
	}
	return arr;
}

console.log(getTags(childElements));

//zadanie 5
function getClassInfo(element) {
	return element.className.split(' ');
}

// function getClassInfo(element) {
// 	return element.classList;
// }
console.log(getClassInfo(banner));



