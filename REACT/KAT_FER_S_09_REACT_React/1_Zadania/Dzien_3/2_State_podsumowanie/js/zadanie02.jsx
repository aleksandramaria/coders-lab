// import React from 'react';
// import ReactDOM from 'react-dom';
//
// document.addEventListener('DOMContentLoaded', function(){
//
//     class StrobeLight extends React.Component {
//         constructor(props) {
//             super(props);
//
//             this.state = {
//                 color: true,
//             }
//         }
//
//         render() {
//             const stylesObj = {
//                 height: '50px',
//                 width: '500px',
//                 background: this.state.color,
//             };
//
//             return <div style={ stylesObj }></div>;
//         }
//
//         componentDidMount() {
//             this.id = setInterval(() => {
//                 this.setState({
//                     color: this.state.color === 'white' ? this.props.color : 'white',
//                 });
//             }, this.props.frequency);
//         }
//
//         componentWillUnmount() {
//             clearInterval(this.id);
//         }
//     }
//
//     class StrobeControl extends React.Component {
//         constructor(props) {
//             super(props);
//
//             this.state = {
//                 onOff: true,
//             }
//         }
//
//         componentDidMount() {
//             this.id = setTimeout(() => {
//                 this.setState({
//                     onOff: false,
//                 });
//             }, 5000);
//         }
//
//         componentWillUnmount() {
//             clearInterval(this.id);
//         }
//
//         render() {
//             return (
//                 <div>
//                     <StrobeLight color="blue" frequency={ 250 } onOff={true} />
//                     <StrobeLight color="green" frequency={ 50 } onOff={true} />
//                     <StrobeLight color="red" frequency={ 150 } onOff={true} />
//                 </div>
//             )
//         }
//     }
//
//     const App = () => <StrobeControl onOff={ this.state.onOff }/>
//
//
//     ReactDOM.render(
//         <App />,
//         document.getElementById('app')
//     );
// });


import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class StrobeLight extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                color: true,
            }
        }

        render() {

            const style = {

                height: '100px',
                background: this.state.color ? this.props.color : 'white',
            }

            return <div style={ style }></div>
        }

        componentDidMount() {

            this.id = setInterval( () => {

                if(this.props.onOff) {
                    this.setState({
                        color: !this.state.color,
                    })
                }

            }, this.props.frequency);
        }
    }

    class StrobeControl extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                onOff: true,
            }
        }

        render() {
            return (
                <div>
                    <StrobeLight onOff={this.state.onOff} color="blue" frequency={ 250 } />
                    <StrobeLight onOff={this.state.onOff} color="green" frequency={ 50 } />
                    <StrobeLight onOff={this.state.onOff} color="red" frequency={ 250 } />
                </div>
            )
        }

        componentDidMount() {
            this.id = setTimeout( () => {
                this.setState({
                    onOff: false,
                })
            }, 5000);
        }

        componentWillUnmount() {
            clearTimeout( this.id );
        }
    }


    const App = () => (
        <StrobeControl />
    )

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});