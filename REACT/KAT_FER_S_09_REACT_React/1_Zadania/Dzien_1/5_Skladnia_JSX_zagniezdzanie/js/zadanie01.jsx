import React from 'react';
import ReactDOM from 'react-dom';

import person from './zadanie01';

document.addEventListener('DOMContentLoaded', function(){
    // ReactDOM.render(
    //     <div>
    //         <h1>{ person.title } { person.name } { person.surname }</h1>
    //         <span>{ person.age }</span>
    //     </div>,
    //     document.getElementById('app')
    // );

    const kowalski = <div><h1>{ person.title } { person.name } { person.surname }</h1><span>{ person.age }</span></div>

    ReactDOM.render(
        <div>{ kowalski }</div>,
        document.getElementById('app')
    );

});