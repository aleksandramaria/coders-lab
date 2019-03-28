document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM');

    var btn = document.querySelector('button');
    var ul = document.querySelector('ul');

    btn.addEventListener('click', function() {
        var li = document.createElement("li");

        var childrenNo = ul.children.length
		li.innerText = 'element ' + (childrenNo + 1) +
		' - w chwili dodania było ' + childrenNo + ' elementów';

        ul.appendChild(li);

    });

})


// Element 1 - w chwili dodania było 0 elementów
