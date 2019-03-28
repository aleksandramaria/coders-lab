document.addEventListener('DOMContentLoaded', function() {
	var lis = document.querySelectorAll('.nav>ul>li');

	for(var i=0; i<lis.length; i++) {
		lis[i].addEventListener('mouseover', function() {
			if(this.firstElementChild !== null) {
				this.firstElementChild.style.display = 'block';
			}
		})

		lis[i].addEventListener('mouseout', function() {
			if(this.firstElementChild !== null) {
				this.firstElementChild.style.display = 'none';
			}
		})
	}
})