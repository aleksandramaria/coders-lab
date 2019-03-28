import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    // FUNKCYJNIE
    function UpperCaseText(props){
        return <div>
            {props.text.toUpperCase()}
        </div>
    }

    function App(props){
        return <div>
            <UpperCaseText text="Ala ma kota!" />
        </div>;
    }


    // KLASAMI

    class UpperCaseTextCl extends React.Component {
        render() {
            return (
                <div>
                    {this.props.text.toUpperCase()}
                </div>
            )
        }
    }

    class AppCl extends React.Component {
        render() {
            return (
                <div>
                    <UpperCaseTextCl text="Ala ma kota!" />
                </div>
            )

        }
    }

    ReactDOM.render(
        <AppCl/>,
        document.getElementById('app')
    );
});