document.addEventListener('DOMContentLoaded', function(){
	
	var imgs = document.querySelectorAll('img');
	var hide = document.querySelector('#hideButton');
	var show = document.querySelector('#showButton');
	var input = document.querySelector('#tagInput');

	show.addEventListener('click', function() {
		var tag = input.value;
		console.log(tag);
		for(var i=0; i<imgs.length; i++) {
			imgs[i].classList.add("invisible");
			if(imgs[i].dataset.tag.indexOf(tag) !== -1) {
				imgs[i].classList.remove('invisible')
			}
		}
	});

	hide.addEventListener('click', function() {
		var tag = input.value;
		console.log(tag);
		for(var i=0; i<imgs.length; i++) {
			imgs[i].classList.remove("invisible");
			if(imgs[i].dataset.tag.indexOf(tag) !== -1) {
				imgs[i].classList.add("invisible");
			}
		}
	});

})
