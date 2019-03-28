import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class InteractiveDiv extends React.Component {
        state = {
            width: 0,
        }

        handleChange = e => {
            this.setState({
                width: e.target.value,
            })
        }

        render() {

            const styleObj = {
                height: '100px',
                backgroundColor: 'red',
                width: `${Number(this.state.width)}px`
                // width: Number(this.state.width),
            }

            return (
                <div>
                    <input type='number' onChange={ this.handleChange } value={ this.state.width }/>
                    <div style={styleObj}></div>
                </div>
            )
        }
    }

    const App = () => <InteractiveDiv />

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});