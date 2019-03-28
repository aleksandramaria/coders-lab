import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class Button extends React.Component {
        render() {
            return (
                <button> { this.props.text } </button>
            )
        }
    }

    class Message extends React.Component {
        render() {
            return (
                <div>
                    <Button text={'tak'}/>
                    <Button text={'nie'}/>
                    <p> { this.props.messageText } </p>
                </div>
            )
        }
    }

    class App extends React.Component{
        render(){
            return <div>
                <Message messageText={'message bla bla 1'} />
                <Message messageText={'tylko bla bla 222'} />
                <Button text={'zaloguj'} />
                <Button text={'zarejestruj'} />
            </div>;
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});