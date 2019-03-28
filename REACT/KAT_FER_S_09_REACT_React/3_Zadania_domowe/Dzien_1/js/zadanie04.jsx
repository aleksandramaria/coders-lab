import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    const color = 'yellow';

    ReactDOM.render(
        <div style={{color: 'yellow'}}> {color} </div>,
        document.getElementById('app')
    );
});