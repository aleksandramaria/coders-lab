// Na stronie znajdują się trzy guziki i jeden licznik. 
// Napisz jeden wspólny event dla wszystkich guzików, 
// który spowoduje, że po kliknięciu w guzik licznik 
// zwiększy wartość o jeden.

document.addEventListener('DOMContentLoaded', function(){
	var btn = document.querySelectorAll('button');
	var counter = document.querySelector('.counter');

	for(var i=0; i<btn.length; i++) {
		btn[i].addEventListener('click', function() {
		
			counter.innerText = parseInt(counter.innerText) + 1;
		})
	}
});