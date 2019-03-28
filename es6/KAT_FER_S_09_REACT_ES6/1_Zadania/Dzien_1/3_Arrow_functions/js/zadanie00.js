var Students = function(students) {
	this.names = students;
	this.numberOfLetters = [];
};

// wersja z forEach
Students.prototype.countLetters = function() {
	this.names.forEach((name, index) => {
		this.numberOfLetters[index] = name.length;
	});
}

// wersja z map
Students.prototype.countLetters = function() {
	this.numberOfLetters = this.names.map(name => name.length);
}

var students = new Students(["Ania", "Kamil", "Mariusz"]);
students.countLetters();
console.log(students.numberOfLetters);