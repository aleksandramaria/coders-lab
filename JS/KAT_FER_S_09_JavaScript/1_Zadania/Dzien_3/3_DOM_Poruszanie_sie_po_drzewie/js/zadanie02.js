document.addEventListener("DOMContentLoaded", function () {

    var div = document.querySelectorAll('.listContainer');

    for(var i=0; i<div.length; i++) {
        div[i].addEventListener('mouseover', function () {
            var li1 = this.querySelector('.list').firstElementChild;
            li1.style.backgroundColor = 'red';

            var liLast = this.querySelector('.list').lastElementChild;
            liLast.style.backgroundColor = 'blue';

            var liOther = this.querySelector('.list').children;

            for(var j=1; j<liOther.length - 1; j++) {
                liOther[j].style.backgroundColor = 'green';
            }
        })
    }


        // divs[i].addEventListener('mouseleave', function() { 
        //     var self = this;

        //     setTimeout( function(){
        //         var lis = self.querySelectorAll('li');
        //         for(var j=0; j<lis.length; j++) {
        //             lis[j].style.backgroundColor = '';
        //         }
        //     }, 1000);
        // });

        for(var i=0; i<div.length; i++) {
        div[i].addEventListener('mouseleave', function () {
            // div self = this;

            setTimeout(function() {

            var li1 = this.querySelector('.list').firstElementChild;
            li1.style.backgroundColor = 'white';

            var liLast = this.querySelector('.list').lastElementChild;
            liLast.style.backgroundColor = 'white';

            var liOther = this.querySelector('.list').children;

            for(var j=1; j<liOther.length - 1; j++) {
                liOther[j].style.backgroundColor = 'white';
            }

        }, 1000);
    })
};


// document.addEventListener('DOMContentLoaded', function() {
//     console.log('DOM');

//     var divs = document.querySelectorAll('div');
//     for(var i=0; i<divs.length; i++) {
//         divs[i].addEventListener('mouseenter', function() {
//             console.log(this);

//             var lis = this.querySelectorAll('li');
//             lis[0].style.backgroundColor = 'red';
//             lis[ lis.length -1].style.backgroundColor = 'blue';

//             for(var j=1; j<lis.length-1; j++) {
//                 lis[j].style.backgroundColor = 'green';
//             }
//         });

//         divs[i].addEventListener('mouseleave', function() { 
//             var self = this;

//             setTimeout( function(){
//                 var lis = self.querySelectorAll('li');
//                 for(var j=0; j<lis.length; j++) {
//                     lis[j].style.backgroundColor = '';
//                 }
//             }, 1000);
//         });

//     }
// })




