/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */

document.addEventListener('DOMContentLoaded', function() {
	var lis = document.querySelectorAll('li');
	var body = document.querySelector('body');
	console.log(body);

	for(var i=0; i<lis.length; i++) {
		lis[i].addEventListener('click', function() {
			var src = this.firstElementChild.getAttribute('src');

			var newDiv = document.createElement('div');
			
			var button = document.createElement('button');
			button.classList.add('close');
			button.innerText = 'Close';

			button.addEventListener('click', function() {
				newDiv.parentElement.removeChild(newDiv);
			})

			var img = document.createElement('img');
			img.setAttribute( 'src', src);

			newDiv.appendChild(img);
			newDiv.appendChild(button);
			
			newDiv.classList.add('fullScreen');
			body.appendChild(newDiv);
		})
	}
})


