// import React from 'react';
// import ReactDOM from 'react-dom';
//
// import poeple from './zadanie00_02';
//
// document.addEventListener('DOMContentLoaded', function(){
//
//     const list = people.map( person => <div> {person.name} {person.surname} </div>)
//
//     ReactDOM.render(
//         <div>list</div>,
//         document.getElementById('app')
//     );
// });

import React from 'react';
import ReactDOM from 'react-dom';

import people from './zadanie00_02';

document.addEventListener('DOMContentLoaded', function(){

    const list = people.map( person => <li>{person.name} {person.surname}</li>)

    ReactDOM.render(
        <ul>{ list }</ul>,
        document.getElementById('app')
    );
});