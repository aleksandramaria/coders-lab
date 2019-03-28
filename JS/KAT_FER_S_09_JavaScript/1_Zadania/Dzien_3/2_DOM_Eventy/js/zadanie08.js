document.addEventListener('DOMContentLoaded', function () {

    var span = document.querySelectorAll('span');
    window.addEventListener('resize', function() {

        span[0].innerText = window.innerWidth;
        span[1].innerText = window.innerHeight;
    })
})


//
// document.addEventListener('DOMContentLoaded', function() {
//     console.log('DOM!');
//
//     function setSize() {
//         var height = window.innerHeight;
//         var width = window.innerWidth;
//
//         spans[0].innerHTML = '<b>' + width + '</b>';
//         spans[1].innerText = height;
//     }
//
//     var spans = document.querySelectorAll('span');
//
//     setSize();
//     window.addEventListener( 'resize', setSize );
// });