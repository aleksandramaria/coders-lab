import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class AnotherColor extends React.Component {
        state = {
            color: 'yellow',
        }

        componentDidMount() {
            console.log('did mount');
            this.id = setTimeout(() => {
                this.setState({
                    color: 'blue',
                })
            }, 5000);
        }


        componentWillUnmount() {
            console.log('will unmount');
            clearTimeout(this.id);
        }

        render() {
            console.log('render');
            return (
                <div style={{background: this.state.color, height: '200px'}}>
                </div>
            );
        }
    }

    const App = () => <AnotherColor />

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});