// zadanie 1

var task1Array = [
                  [2, 3],
                  ["Ala", "Ola"],
                  [true, false],
                  [5, 6, 7, 8],
                  [12, 15, 67]
              ];


// console.log(task1Array[3][2]);
// console.log(task1Array[1].length);
// console.log(task1Array[4][2]);

// zadanie 2

function print2DArray(array) {
	var str = '';
	for(var i=0; i<array.length; i++) {
		for(var j=0; j<array[i].length; j++) {
			//console.log(array[i][j]);

			str += ' ' + array[i][j];
		}

		str += '\n';
	}
	console.log(str);
}

print2DArray(task1Array);