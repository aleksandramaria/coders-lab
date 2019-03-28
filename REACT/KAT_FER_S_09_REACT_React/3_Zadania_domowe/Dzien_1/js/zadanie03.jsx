import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    const colors = ['red', 'black', 'white', 'yellow', 'green'];

    ReactDOM.render(
        <div> { colors.join(', ' ) } </div>,
        document.getElementById('app')
    );
});




