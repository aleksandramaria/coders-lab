import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    //Nie modyfikuj kodu powyżej
    const styleRed = {
        height: '100px',
        backgroundColor: 'red',
    }
    const styleGreen = {
        height: '100px',
        backgroundColor: 'green',
    }
    const styleBlue = {
        height: '100px',
        backgroundColor: 'blue',
    }

    const redDiv = <div style={ styleRed }></div>;
    const greenDiv = <div style={ styleGreen }></div>;
    const blueDiv = <div style={ styleBlue }></div>;

    //Nie modyfikuj kodu poniżej
    ReactDOM.render(
        <div>
            {redDiv}{greenDiv}{blueDiv}
        </div>,
        document.getElementById('app')
    );
});