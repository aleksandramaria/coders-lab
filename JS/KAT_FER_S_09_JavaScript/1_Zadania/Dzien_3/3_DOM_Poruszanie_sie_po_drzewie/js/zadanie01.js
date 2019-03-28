document.addEventListener('DOMContentLoaded', function(){

    var btns = document.querySelectorAll('.button');
    
    for(var i=0; i<btns.length; i++) {
        btns[i].addEventListener('click', function() {
            console.log(this);

            var parents = this.parentElement;
            console.log(parents);

            var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

            parents.style.backgroundColor = randomColor;
            
        })
    }
   
})





