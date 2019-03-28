// import React from 'react';
// import ReactDOM from 'react-dom';
//
// document.addEventListener('DOMContentLoaded', function(){
//
//     class Bulb extends React.Component {
//         state = {
//             text: 'ON',
//             color: 'white',
//         }
//
//         handleClick = () => {
//             this.setState({
//                 text: 'OFF',
//             })
//         }
//
//         handleColor = () => {
//             this.setState({
//                 color: this.state.color ? 'yellow' : 'white',
//             })
//         }
//
//         render() {
//             return (
//                 <div onClick={ this.handleColor } style={{height: '100px', width: '100px', backgroundColor: this.state.color }}>
//                     <button onClick={ this.handleClick }> { this.state.text } </button>
//                 </div>
//             )
//         }
//     }
//
//     const App = () => <Bulb />
//
//     ReactDOM.render(
//         <App />,
//         document.getElementById('app')
//     );
// });

import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class Bulb extends React.Component {
        state = {
            on: false,
        }

        handleClick = () => {
            this.setState({
                on: !this.state.on,
            })
        }

        render() {
            const style = {
                width: '100px',
                height: '100px',
                background: this.state.on ? 'yellow' : 'white'
            }

            return (
                <div onClick={ this.handleClick } style={ style }>
                    <button>{ this.state.on ? 'Off' : 'On'}</button>
                </div>
            )
        }
    }

    const App = () => <Bulb />

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});