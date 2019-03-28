import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    // const userA = Number(prompt('a!'));
    // const userB = prompt('b!');

    const numa = Number(prompt('wpisz liczbe!'));
    const numb = Number(prompt('wpisz jeszcze jedna liczbe!'));
    ReactDOM.render(
        <h1>{ numa + numb }</h1>,
        document.getElementById('app')
    );
});

