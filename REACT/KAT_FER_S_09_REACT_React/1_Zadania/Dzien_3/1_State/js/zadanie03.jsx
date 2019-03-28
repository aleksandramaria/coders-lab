import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class StrobeLight extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                color: this.props.color,
            }
        }

        render() {
            const stylesObj = {
                height: '50px',
                width: '500px',
                background: this.state.color,
            };

            return <div style={ stylesObj }></div>;
        }

        componentDidMount() {
            this.id = setInterval(() => {
                this.setState({
                    color: this.state.color === 'white' ? this.props.color : 'white',
                });
            }, this.props.frequency);
        }

        componentWillUnmount() {
            clearInterval(this.id);
        }
    }

    const App = () => (
        <div>
            <StrobeLight color="blue" frequency={ 250 } />
            <StrobeLight color="green" frequency={ 50 } />
            <StrobeLight color="red" frequency={ 150 } />
        </div>
    )

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});