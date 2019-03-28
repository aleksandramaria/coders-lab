document.addEventListener('DOMContentLoaded', function(){
    console.log('DOM');

    var btns = document.querySelectorAll('a');
    for(var i=0; i<btns.length; i++) {
        btns[i].addEventListener('click', function() {
            console.log(this);

            var div = this.nextElementSibling;
            console.log(div);

            if(div !== null) {
                div.classList.toggle('hidden');
            }
        })
    }
})