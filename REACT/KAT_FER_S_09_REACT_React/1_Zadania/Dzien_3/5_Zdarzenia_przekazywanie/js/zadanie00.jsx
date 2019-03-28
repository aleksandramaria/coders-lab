import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class ButtonToClick extends React.Component {

        handleClick = () => {
            // console.log('click');
            if(typeof this.props.onClick === 'function') {
                this.props.onClick();
            }
        }

        render() {
            return (
                <button onClick={ this.handleClick }>click me!</button>
            )
        }
    }

    class ButtonCounter extends React.Component {
        state = {
            counter: 0,
        }

        handleBtnClick = () => {
            this.setState({
                counter: this.state.counter +1,
            })
        }

        render() {
            return (
                <div>
                    <h1>{ this.state.counter }</h1>
                    <ButtonToClick onClick={ this.handleBtnClick } />
                    <ButtonToClick onClick={ this.handleBtnClick } />
                </div>
            )
        }
    }

    const App = () => <ButtonCounter />

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});