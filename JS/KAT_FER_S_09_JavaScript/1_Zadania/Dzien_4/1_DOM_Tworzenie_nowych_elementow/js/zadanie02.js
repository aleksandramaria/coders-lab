document.addEventListener('DOMContentLoaded', function() {

	var btn = document.querySelector('button');
	var input = document.querySelectorAll('input');
	var table = document.querySelector('table');
	
	btn.addEventListener('click', function() {
	
		var id = input[0].value;
		var item = input[1].value;
		var q = input[2].value;

		input[0].value = '';
        input[1].value = '';
        input[2].value = '';

		var newTr = document.createElement('tr');
		newTr.innerHTML = '<td>'+id+'</td><td>'+item+'</td><td>'+q+'</td>';

		table.appendChild(newTr);
	})

})

	// var btn = document.querySelector('#add');
 //    var inputs = document.querySelectorAll('input');
 //    var table = document.querySelector('table');

 //    btn.addEventListener('click', function() {
 //        var id = inputs[0].value;
 //        var name = inputs[1].value;
 //        var q = inputs[2].value;

 //        inputs[0].value = '';
 //        inputs[1].value = '';
 //        inputs[2].value = '';

 //        var newTr = document.createElement('tr');
 //        newTr.innerHTML = '<td>'+id+'</td><td>'+name+'</td><td>'+q+'</td>';

 //        table.appendChild(newTr);
 //    })

document.addEventListener('DOMContentLoaded', function() {

	var inputId = document.querySelector("#orderId");
	var inputItem = document.querySelector("#item");
	var inputQty = document.querySelector("#quantity");

	var submit = document.querySelector("#add");

	var table =  document.querySelector("#orders");

	submit.addEventListener("click", function() {

    	var tr = document.createElement("tr");
    	var tdId = document.createElement("td");
    	var tdItem = document.createElement("td");
    	var tdQty = document.createElement("td");
    	
    	// add value
    	tdId.innerText = inputId.value;
    	tdItem.innerText = inputItem.value;
    	tdQty.innerText = inputQty.value;
    	
    	// append to tr
    	tr.appendChild(tdId);
    	tr.appendChild(tdItem);
    	tr.appendChild(tdQty);
    	
    	// appent tr to table
    	table.appendChild(tr);
	});

// })