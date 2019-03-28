import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    const name = prompt('podaj swoje imie:');
    const age = prompt('podaj swoj wiek:');

    ReactDOM.render(
        <div> {name} ma {age} lat </div>,
        document.getElementById('app')
    );
});
