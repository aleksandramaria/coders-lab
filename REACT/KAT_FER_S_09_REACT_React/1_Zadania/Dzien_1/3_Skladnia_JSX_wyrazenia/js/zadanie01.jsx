import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    const year = Number(prompt('prosze podac rok urodzenia'));
    const age = (new Date()).getFullYear() - year;

    console.log(new Date().getMilliseconds());

    ReactDOM.render(

        <h1>Masz { age } lat!</h1>,
        document.getElementById('app')
    );
});