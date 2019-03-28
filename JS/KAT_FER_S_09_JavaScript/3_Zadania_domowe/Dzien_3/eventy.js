

var a = document.querySelectorAll('article a');
console.log(a);

var content = document.querySelectorAll('.content');
console.log(content);

a[0].addEventListener('click', function() {
	content[0].style.display = 'block';
})

a[1].addEventListener('mouseover', function() {
	content[1].style.display = 'block';
})


// var a = document.querySelectorAll('article a');

// 	for(var i=0; i<a.length; i++) {

// 		a[0].addEventListener('click', function() {
// 			var content = this.nextElementSibling;

// 			content.style.display = 'block';
// 		})

// 		a[1].addEventListener('mouseover', function() {
// 			var content = this.nextElementSibling;

// 			content.style.display = 'block';
// 		})
// 	}

