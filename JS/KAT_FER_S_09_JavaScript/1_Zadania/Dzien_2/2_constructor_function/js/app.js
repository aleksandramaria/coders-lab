function Basket() {
    this.products = [];
    this.sum = 0;
}

Basket.prototype.addProduct = function(nameVal, priceVal) {
    var obj = {
        name: nameVal,
        price: priceVal,
    };

    this.products.push( obj );
    this.sum += priceVal;
} 

Basket.prototype.showBasket = function() {
    for(var i=0; i<this.products.length; i++) {
        console.log( this.products[i] );
    }

    console.log('do zapłaty: '+ this.sum.toFixed(2) );
    console.log('\n');
}

var aliceBasket = new Basket();
aliceBasket.addProduct("pomidor",10);
aliceBasket.addProduct("arbuz",40);
aliceBasket.showBasket();

var bruceBasket = new Basket();
bruceBasket.addProduct("rice", 10);
bruceBasket.addProduct("grzyby mun",50);
bruceBasket.addProduct("tofu",20);
bruceBasket.showBasket();
