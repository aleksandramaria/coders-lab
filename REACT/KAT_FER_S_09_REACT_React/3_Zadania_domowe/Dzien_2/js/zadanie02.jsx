import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    const person = {
        name        : 'Anna Kowalska',
        jobTitle    : 'CEO',
        telNumber   : '123-123-456',
        email       : 'blabla@gmail.com'
    };

    class CardGenerator extends React.Component {
        render() {
            return (
                <div>
                    <CardName person={ this.props.name }/>
                    <CardJobTitle person={ this.props.jobTitle }/>
                    <CardTelNumber person={ this.props.telNumber }/>
                    <CardEmail person={ this.props.email }/>
                </div>
            )
        }
    }

    class CardName extends React.Component {
        render() {
            return (
                <p> { person.name } </p>
            )
        }
    }

    class CardJobTitle extends React.Component {
        render() {
            return (
                <p> { person.jobTitle } </p>
            )
        }
    }

    class CardTelNumber extends React.Component {
        render() {
            return (
                <p><a href={ person.telNumber }> { person.telNumber } </a></p>
            )
        }
    }

    class CardEmail extends React.Component {
        render() {
            return (
                <p><a href={ person.email }> { person.email } </a></p>
            )
        }
    }

    // const App = () => (
    //     <CardGenerator details={ person }/>
    // )

    class App extends React.Component{
        render(){
            return <CardGenerator details={ person }/>
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    )
});