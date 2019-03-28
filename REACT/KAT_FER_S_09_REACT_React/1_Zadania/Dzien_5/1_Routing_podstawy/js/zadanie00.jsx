import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

class Main extends React.Component {
    render() {
        return <h1>Hello, World! 2222</h1>;
    }
}

class ContactSupport extends React.Component {
    render() {
        return <div>Support</div>
    }
}

class ContactOffice extends React.Component {
    render() {
        return <div>office</div>
    }
}
class Contact extends React.Component {
    render() {
        return <div>
            <h2>Kontakt</h2>

            <Route path='/contact/support' component={ContactSupport} />
            <Route path='/contact/office' component={ContactOffice} />
        </div>
    }
}

class Navigation extends React.Component {
    render() {
        return <div>
            <h1>App</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact/office">Contact -> office</Link>
                </li>
                <li>
                    <Link to="/contact/support">Contact -> support</Link>
                </li>
            </ul>
        </div>;
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
            <Navigation />
            <Switch>
                <Route exact path='/' component={Main} />
                <Route path='/contact' component={Contact} />
                <Route path='*' component={NotFound} />
            </Switch>
        </div>
    </HashRouter>
)

document.addEventListener('DOMContentLoaded', function(){


    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});