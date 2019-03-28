import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class MyCheckbox extends React.Component {
        state = {
            toggle: false,
        }
        handleClick = () => {
            this.setState({
                toggle: !this.state.toggle,
            })
        }
        render() {
            return <button onClick={this.handleClick }>{ this.state.toggle ? 'TAK' : 'NIE' }</button>
        }
    }

    const App = () => <MyCheckbox />

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});