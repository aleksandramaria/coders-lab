document.addEventListener('DOMContentLoaded', function() {
    console.log('dom!');

    var btn = document.querySelectorAll('button');
    var counter = document.querySelectorAll('.counter');

    btn[0].addEventListener('click', function() {
        counter[0].innerText = parseInt(counter[0].innerText) + 1;
    });

    btn[1].addEventListener('click', function() {
        counter[1].innerText = parseInt(counter[1].innerText) + 1;
    });

    btn[2].addEventListener('click', function() {
        counter[2].innerText = parseInt(counter[2].innerText) + 1;
    });
});

// document.addEventListener('DOMContentLoaded', function() {
//     console.log('dom!');

//     var btn = document.querySelectorAll('button');
//     for(var i=0; i<btn.length; i++) {
//         btn[i].addEventListener('click', function() {
//             var id = this.id;
//             var span = document.querySelector('#'+ id +' + p .counter');

//             span.innerText = parseInt(span.innerText) + 1;
//         });
//     }


// });