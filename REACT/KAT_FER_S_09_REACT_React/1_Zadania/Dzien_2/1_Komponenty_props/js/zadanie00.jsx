import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    const HelloFn = props => {
        return (
            <h1>Hello {props.name} {props.surname} </h1>
        )
    }

    class HelloCl extends React.Component {
        render() {
            return (
                <h1>Hello {this.props.name} {this.props.surname}</h1>
            )
        }
    }

    ReactDOM.render(
        <HelloFn name='Ola' surname='Ksiazek'/>,
        document.getElementById('app')
    );
});