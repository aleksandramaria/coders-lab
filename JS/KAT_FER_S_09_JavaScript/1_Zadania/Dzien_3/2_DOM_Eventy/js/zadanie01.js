

document.addEventListener('DOMContentLoaded', function(){
	console.log('dom!');

	var menu = document.querySelector("#menu");
	var paragraf = document.querySelector("p");

	menu.classList.add("menu");
	paragraf.innerHTML = "A to jest paragraf w zadaniu 1";

});