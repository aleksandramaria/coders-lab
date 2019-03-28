import React from 'react';
import ReactDOM from 'react-dom';

class BulbOn extends React.Component{
    handleClick = () => {
        if(typeof this.props.onClick === 'function') {
            this.props.onClick();
        }
    }

    render(){
        return <strong>
            Żarówka świeci
            <button
                onClick={this.handleClick}>
                Wyłącz
            </button>
        </strong>
    }
}

class BulbOff extends React.Component{
    handleClick = () => {
        if(typeof this.props.onClick === 'function') {
            this.props.onClick();
        }
    }

    render(){
        return <em>
            Żarówka zgaszona
            <button
                onClick={this.handleClick}>
                Włącz
            </button>
        </em>
    }
}

class Bulb extends React.Component {
    constructor(props){
        super(props);

        this.state = {bulbOn:false};
    }
    handleTurnOffClick = () => {
        this.setState({bulbOn:false});
    }
    handleTurnOnClick = () => {
        this.setState({bulbOn:true});
    }
    render() {
        let bulb;
        if (this.state.bulbOn){
            bulb = <BulbOn
                onClick={this.handleTurnOffClick}
            />
        } else {
            bulb = <BulbOff
                onClick={this.handleTurnOnClick}
            />
        }

        return <div>
            <h1>Żarówka</h1>
            { bulb }
        </div>;
    }
}

ReactDOM.render(
    <Bulb />,
    document.getElementById('app')
);


class BulbOn extends React.Component{
    render(){
        return <strong>
            Żarówka świeci
            <button
                onClick={this.props.onClick}>
                Wyłącz
            </button>
        </strong>
    }
}

class BulbOff extends React.Component{
    render(){
        return <em>
            Żarówka zgaszona
            <button
                onClick={this.props.onClick}>
                Włącz
            </button>
        </em>
    }
}

class Bulb extends React.Component {
    constructor(props){
        super(props);

        this.state = {bulbOn:false};
    }
    handleTurnOffClick = () => {
        this.setState({bulbOn:false});
    }
    handleTurnOnClick = () => {
        this.setState({bulbOn:true});
    }
    render() {
        let bulb;
        if (this.state.bulbOn){
            bulb = <BulbOn
                onClick={this.handleTurnOffClick}
            />
        } else {
            bulb = <BulbOff
                onClick={this.handleTurnOnClick}
            />
        }

        return <div>
            <h1>Żarówka</h1>
            { bulb }
        </div>;
    }
}

ReactDOM.render(
    <Bulb />,
    document.getElementById('app')
);