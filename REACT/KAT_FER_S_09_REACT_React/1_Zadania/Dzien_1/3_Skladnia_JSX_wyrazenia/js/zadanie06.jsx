import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    const age = Number(prompt('how old are you?'));

    let result;
    if(age > 18) {
        result = <div id={'youth'}> {age} </div>
    } else {
        result = <div id={'adult'}> {age} </div>
    }

    ReactDOM.render(
        <div>{ result }</div>,
        document.getElementById('app')
    );
});