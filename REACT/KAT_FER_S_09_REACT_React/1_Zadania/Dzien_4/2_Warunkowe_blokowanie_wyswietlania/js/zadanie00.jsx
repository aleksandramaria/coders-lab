import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class SecretStuff extends React.Component {

        render() {
            if(this.props.pwd === this.props.correctPwd) {
                return (
                    <div> { this.props.secret } </div>
                )
            } else {
                return null;
            }

            return <div>super, udalo mi sie zaladowac dane!</div>
        }
    }

    const App = () => <SecretStuff pwd={'blaa'} correctPwd={'bla'} secret={'gggg'}/>

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});