import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class App extends React.Component {

        handleClick = e => {
            console.log( this.props.click );
        }
        handleMouseEnter = e => {
            console.log( this.props.enter );
        }
        handleMouseLeave = e => {
            console.log( this.props.out );
        }

        render() {
            return <div onClick={ this.handleClick } onMouseEnter={ this.handleMouseEnter } onMouseLeave={ this.handleMouseLeave }> blaaa </div>
        }
    }

    ReactDOM.render(
        <App click={'click'} enter={'enter'} out={'out'}/>,
        document.getElementById('app')
    );
});