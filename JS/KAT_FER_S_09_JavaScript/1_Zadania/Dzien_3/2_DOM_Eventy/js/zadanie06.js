document.addEventListener('DOMContentLoaded', function() {

	var div = document.querySelector('#box');
	var spans = document.querySelectorAll('span');
	var rect = div.getBoundingClientRect();

   	div.addEventListener('mousemove', function(event) {
   		event.clientX, event.clientY;

   		spans[0].innerText = event.clientX;
   		spans[1].innerText = event.clientY;

   		spans[2].innerText = event.clientX - rect.left;
   		spans[3].innerText = event.clientY - rect.top;
   })
})
