// Napisz program liczący sumę wszystkich liczb 
// w podanym przedziale od x do y. 
// Użyj do tego obu znanych Ci pętli. 
// Np. dla x = 5, y = 10 suma to 5+6+7+8+9+10=45


var x = 5;
var y = 10;
var res = 0;


while(x <= y) {
	res = res + x;   
	x++;
}

// for(var i = x; i<=y; i++) {
// 	res = res + i;
// }

console.log(res);


