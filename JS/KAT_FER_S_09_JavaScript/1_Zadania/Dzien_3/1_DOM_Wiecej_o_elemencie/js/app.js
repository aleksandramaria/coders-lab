/*
  Poniżej napisz kod rozwiązujący zadania
 */

 //zadanie z wykladowca

console.log('zadanie z wykladowca');

var lis = document.querySelectorAll('.ex5 li');
lis[4].classList.add('big');
for(var i=0; i<lis.length; i++) {
  if(i % 2 === 1) {
    lis[i].style.backgroundColor = 'green';
  }

  if(i % 3 === 2) {
    lis[i].style.border = '4px solid red';
  }
}

//zadanie 1 samodzielne

var ex1 = document.querySelector('.exercise.ex1');
console.log(ex1);

var edge = ex1.querySelector('.edge');
console.log(edge);

edge.style.backgroundImage = 'url("assets/img/edge.png")';

var firefox = ex1.querySelector('.firefox');

firefox.style.backgroundImage = 'url("assets/img/firefox.png")';

var link = ex1.querySelectorAll('a');
console.log(link[1]);

link[0].innerText = "Chrome";

link[1].setAttribute("href", "https://www.microsoft.com/en-us/windows/microsoft-edge");

console.log(link[2])
link[2].setAttribute("href", "https://www.mozilla.org/en-US/firefox/");
link[2].innerText = "Firefox";

var chromeLogo = ex1.querySelector('.chrome');
console.log(chromeLogo);

chromeLogo.style.width = '100px';

//zapis w konsoli jest taki jak w css/html atrybutow inlinowych

//zadanie 2

var ex2 = document.querySelector('.exercise.ex2');
console.log(ex2);

var links = ex2.querySelectorAll('li');
console.log(links[0]);
links[0].innerText += " ola książek";
links[1].innerText += " żółty";
links[2].innerText += " roladki z kluskami";

//zadanie 3

var ex3 = document.querySelector('.exercise.ex3');
console.log(ex3);

var ul = ex3.querySelector('ul');
console.log(ul);

ul.classList.add('menu');
console.log(ul.classList);

var lis = ul.querySelectorAll('li');
console.log(lis);

for(var i=0; i<lis.length; i++) {
	lis[i].classList.add('menuElement');
	lis[i].classList.remove('error');
}

//zadanie 4

var ex4 = document.querySelector('.exercise.ex4');
console.log(ex4);

var lis4 = ex4.querySelectorAll('li');
console.log(lis4);

for(var i=0; i<lis4.length; i++) {
	// lis4[i].dataset.id = i+1;
	lis4[i].setAttribute("data-id", i+1);
}







