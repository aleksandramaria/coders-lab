import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class TextTyper extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                counter: 0,
            }
        }

        render() {
            let text;
            if(this.props.reversed) {
                text = this.props.text.substr(0, this.props.text.length - (this.state.counter))
            } else {
            text = this.props.text.substr(0, this.state.counter +1);
            }
            return <h1>{ this.state.counter }s.: { text }</h1>
        }


        componentDidMount() {
            this.id = setInterval( () => {

                this.setState({
                    counter: this.state.counter + 1,
                }, () => {
                    const len = this.props.reversed ? this.props.text.length : this.props.text.length -1;
                    if(this.state.counter === len) {
                        clearInterval( this.id );
                    }
                });
            }, 1000);
        }

        componentWillUnmount() {
            clearInterval(this.id);
        }
    }

    const App1 = () => <TextTyper text={'Witaj!'} reversed={true}/>
    const App = () => <TextTyper text={'Witaj!'} reversed={false}/>

    ReactDOM.render(
        <div>
            <App />
            <App1 />
        </div>,
        document.getElementById('app')
    );
});