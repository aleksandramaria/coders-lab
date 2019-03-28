// Zadanie 1

function Tree(type) {
	this.type = type;
}

var tree1 = new Tree('oak');
var tree2 = new Tree('willow');
var tree3 = new Tree('pine');

Tree.prototype.bloom = function bloom() {
	return "I'm blooming";
}

console.log(tree1, tree2, tree3);

console.log(tree1.type);
console.log(tree2.type);
console.log(tree3.type);

console.log(tree1.bloom());
console.log(tree2.bloom());
console.log(tree3.bloom());

