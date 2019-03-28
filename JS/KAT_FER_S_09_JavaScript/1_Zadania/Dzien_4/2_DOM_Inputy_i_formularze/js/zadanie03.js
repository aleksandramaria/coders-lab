document.addEventListener('DOMContentLoaded', function() {
	var form = document.querySelector('form');
	var table = document.querySelector('table > tbody');

	console.log(table);

	form.addEventListener('submit', function(event) {
		event.preventDefault();
		var errors =[];

		var team1 = this.elements.team1.value;
		var team2 = this.elements.team2.value;

		if(team1 === team2) {
			errors.push(' error - the same team');
		}

		var points1 = parseInt(this.elements.points1.value);
		var points2 = parseInt(this.elements.points2.value);

		if (points1 < 0 || points2 < 0) {
			errors.push(' error - wrong points');
		}

		if(errors.length === 0) {
			var newTr = document.createElement('tr');
			newTr.innerHTML = '<td>'+ team1 +'</td>' +
								'<td>'+ team2 +'</td>	' +
								'<td>'+ points1 + ' - '+ points2 +'</td>';

			table.appendChild(newTr);
		}
		// console.log(errors);
		alert(errors);
	})
})


         
        
