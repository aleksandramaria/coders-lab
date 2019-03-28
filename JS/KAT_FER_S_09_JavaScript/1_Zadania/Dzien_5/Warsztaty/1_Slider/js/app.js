document.addEventListener('DOMContentLoaded', function() {
	var next = document.querySelector('#nextPicture');
	var prev = document.querySelector('#prevPicture');
	var lis = document.querySelectorAll('li');
	var counter = 0;

	lis[counter].classList.add('visible');

	next.addEventListener('click', function() {
		
		lis[counter].classList.remove('visible');
			if(counter >= lis.length-1) {
				counter = 0;
			}
			counter ++;
			lis[counter].classList.add('visible');			
	});

	
	prev.addEventListener('click', function() {
		
		lis[counter].classList.remove('visible');
		counter --;
		if(counter < 0) {
			counter = lis.length-1; 
		}
		lis[counter].classList.add('visible');
		
	});
});


//blad po przejsciu wszystkich obrazkow