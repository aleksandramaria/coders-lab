// import React from 'react';
// import ReactDOM from 'react-dom';
//
// import person from './zadanie06';
//
// document.addEventListener('DOMContentLoaded', function(){
//
//     ReactDOM.render(
//         <div>
//             <h1> { person.name } { person.surname } </h1>
//             <h2> { person.jobTitle } </h2> <hr />
//             <p> tel. { person.telNumber } </p>
//         </div>,
//         document.getElementById('app')
//     );
// });

import React from 'react';
import ReactDOM from 'react-dom';

import person from './zadanie06';

document.addEventListener('DOMContentLoaded', function(){
    const style = {
        textAlign: 'justify',
    }

    const persona = (
        <div style={ {style} }>
            <h1> { person.name } { person.surname } </h1>
            <h2> { person.jobTitle } </h2> <hr />
            <p> tel. { person.telNumber } </p>
        </div> );

    ReactDOM.render(
        <div> { persona } </div>,
        document.getElementById('app')
    );
});