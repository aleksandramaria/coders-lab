// Użyj do tego pętli zagnieżdżonych, 
// a w wewnętrznej pętli dodaj if sprawdzający 
// odpowiedni warunek (jeżeli i + j jest nieparzyste, to ma być gwiazdka).
// Do rozwiązania zadania stwórz zmienną result,
// do której dopisuj gwiadzkę (*), pustą spację (), lub znak nowej linii (\n)

var n = 5;
var result = "";

for(var i=0; i<n; i++) {
	for(var j=0; j<n; j++) {
		if((i + j) % 2 == 1) {
			result += "*";
		} else {
			result += " ";
		}
	}
	result+="\n";
}

console.log(result);