/*
 <span class="tooltipText">Text tooltipa</span>
 */

document.addEventListener('DOMContentLoaded', function() {
	var tooltips = document.querySelectorAll('.tooltip');

	for(var i=0; i<tooltips.length; i++) {
		tooltips[i].addEventListener('mouseover', function() {
			var newSpan = document.createElement('span');
			newSpan.classList.add('tooltipText');
			newSpan.innerText = this.dataset.text;
			this.appendChild(newSpan);
		})

		tooltips[i].addEventListener('mouseout', function() {
			var newSpan = document.querySelectorAll('.tooltipText');
			for(var i=0; i<newSpan.length; i++) {
				newSpan[i].parentElement.removeChild(newSpan[i]);
			}
		})
	}
})

// Ma on dodawać nowy element do elementu, 
// na którym jest wywoływany. Przykładowy element, 
// który masz dodać, znajduje się w komentarzu na początku pliku main.js.