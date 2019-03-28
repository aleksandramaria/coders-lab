import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class NumberRandomInfo extends React.Component {
        state = {
            random: 0,
        }

        componentDidMount() {
            this.id = setInterval( () => {

                this.setState({
                    rand: Math.ceil(Math.random() * 5 ),
                })
            })
        }

        render() {
            return (
                <div> { this.state.random }: { this.state.random > 3 ? 'wieksze' : 'mniejsze' }</div>
            )
        }

    }

    const App = () => <NumberRandomInfo />

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});