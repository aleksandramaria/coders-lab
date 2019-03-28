import React, {Component} from "react";
import ReactDOM from "react-dom";
import {HashRouter, Link, NavLink, Route, Switch} from "react-router-dom";

class CheckAge extends Component {
    render() {
        const {age} = this.props.match.params;
        return <h1>
            {age >= 18 ? 'Pełniletni' : 'Niepełnoletni'}
        </h1>
    }
}

class HelloYou extends Component {
    render() {
        const {name} = this.props.match.params;
        return <h1>Witaj, {name}</h1>;
    }
}

class Main extends Component {
    render() {
        return <h1>Cześć.</h1>;
    }
}

const activeLinkStyle = {
    fontWeight: 'bold',
    border: '1px solid green',
};

const App = () => (
    <HashRouter>
        <div>
            <menu>
                <NavLink exact activeStyle={activeLinkStyle} to="/">Strona główna</NavLink>
                <NavLink activeStyle={activeLinkStyle} to="/hello/Jan">Powitanie Jana</NavLink>
                <NavLink activeStyle={activeLinkStyle} to="/checkage/50">Sprawdź wiek 50</NavLink>
            </menu>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/hello/:name" component={HelloYou}/>
                <Route path="/checkage/:age" component={CheckAge}/>
            </Switch>
        </div>
    </HashRouter>
);

document.addEventListener('DOMContentLoaded', () => {

    ReactDOM.render(
        <App/>,
        document.querySelector('#app')
    );

});