import React from 'react';
import ReactDOM from 'react-dom';
import person from './zadanie02';

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <div>{ person.title } {person.name} {person.surname} {person.age} {person.height} </div>,
        document.getElementById('app')
    );
});