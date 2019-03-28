import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){


    // moja wersja!!

    class MrDiv extends React.Component {
        state = {
            on: false,
            height: '',
        }

        handleMouseEnter = () => {
            this.setState({
                on: !this.state.on,
            })
        }

        handleMouseLeave = () => {
            this.setState({
                on: !this.state.on,
            })
        }

        render() {
            const style = {
                width: '500px',
                height: this.state.on ? '400px' : '200px',
                background: this.state.on ? 'blue' : 'green'
            }

            return (
                <div
                    onMouseEnter={ this.handleMouseEnter }
                    onMouseLeave={ this.handleMouseLeave }
                    style={ style }>
                </div>
            )
        }
    }

    const App = () => <MrDiv />

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});

// wersja mateusza!!!!

// import React from 'react';
// import ReactDOM from 'react-dom';
//
// document.addEventListener('DOMContentLoaded', function(){
//
//     class Div extends React.Component {
//         state = {
//             hover: false,
//         }
//
//         handleMouseEnter = () => {
//             console.log('handleMouseEnter');
//             this.setState({
//                 hover: true,
//             })
//         }
//
//         handleMouseLeave = () => {
//             this.setState({
//                 hover: false,
//             })
//         }
//
//         render() {
//             const style = {
//                 background: this.state.hover ? 'blue' : 'green',
//                 width: '500px',
//                 height: this.state.hover ? '400px' : '200px',
//             }
//
//             return <div onMouseLeave={ this.handleMouseLeave } onMouseEnter={ this.handleMouseEnter } style={ style }></div>
//         }
//     }
//
//     const App = () => <Div />
//
//     ReactDOM.render(
//         <App />,
//         document.getElementById('app')
//     );
// });