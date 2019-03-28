import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class PropsToState extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                text: this.props.text,
            }
        }

        tick() {
            this.setState(prevState => ({
                text: prevState.text + '.'
            }));
        }

        componentDidMount() {
            this.id = setInterval(() => this.tick(), 1000);
        }

        componentWillUnmount() {
            clearInterval(this.id);
        }


        render() {
            return <ShowInfo info={ this.state.text }/>;
        }

    }

    class ShowInfo extends React.Component {
        render() {
            return (
            <h1> { this.props.info } </h1>
            )
        }
    }

    const App = () =>  <PropsToState text={'jestem tekstem'}/>

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});