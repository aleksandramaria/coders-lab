// document.addEventListener('DOMContentLoaded', function(){
//     console.log('dom!');

//     function hideChildrenElement(){
//         var child = this.querySelector('.children');

//         child.style.display = 'none';
//     }

//     var parent = document.querySelectorAll('.parent');
//     for(var i=0; i<parent.length; i++) {

//         parent[i].addEventListener('mouseover', function() {
//             var child = this.querySelector('.children');

//             child.style.display = 'block';
//         });

//         parent[i].addEventListener('mouseout', hideChildrenElement);
//     }
// })


document.addEventListener('DOMContentLoaded', function(){
    console.log('dom!');

    var parent = document.querySelectorAll('.parent');
    
    for(var i=0; i<parent.length; i++) {  
        parent[i].addEventListener('mouseover', function() {
            var child = this.querySelector('.children');
            child.style.display = 'block';
        });

        parent[i].addEventListener('mouseout', function() {
            var child = this.querySelector('.children');
            child.style.display = 'none';
        });
    }
})