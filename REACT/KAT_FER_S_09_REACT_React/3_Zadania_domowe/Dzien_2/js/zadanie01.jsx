import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function() {
    class BgSetter extends React.Component {
        constructor(props) {
            super(props);
            this.state = {color: 'green'};
        }

        componentDidMount() {
            this.timeoutId = setTimeout(() => {
                this.setState({
                    color: 'red',
                });
            }, 5000);
        }

        componentWillUnmount() {
            clearInterval(this.timeoutlId);
        }


        render() {
            const stylesObj = {
                background: this.state.color
            };

            return <div style={ stylesObj }>blaaa</div>;
        }
    }

    const App = () => <BgSetter />

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});

