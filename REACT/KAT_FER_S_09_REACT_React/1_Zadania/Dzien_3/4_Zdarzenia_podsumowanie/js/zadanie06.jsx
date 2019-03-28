import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class MathQuestionGame extends React.Component {
        state = {

        }

        render() {
            return (
                <div>

                </div>
            )
        }


    }

    const App = () => <MathQuestionGame />

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});