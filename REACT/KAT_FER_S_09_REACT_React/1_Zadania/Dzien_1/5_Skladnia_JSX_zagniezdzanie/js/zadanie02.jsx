import React from 'react';
import ReactDOM from 'react-dom';

import people from './zadanie00_02';

document.addEventListener('DOMContentLoaded', function(){
    const list = people.map( (person, index) =>
        <div className="person" key={index}><img src={person.avatar}/>
            <div className="info">
                <h1>{person.title} {person.surname}</h1>
                <p>{person.bio}</p>
            </div>
        </div>
    )

    ReactDOM.render(
        <div>{ list }</div>,
        document.getElementById('app')
    );
});