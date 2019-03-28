//zadanie z wykladowca
//zad 1

var h1 = document.querySelector('h1');
console.log(h1);

var title = document.querySelector('.title');
console.log(title);

var dataAnimation = document.querySelector('[data-animation]');
console.log(dataAnimation);


//zadanie z wykladowca
//zad 2

var div = document.querySelectorAll('div');
console.log(div.length);

var oferts = document.querySelectorAll('.oferts');
console.log(oferts.length);

var href = document.querySelectorAll('[href]');
console.log(href.length);



//zadanie 1
var id1 = document.querySelector('#home');
console.log(id1);

var id2 = document.getElementById('home');
console.log(id2);

var li = document.querySelector('li[data-direction]');
console.log(li);

var block = document.querySelector('.block');

//zadanie 2
// Wszystkie elementy li znajdujące się w tagu nav.
// Wszystkie paragrafy należące do wszystkich elementów div.
// Wszystkie divy znajdujące się w tagu article.

var lis = document.querySelector('nav li');
console.log(lis);

var pars = document.querySelector('div p');
console.log(pars);

var divs = document.querySelector('article div');
console.log(divs); 


//zadanie 3
// Wyszukaj na stronie i zapisz do odpowiednio nazwanej 
// zmiennej tag article o klasie first.
// W kolejnym etapie:
// wypisz w konsoli, ile elementów h1 znajduje się w tym tagu.
// Pamiętaj, żeby za każdym razem sprawdzić, 
// czy wczytałeś odpowiednie elementy.

var firstArticle = document.querySelector('article.first');
// console.log(firstArticle);

if(firstArticle !== null) {
	var h2 = firstArticle.querySelectorAll('h2');
	console.log('found: ', h2.length);
}


