import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class App extends React.Component {
        state = {
            napis: this.props.text,
        }

        handleClick = e => {
            // console.log( this.props.text );
            console.log('dziala!')
        }

        render() {
            return <button onClick={ this.handleClick }> {this.state.napis} </button>
        }
    }


    ReactDOM.render(
        <App text="super props!"/>,
        /*<App />,*/
        document.getElementById('app')
    );
});