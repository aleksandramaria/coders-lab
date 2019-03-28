var arr = [];
var sum = 0;
var average = 0;

for(var j=0; j<5; j++) {
    arr.push( Math.round(Math.random() * 10 ) );
}

console.log(arr);

for(var i=0; i<arr.length; i++) {
	sum = sum + arr[i];
}

average = sum / arr.length

console.log(average);