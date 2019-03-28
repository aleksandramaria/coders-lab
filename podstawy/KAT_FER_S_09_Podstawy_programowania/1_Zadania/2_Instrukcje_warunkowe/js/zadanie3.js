// Niektórzy ludzie wierzą, że rok życia ludzkiego to 
// siedem lat przeżytych przez psa. Stwórz zmienną menAge, 
// której ustaw wartość na 30, oraz zmienną pet przechowującą nazwę 
// jakiegoś domowego zwierzaka np. "pies" lub "kot".

// Następnie za pomocą znanej Ci instrukcji warunkowej 
// sprawdź jakiego zwierzaka wybrał użytkownik i w przypadku jeśli to 
// jest pies oblicz ile ma lat względem człowieka.

var menAge = 30;

var userChoice = prompt("wybierz pies lub kot");

// if( userChoice == "pies") {
// 	console.log("wiek psa to " + menAge * 7);
// }

console.log(userChoice == "pies" ? menAge * 7 : 'nic nie oblicze');