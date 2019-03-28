document.addEventListener('DOMContentLoaded', function() {
	console.log('dom!');

	var btn = document.querySelector('button');
	var lis = document.querySelectorAll('li');
	// var ul = document.querySelector('ul');

	// btn.addEventListener('click', function() {
	// 	for(var i=0; i<lis.length; i++) {
	// 		lis[i].parentElement.removeChild(lis[i]);
	// 	}
	// })

	btn.addEventListener('click', function() {
		for(var i=0; i<lis.length; i++) {
			lis[i].style.display = 'none';
		}
	})
})
