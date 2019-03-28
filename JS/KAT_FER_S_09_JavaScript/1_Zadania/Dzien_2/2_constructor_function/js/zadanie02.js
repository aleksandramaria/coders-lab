function Calculator() {
	this.operations = [];
}

Calculator.prototype.add = function(num1, num2) {
	var result = num1 + num2;

	var str = "added: " + num1 + " + " + num2 +  " = " + result;
	console.log(str);
	this.operations.push(str);
}

Calculator.prototype.multiply = function(num1, num2) {
	var result = num1 * num2;

	var str = "multiplied: " + num1 + " * " + num2 +  " = " + result;
	console.log("multiplied " + num1 + " by " + num2 + " got " + result);
	this.operations.push(str);
}

Calculator.prototype.subtract = function subtract(num1, num2) {
	var result = num1 - num2;

	var str = "subtracted: " + num1 + " - " + num2 + " = " + result;
	console.log(str);
	this.operations.push(str);
}

Calculator.prototype.divide = function divide(num1, num2) {
	var result = num1 - num2;

	var str = "divided: " + num1 + " / " + num2 + " = " + result;
	console.log(str);
	this.operations.push(str);
}

Calculator.prototype.printOperations = function printOperations() {
	// console.log(this.operations);
	for(var i=0; i<this.operations.length; i++) {
		console.log(this.operations[i]);
	}
}

Calculator.prototype.clearoperations = function clearoperations() {
	this.operations = [];
}

var operation = new Calculator();
operation.add(3, 3);
operation.multiply(3, 4);
operation.subtract(10, 2);
operation.divide(15, 5);
operation.printOperations();
operation.clearoperations();

operation.printOperations();



