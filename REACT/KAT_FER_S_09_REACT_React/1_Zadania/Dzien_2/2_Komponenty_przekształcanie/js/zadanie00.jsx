import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    function AddNumbers1(props){
        const sum = props.numberA + props.numberB;
        return  <div>
                    {sum}
                </div>
    }

    class AddNumbers extends React.Component {
        render() {
            const sum = this.props.numberA + this.props.numberB;
            return (
                <div>
                    {sum}
                </div>
            )
        }
    }

    function App(props){
        return <div>
            <AddNumbers numberA={2} numberB={3} />
        </div>;
    }

    class App1 extends React.Component {
        render() {
            return  (
                <div>
                    <AddNumbers numberA={9} numberB={3} />
                </div>
            )

        }
    }

    ReactDOM.render(
        <App1/>,
        document.getElementById('app')
    );
});