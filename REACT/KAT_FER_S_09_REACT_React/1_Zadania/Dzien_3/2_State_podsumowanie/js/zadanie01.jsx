import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class ClockTimeHour extends React.Component {
        render() {
            return <span> { this.props.hour.getHours() } </span>
        }
    }
    class ClockTimeMinute extends React.Component {
        render() {
            return <span> { this.props.date.getMinutes() } </span>
        }
    }
    class ClockTimeSecond extends React.Component {
        render() {
            return <span> { this.props.date.getSeconds() } </span>
        }
    }

    class ClockTime extends React.Component {
        render() {
            return (
                <div>
                    <ClockTimeHour hour={ this.props.date} />
                    <ClockTimeMinute date={ this.props.date }/>
                    <ClockTimeSecond date={ this.props.date }/>
                </div>
            )
        }
    }

    class ClockDateYear extends React.Component {
        render() {
            return <span> { this.props.date.getFullYear() } </span>
        }
    }
    class ClockDateMonth extends React.Component {
        render() {
            return <span> { this.props.date.getMonth() } </span>
        }
    }
    class ClockDateDay extends React.Component {
        render() {
            return <span> { this.props.date.getDate() }</span>
        }
    }

    class ClockDate extends React.Component {
        render() {
            return (
                <div>
                    <ClockDateYear date={ this.props.date }/>
                    <ClockDateMonth date={ this.props.date }/>
                    <ClockDateDay date={ this.props.date }/>
                </div>
            )
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