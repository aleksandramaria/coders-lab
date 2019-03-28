import React from 'react';
import ReactDOM from 'react-dom';

import people from './zadanie00';

document.addEventListener('DOMContentLoaded', function(){

    class PeopleList extends React.Component {
        render() {

            const list = this.props.peopleList.map(person => <li key={person.pesel}>{person.name}</li>)
            return <ul>{list}</ul>
        }
    }

    const App = () => <PeopleList peopleList={people}/>

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});