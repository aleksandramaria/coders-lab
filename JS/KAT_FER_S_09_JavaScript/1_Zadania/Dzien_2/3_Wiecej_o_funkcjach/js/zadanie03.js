sayHello(); //wyswietla "Czesc"

function sayHello() {
	console.log("Czesc!");
}

// sayHello(); //funkcja wykonuje sie bez problemu

// animal(); anonimowa funkcja nie zadziala
var animal = function() {
	console.log("i'm a cat");
}

animal();