import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    const a = Number(prompt('liczba a!'));
    const b = Number(prompt('liczba b!'));
    const sign = prompt('znak!');

    let result;

    if(sign === '+') {
        result = <h1> {a + b} </h1>
    } else if( sign === '-') {
        result = <h3> {a - b} </h3>
    } else if( sign === '*') {
        result = <h4> {a * b} </h4>
    } else if( sign === '/') {
        result = <h4> { a / b } </h4>
    }

    ReactDOM.render(
        <div> { result } </div>,
        document.getElementById('app')
    );
});