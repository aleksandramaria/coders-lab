//zadanie z wykladowca 

var car = {
    brand: 'opel',
    color: 'czerwono-czarny',
    numberOfKilometers: 0,
    printCarInfo: function() {
        console.log( this.brand , this.color, this.numberOfKilometers );
    },
    drive: function(km) {
        this.numberOfKilometers += km;
    }
}

car.printCarInfo();
car.drive(20);
car.drive(100);
car.printCarInfo();
car.drive(100);
car.printCarInfo();

//zadanie 1

car.inspections = ['Dec 2016', 'Jan 2017', 'Feb 2018'];

car.addInspection = function(date) {
	this.inspections.push(date);
}

console.log(car);

// car.getInspection = function() {
// 	return this.inspections;
// }

car.getInspections = function() {
    for(var i=0; i<this.inspections.length; i++) {
        console.log( this.inspections[i] );
    }
}

car.addInspection('March 2014');

console.log(car.getInspections());


//zadanie 3

// Stwórz w pliku app.js obiekt stairs.

// Niech obiekt posiada pole step, które na początku ustaw na 0.

// Dodaj do obiektu również następujące metody:

// up(), która zwiększa schodek o 1 (modyfikuj pole step)
// down(), która zmniejsza schodek o 1 (modyfikuj pole step)
// printStep(), która pokazuje, na którym schodku jesteśmy.
// Przykład wywołania:

var stairs = {
    step: 0,
    up: function() {
        this.step++;
    },
    down: function() {
        this.step--;
    },
    printStep: function() {
        return this.step;
    }
}

stairs.up();
stairs.up();
stairs.up();
stairs.down(); 
console.log(stairs.printStep()); // 2