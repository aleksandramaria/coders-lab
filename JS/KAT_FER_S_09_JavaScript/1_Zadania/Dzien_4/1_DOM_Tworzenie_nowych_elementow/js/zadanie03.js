document.addEventListener('DOMContentLoaded', function() {
	console.log('dom');

	var btn = document.querySelector('button');
	console.log(btn);

	btn.addEventListener('click', function() {
		btn.parentElement.removeChild(btn);
	})
})