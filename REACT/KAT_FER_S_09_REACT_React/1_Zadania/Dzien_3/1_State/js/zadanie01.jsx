import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class TextTyper extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                counter: 0,
                text: 'W',
            }
        }

        render() {
            return <h1> {this.state.counter}s.: { this.state.text }</h1>
        }

        componentDidMount() {
            this.id = setInterval( () => {
                if(this.state.text.length === this.props.text.length - 1) {
                    clearInterval(this.id);
                }

                this.setState({
                    counter: this.state.counter + 1,
                    text: this.props.text.substr(0, this.state.counter + 2),
                })

            }, 1000);
        }

        componentWillUnmount() {
            clearInterval(this.id);
        }
    }

    const App = () => <TextTyper text={'Witaj!'}/>

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});