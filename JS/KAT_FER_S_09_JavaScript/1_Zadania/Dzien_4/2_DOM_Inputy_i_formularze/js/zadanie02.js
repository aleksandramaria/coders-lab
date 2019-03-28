// document.addEventListener('DOMContentLoaded', function() {
// 	console.log('dom');

// 	var select = document.querySelector('select');
// 	console.log(select);
// 	var img = document.querySelectorAll('img');

// 	img[0].style.display = 'none';
// 	img[1].style.display = 'none';
// 	img[2].style.display = 'none';

// 	select.addEventListener('change', function(event) {
// 		event.preventDefault;
// 		// console.log(this.value);
// 		if(this.value === 'Windows') {
// 			img[0].style.display = 'block';
// 		} else if(this.value === 'Os X') {
// 			img[1].style.display = 'block';
// 		} else if(this.value === 'Windows') {
// 			img[2].style.display = 'block';
// 		}
// 	})
// })


document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM');

    var imgs = document.querySelectorAll('img');

    function hideImages() {
        for(var i=0; i<imgs.length; i++) {
            imgs[i].style.display = 'none';
        }
    }

    hideImages();
    var btn = document.querySelector('.btn');
    var form = document.querySelector('form');
    var select = form.querySelector('select');
                                                    //jezeli event jest wrzucony na caly form to uzywamy type 'submit' i nie musimy chowac images za kazdym razem same sie schowaja i pokaze tylko ten o stylu block
    btn.addEventListener('click', function(event) { //jezeli event jest zrobiony na guziku to musimy zrobic hide images za kazdym kliknieciem
        event.preventDefault();
        hideImages();

        // console.log('submit', select.value);

        if(select.value === 'Windows') {
            imgs[2].style.display = 'block';
        }

        if(select.value === 'Os X') {
            imgs[0].style.display = 'block';
        }

        if(select.value === 'Ubuntu') {
            imgs[1].style.display = 'block';
        }
    })
})