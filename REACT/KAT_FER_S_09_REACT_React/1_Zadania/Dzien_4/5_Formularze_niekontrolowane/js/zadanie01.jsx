
import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){


    class Sum extends React.Component {
        state = {
            arr: [],
        }

        handleClick = ()=> {

            const number = Number(this.input.value);
            this.input.value = '';

            const newArr = this.state.arr.slice();
            newArr.push(number);

            this.setState({
                arr: newArr,

            })
        }

        render() {
            const list = this.state.arr.map( (el, index) => <li key={index}> {el} </li>);
            const sum = this.state.arr.reduce((prev, next) => {
                return prev + next;
            }, 0)

            return (
                <div>
                    <h1> { sum } </h1>
                    <input type={'number'} ref={ el => this.input = el } />
                    <button onClick={ this.handleClick }>ok</button>
                    <ul>
                        { list }
                    </ul>
                </div>
            )
        }
    }

    const App =()=> <Sum />;

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});





