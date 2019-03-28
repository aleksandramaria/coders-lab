import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class AddTwoNumbers extends React.Component {
        state = {
            num1: 0,
            num2: 0,
        }

        handleChange1 = e => {
            this.setState({
                num1: e.target.value,
            })
        }

        handleChange2 = e => {
            this.setState({
                num2: e.target.value,
            })
        }

        render() {

            const num1 = Number(this.state.num1);
            const num2 = Number(this.state.num2);

            let result;
            if(Number.isNaN(num1) || Number.isNaN(num2)) {
                result = 'Podaj liczby!';
            } else {
                result = num1 + num2;
            }

            return (
                <div>
                    <input onChange={ this.handleChange1 } value={ this.state.num1 }/>
                    <input onChange={ this.handleChange2 } value={ this.state.num2 }/>
                    <h1>{ result }</h1>
                </div>
            )
        }
    }

    const App = () => <AddTwoNumbers />

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});