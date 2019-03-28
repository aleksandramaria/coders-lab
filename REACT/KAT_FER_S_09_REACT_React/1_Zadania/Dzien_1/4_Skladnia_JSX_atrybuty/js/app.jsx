import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    const imageUrl = 'http://www.nice.com/PublishingImages/Career%20images/J---HR_Page-4st-strip-green-hair%20(2).png';

    ReactDOM.render(
        <img src={imageUrl} />,
        document.getElementById('app')
    );


    const colors = ['red', 'green', 'blue'];
    const userColor = prompt('Podaj swoj kolor');

    let div;
    if( colors.indexOf(userColor) === -1) {
        div = <div>Nieprawidlowy kolor!</div>
    } else {
        const style = {
            height: '100px',
            width: '100px',
            border: '1px ' + 'solid ' + userColor,
            // border: `1px solid ${userColor}`,
        }

        div = <div style={ style }>Prawidlowy kolor</div>
    }

    ReactDOM.render(
        div,
        document.getElementById('app')
    );
});