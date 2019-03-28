import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    const AddNumbers = props => {
        return (
            <h1>{ Number(props.numberA) + Number(props.numberB)}</h1>
        )
    }

    class AddNumbers1 extends React.Component {
        render() {
            return (
                <h1>{Number(this.props.numberA) + Number(this.props.numberB)}</h1>
            )
        }
    }

    ReactDOM.render(
        <div>
            <AddNumbers numberA="3" numberB="4" />
            <AddNumbers1 numberA="33" numberB="5" />
        </div>,
        document.getElementById('app')
    );
});