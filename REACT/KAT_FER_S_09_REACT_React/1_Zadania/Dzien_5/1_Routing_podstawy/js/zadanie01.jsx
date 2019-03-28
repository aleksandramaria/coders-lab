import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


// ZADANIE Z WYKLADOWCA!!!

class Main extends React.Component {
    render() {
        return (
            <h1>Witaj na stronie!</h1>
        )
    }
}

class About extends React.Component {
    render() {
        return (
            <div>
                <h2>O nas</h2>
                <Route path='/about/us' component={AboutUs} />
                <Route path='/about/company' component={AboutCompany} />
            </div>

        )
    }
}

class AboutUs extends React.Component {
    render() {
        return (
            <p>Troche wiecej o nas</p>
        )
    }
}

class AboutCompany extends React.Component {
    render() {
        return (
            <p>Troche wiecej na temat naszej firmy</p>
        )
    }
}

const App = () => (
    <HashRouter>
        <div>
            <Switch>
                <Route exact path='/' component={Main} />
                <Route path='/about' component={About} />
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