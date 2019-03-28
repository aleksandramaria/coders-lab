import React from 'react';
import ReactDOM from 'react-dom';


document.addEventListener('DOMContentLoaded', function(){

    class LifeCyclesTester extends React.Component {
        constructor(props) {
            super(props);

            console.log('konstructor');
        }

        componentDidMount() {
            console.log('componentDidMount');
        }

        componentWillUnmount() {
            console.log('compoenntWillUnmount');
        }

        render() {
            console.log('render');
            return <p>dsadsadsa</p>
        }
    }

    const App = () => <LifeCyclesTester/>

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});