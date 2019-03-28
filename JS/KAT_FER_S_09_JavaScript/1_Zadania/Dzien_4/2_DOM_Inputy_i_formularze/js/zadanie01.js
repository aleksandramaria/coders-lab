document.addEventListener('DOMContentLoaded', function() {

	var checkBox = document.querySelector('#invoice');
	var invoiceData = document.querySelector('#invoiceData');

	invoiceData.style.display = 'none';
	checkBox.addEventListener('change', function() {
		if(checkBox.checked === true) {
			invoiceData.style.display = 'block';
		} else {
			invoiceData.style.display = 'none';
		}
	})
})





















