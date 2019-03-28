import React, {Component} from "react";
import ReactDOM from "react-dom";
import {HashRouter, Link, Route, Switch} from "react-router-dom";


class ServiceInfo extends Component {
    render() {
        const {service} = this.props.match.params;
        // if(service !== 'www' && service !== 'shop' && service !== 'seo') {
        //     return <h1>Nie znaleziono strony! wróć do <Link to="/">strony głównej</Link></h1>;
        // }
        if(['seo', 'www', 'shop'].indexOf(service) === -1){
            return <h1>Nie znaleziono strony! wróć do <Link to="/">strony głównej</Link></h1>;
        }
        return <h1>Proponujemy usługę: {service}</h1>;
    }
}

class Main extends Component {
    render() {
        return <h1>Services</h1>;
    }
}

class NotFound extends React.Component {
    render() {
        return <h1>Nie znaleziono strony! wróć do <Link to="/">strony głównej</Link></h1>
    }
}

const App = () => (
    <HashRouter>
        <div>
            <menu>
                <Link to="/">Strona główna</Link>
                <Link to="/services/www">services www</Link>
                <Link to="/services/shop">services shop</Link>
                <Link to="/services/seo">services seo</Link>
            </menu>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/services/:service" component={ServiceInfo}/>
                <Route path='' component={NotFound} />
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