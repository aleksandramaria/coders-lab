import React from 'react';
import ReactDOM from 'react-dom';


//Nie zmieniaj tego kodu poniżej!
document.addEventListener('DOMContentLoaded', function(){
    class Surprise extends React.Component {
        state = {
            text: this.props.text,
        }

        componentDidMount() {
            this.id = setTimeout( () => {
                this.setState({
                    text: 'Surprise',
                })
            }, 5000);
        }

        componentWillUnmount() {
            clearTimeout(this.id);
        }

        render() {
            return <h1> { this.state.text }  </h1>
        }
    }

    const App = () => <Surprise text={ 'Wait for it...' }/>

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
