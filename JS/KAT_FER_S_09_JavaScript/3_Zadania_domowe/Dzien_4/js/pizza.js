// document.addEventListener('DOMContentLoaded', function () {
//     console.log('dom');
//
//     var form = document.querySelector('form');
//     var checks = form.querySelectorAll('input');
//
//     form.addEventListener('submit', function (e) {
//         e.preventDefault();
//         console.log('submit');
//
//         var sum = [];
//         if (this.elements.checked === true) {
//             sum.push(this.elements.dataset.price);
//         }
//         return sum;
//     })
//
//
// });

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    var form = document.querySelector('form');
    var total = document.querySelector('#price');
    var allToppings = document.querySelector('input');
    var toppings = document.querySelectorAll('[data-price]');
    var clearToppings = document.querySelectorAll('input')[6];
    var submitBtn = document.querySelector('button');
    var totalCostInfo = document.querySelector('#total');


    // Prevent Default + modify ttl price
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        totalCostInfo.textContent = total.textContent;
    });

    toppings.forEach( el => {
        el.addEventListener("change", function(){
            var currentPrice = parseFloat(total.textContent);
            total.textContent = "";
            if(el.checked === true) {
                currentPrice += parseFloat(el.dataset.price);
                total.textContent += currentPrice.toFixed(2);
                total.textContent += " zł"
            } else {
                allToppings.checked = false;
                currentPrice -= parseFloat(el.dataset.price);
                total.textContent += currentPrice.toFixed(2);
                total.textContent += " zł"
            }
            clearToppings.checked = false;
        });
    });

    allToppings.addEventListener("change", function(){
        var currentPrice = 0;

        if(allToppings.checked === true) {
            toppings.forEach(el => {
                el.checked = true;
                currentPrice += parseFloat(el.dataset.price);
            });
        } else {
            toppings.forEach(el => el.checked = false);
            total.textContent = "0";
        }
        clearToppings.checked = false;
        total.textContent = currentPrice.toFixed(2);
        total.textContent += " zł"
    });

    clearToppings.addEventListener("change", function() {
        if(clearToppings.checked === true) {
            toppings.forEach(el => {
                el.checked = false;
            });
            allToppings.checked = false;
            total.textContent = "0 zł"
        }
    });

    submitBtn.addEventListener("click", function() {
        totalCostInfo.textContent = total.textContent;
    });

});

// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//
//     var sum = [];
//     for(var i=0; i<checks.length; i++) {
//         if(checks[i].value.checked === true) {
//             var sum = [];
//             sum.push(this.elements.dataset.price);
//         }
//         return sum;
//     }
//     return sum;
// })