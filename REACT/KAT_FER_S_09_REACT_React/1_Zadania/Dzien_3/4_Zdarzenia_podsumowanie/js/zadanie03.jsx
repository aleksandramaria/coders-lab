import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class CrazyDiv extends React.Component {
        state = {
            left: 0,
            top: 0,
        }

        handleMouseEnter = () => {
            this.setState({
                left: Math.floor(Math.random() * 1000),
                top: Math.floor(Math.random() * 1000),
            })
        }

        render() {
            const style = {
                width: '100px',
                height: '100px',
                background: 'red',
                position: 'absolute',
                left: this.state.left,
                top: this.state.top,
            }

            return (
                <div
                    onMouseEnter={ this.handleMouseEnter }
                    style={ style }>
                </div>
            )
        }
    }

    const App = () => <CrazyDiv />

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});