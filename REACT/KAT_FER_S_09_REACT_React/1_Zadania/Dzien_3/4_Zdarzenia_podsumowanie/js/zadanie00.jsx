import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class Box extends React.Component {
        state = {
            text: 'Klik!',
            width: '',
        }

        handleClick1 = () => {
            console.log('Pierwszy przycisk klikniety!');
        }

        handleClick2 = () => {
            this.setState({
                text: 'click!',
            })
        }

        handleClick3 = () => {
            this.setState({
                width: '300px',
            })
        }

        render() {
            return (
                <div>
                    <button onClick={ this.handleClick1 }>{ this.state.text }</button>
                    <button onClick={ this.handleClick2 }>{ this.state.text }</button>
                    <button style={ {width: this.state.width } } onClick={ this.handleClick3 }>{ this.state.text }</button>
                </div>
            )
        }
    }

    const App = () => <Box />

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});