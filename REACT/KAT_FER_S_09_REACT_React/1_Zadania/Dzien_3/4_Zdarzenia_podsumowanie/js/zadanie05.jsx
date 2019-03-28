import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class SpeedClickGame extends React.Component {
        state = {
            points: 0,
            time: this.props.time,
        }


        handleClick = () => {
            const points = this.state.points + 1;
            this.setState({
                points: points,
                time: this.props.time - (points * 50),
            })
        }


        componentDidMount() {
            this.id = setInterval( () => {
                if(this.state.time === 50) {
                    clearInterval(this.id)
                }
                this.setState( {
                    time: this.state.time - 50,
                })
            }, 50)
        }

        componentWillUnmount() {
            clearInterval(this.id);
        }

        render() {
            return (
                <div>
                    <button disabled={this.state.time <= 0 ? true : false} onClick={ this.handleClick }>Click me!</button>
                    <h1> { this.state.time } </h1>
                    <h2> { this.state.points } </h2>
                </div>
            )
        }

    }

    const App = () => <SpeedClickGame time={2000}/>

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});