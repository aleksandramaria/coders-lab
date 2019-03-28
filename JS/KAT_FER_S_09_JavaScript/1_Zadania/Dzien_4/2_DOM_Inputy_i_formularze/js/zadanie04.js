document.addEventListener('DOMContentLoaded', function() {
	console.log("dom");

	var cardNumber = document.querySelector('#name');
	console.log(cardNumber);

	var cardType = document.querySelector('.input-group-addon');
	console.log(cardType);

	var input = document.querySelector('.input-group');
	console.log(input);

	var cardDiv = document.querySelector('.form-group');
	console.log(cardDiv);

	cardDiv.addEventListener('keyup', function() {
		if(cardNumber.value[0] === '4') {
			cardType.innerText = 'Visa';
		} else if(cardNumber.value[0] === '5') {
			cardType.innerText = 'Mastercard';
		} else if((cardNumber.value[1] === '4' || cardNumber.value[1] === '7') && cardNumber.value[0] === '3') {
			cardType.innerText = 'American Express';
		}
	})

	cardDiv.addEventListener('keyup', function () {
		if(cardType.innerHTML === 'Mastercard' && cardNumber.value.length === 16) {
			document.querySelector('.input-group').style.border = '3px solid green';
		}
	})
})

// document.addEventListener("DOMContentLoaded",function () {
// 	console.log("dom");
//
// 	var card= document.querySelector("#type");
// 	var number= document.querySelector("#name");
//
// 	number.addEventListener("keyup", function () {
//
// 		card.innerText=""
// 		if (this.value[0]==="4"){
// 			card.innerText="VISA";
// 		}
// 		else if (this.value[0]==="5"){
// 			card.innerText="Mastercard";
// 			if(this.value.length===16){
// 				this.style.border= "3px solid green";
// 			}
// 		}
// 		else if (this.value[0]==="3" && (this.value[1]==="4" || this.value[1]==="7")){
// 			card.innerText="American Express";
// 		}
// 	})
//
//
//
//
// })