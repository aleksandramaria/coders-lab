document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM');

    var btns = document.querySelectorAll('.deleteBtn');

    for(var i=0; i<btns.length; i++) {
        btns[i].addEventListener('click', function() {
            //console.log('click', this);

            var tr = this.parentElement.parentElement;
            
            tr.parentElement.removeChild(tr);
        })
    }
})