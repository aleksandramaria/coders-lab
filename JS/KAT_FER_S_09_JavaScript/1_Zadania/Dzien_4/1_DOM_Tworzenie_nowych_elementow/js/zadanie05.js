document.addEventListener('DOMContentLoaded', function() {
	console.log('dom');

	var a = document.querySelectorAll('a');
	var list1 = document.querySelector('#list1');
	var list2 = document.querySelector('#list2');

	for(var i=0; i<a.length; i++) {
		a[i].addEventListener('click', function() {

			if(this.parentElement.parentElement.id === 'list1') {
				list2.appendChild(this.parentElement);
			} else if(this.parentElement.parentElement.id === 'list2') {
				list1.appendChild(this.parentElement);
			}
		})
	}
})

// document.addEventListener('DOMContentLoaded', function() {
	

// 	var btn = document.querySelectorAll('.moveBtn');
// 	var lis = document.querySelectorAll('li');
// 	var list1 = document.querySelector('#list1');
// 	var list2 = document.querySelector('#list2');

// 	for(var i=0; i<btn.length; i++) {
// 		btn[i].addEventListener('click', function() {
// 			for(var j=0; j<lis.length; j++) {
// 				if(lis[j].parentElement.id === 'list2') {
// 					list1.appendChild(this.parentElement);
// 				} else if(lis[j].parentElement.id === 'list1') {
// 					list2.appendChild(this.parentElement);
// 				}
// 			}
// 		})
// 	}
// })