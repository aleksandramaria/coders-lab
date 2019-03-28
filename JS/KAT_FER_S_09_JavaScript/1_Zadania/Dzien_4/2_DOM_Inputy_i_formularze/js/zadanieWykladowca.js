document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM');

    var form = document.querySelector('form');
    var messages = form.querySelector('.error-message');
    console.log(messages);

    form.addEventListener('submit', function(event) {
        console.log('submit');

        var errors = [];

        if(this.elements.email.value.indexOf('@') === -1) {
            errors.push('Email musi posiadać znak @');
        }

        if(this.elements.name.value.length <= 6 ) {
            errors.push('Twoje imię jest za krótkie');
        }

        if(this.elements.surname.value.length <= 6 ) {
            errors.push('Twoje nazwisko jest za krótkie');
        }

        if(this.elements.pass1.value === '' || this.elements.pass1.value !== this.elements.pass2.value) {
            errors.push('Hasła nie są takie same lub puste')
        }

        if(this.elements.agree.checked === false) {
            errors.push('Musisz zaakceptować warunki')
        }


        console.log(errors);
        if(errors.length > 0) {
            event.preventDefault();

            messages.innerText = '';
            for(var i=0; i<errors.length; i++) {
                var newP = document.createElement('p');
                newP.innerText = errors[i];

                messages.appendChild(newP);
            }
        }
    })
})

