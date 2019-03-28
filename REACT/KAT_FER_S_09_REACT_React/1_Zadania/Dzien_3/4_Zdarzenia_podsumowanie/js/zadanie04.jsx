import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class MobileMenu extends React.Component {
        state = {
            hidden: false,
        }

        handleClick = () => {
            this.setState({
                hidden: !this.state.hidden,
            })
        }

        render() {
            return (
            <menu>
                <div hidden={ this.state.hidden } onClick={ this.handleClick } >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg" alt="Otwórz menu" />
                </div>
                <div hidden = {!this.state.hidden} >
                    <ul>
                        <li>Menu 1...</li>
                        <li>Menu 2...</li>
                        <li>Menu 3...</li>
                        <li>Menu 4...</li>
                    </ul>
                    <div onClick={ this.handleClick } hidden = {!this.state.hidden} >Schowaj menu</div>
                </div>
            </menu>
                )
        }

        componentDidMount() {
        }

        componentWillUnmount() {
        }
    }

    const App = () => <MobileMenu />

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});