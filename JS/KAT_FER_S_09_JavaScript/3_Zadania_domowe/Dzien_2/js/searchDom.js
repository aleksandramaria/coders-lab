// 1. Pobranie informacji z atrybutu data

var menu = document.querySelector('#menu');
console.log(menu);

// function getDatasInfo(elements) {
//     var arr = [];
//     for(var i=0; i<elements.length; i++) {
//         arr.push( elements[i].dataset.info );
//     }
//     return arr;
// }

function getDataInfo(element) {
	var arr = [];
	var li = element.querySelectorAll('li');
	for(var i=0; i<li.length; i++) {
		arr.push(li[i].dataset.info);
	}
	return arr;
}

console.log(getDataInfo(menu));


//2. Szukanie elementu po id:

var mainContener = document.getElementById('#main-contener');

console.log(mainContener);

function getElementClass(element) {
	return element.className.split(' ');
}

console.log(getElementClass(mainContener));

//3. Szukanie elementu po klasie

var pinky = document.querySelector('.pink-color');

function getElementText(element) {
	return element.innerText;
}

console.log(getElementText(pinky));

// 4. Szukanie elementu po klasie

var images = document.querySelector('.images');
console.log(images);

function getElementAlt(element) {
	return element.alt.split(' ');
}

console.log(getElementAlt(images));

// 5. Szukanie elementu po klasie

var myLink = document.querySelector('.my-link');
console.log(myLink);

function getElementHref(element) {
	return element.href.split(' ');
}

console.log(getElementHref(myLink));




