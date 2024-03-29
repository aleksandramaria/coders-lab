import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class ClockTime extends React.Component {
        render() {
            return <h1>{ this.props.date.toLocaleTimeString() }</h1>
        }
    }

    class ClockDate extends React.Component {
        render() {
            return <h1>{ this.props.date.toLocaleDateString() }</h1>
        }
    }

    class Clock extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                date: new Date(),
            }
        }

        render() {
            return (
                <div>
                    <ClockTime date={ this.state.date } />
                    <ClockDate date={ this.state.date } />
                </div>
            )
        }

        componentDidMount() {
            this.id = setInterval( () => {
                this.setState({
                    date: new Date(),
                })
            }, 1000);
        }

        componentWillUnmount() {
            clearInterval( this.id );
        }
    }

    ReactDOM.render(
        <Clock />,
        document.getElementById('app')
    );
});