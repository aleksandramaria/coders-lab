import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class GivePassword extends React.Component {
        state = {
            login: false,
        }

        handleClick = () => {
            console.log('klik', this.pwd.value);

            if(this.props.pwd === this.pwd.value) {
                this.setState({
                    login: true,
                })
            }
        }

        render() {
            if(this.state.login) {
                return <p>I'm in</p>
            }
            return (
                <div>
                    <input ref={ el => this.pwd = el } />
                    <button onClick={ this.handleClick}>ok</button>
                </div>
            )
        }
    }

    const App = () => <GivePassword pwd={'123'}/>

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});