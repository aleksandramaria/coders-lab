import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class RandomNumbers extends React.Component {
        render() {
            return (
                <div>
                    <RandomNumbersInfo min={this.props.min} max={this.props.max} count={this.props.count}/>
                    <RandomNumbersList min={this.props.min} max={this.props.max} count={this.props.count}/>
                </div>
            )
        }
    }

    class RandomNumbersInfo extends React.Component {
        render() {
            return (
                <div>
                    <p>Min value: {this.props.min}</p>
                    <p>Max value: {this.props.max}</p>
                    <p>Number of randomly picked numbers: {this.props.count}</p>
                </div>
            )
        }
    }

    class RandomNumbersList extends React.Component {
        render() {
            const array=[];

            for(let i=0; i<this.props.count; i++)
            {
                let random = Math.floor(Math.random() * (this.props.max - this.props.min) + this.props.min);
                array.push(random);
            }

            return (
                <p>Drawn numbers: { array.join(', ') } </p>
            )
        }
    }

    const App = () => (
        <RandomNumbers max={10} min={1} count={4} />
    )

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    )
});



