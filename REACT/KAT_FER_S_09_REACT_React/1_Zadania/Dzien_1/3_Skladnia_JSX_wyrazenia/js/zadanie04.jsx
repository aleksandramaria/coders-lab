import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    const a = Number(prompt('liczba a!'));
    const b = Number(prompt('liczba b!'));
    const sign = prompt('znak!');


    const calc = (num1, num2, operation) => {
        let result;

        if(operation === '+') {
            result = <h1> {a + b} </h1>
        } else if( operation === '-') {
            result = <h3> {a - b} </h3>
        } else if( operation === '*') {
            result = <h4> {a * b} </h4>
        } else if( operation === '/') {
            result = <h4> { a / b } </h4>
        }

        return result;
    }

    ReactDOM.render(
        <div> { calc(a, b, sign) } </div>,
        document.getElementById('app')
    );
});
