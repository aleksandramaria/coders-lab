import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class TraficLights extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                lightNo: 1,
            }
        }

        componentDidMount() {
            this.id1 = setInterval(() => {
                this.setState({
                    color: 'red',
                });
            }, this.props.redTime);
            this.id1 = setInterval(() => {
                this.setState({
                    color: 'yellow',
                });
            }, this.props.yellowTime);
            this.id1 = setInterval(() => {
                this.setState({
                    color: 'green',
                });
            }, this.props.greenTime);
        }

        componentWillUnmount() {
            clearInterval(this.id1);
        }

        render() {
            const stylesObj = {
                height: '100px',
                width: '100px',
                borderRadius: '50%',
            };


            return (
                <div>
                    <div style={{height: '100px', width: '100px', borderRadius: '50%', backgroundColor: 'red'}}></div>
                    <div style={{height: '100px', width: '100px', borderRadius: '50%', backgroundColor: 'yellow'}}></div>
                    <div style={{height: '100px', width: '100px', borderRadius: '50%', backgroundColor: 'green'}}></div>
                </div>

        //         <div>
        //         <div style={ stylesObj } style={{height: '100px',
        //         width: '100px',
        //         borderRadius: '50%', backgroundColor: 'red'}}></div>
        //     <div style={ stylesObj } style={{backgroundColor: 'yellow'}}></div>
        //     <div style={ stylesObj } style={{backgroundColor: 'green'}}></div>
        // </div>
            )
        }

    }

    const App = () => <TraficLights redTime={'2000ms'} yellowTime={'1000ms'} greenTime={'3000ms'}/>

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});