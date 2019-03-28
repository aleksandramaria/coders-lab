import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class HelloName extends React.Component {

        state = {
            name: 'Ty'
        }

        setName = e => {
            this.setState({
                name: e.target.value,
            })
        }

        render() {
            return (
                <div>
                    <h1> Hello,  { this.state.name } </h1>
                    <input onChange={ this.setName } value={ this.state.name } />
                </div>
            )
        }
    }

    const App = () => <HelloName/>

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});


// zadanie z mateuszem SELECT

// import React from 'react';
// import ReactDOM from 'react-dom';
//
// document.addEventListener('DOMContentLoaded', function(){
//
//     class TextField extends React.Component {
//         state = {
//             option: '',
//         }
//
//         handleChange = e => {
//             this.setState({
//                 option: e.target.value,
//             });
//         }
//
//         render() {
//             return (
//                 <div>
//                     <p>{ this.state.option }</p>
//                     <span>{ this.state.option.length }</span>
//
//                     <select onChange={ this.handleChange } value={ this.state.option }>
//                         <option>opcja 1</option>
//                         <option>opcja 2</option>
//                         <option>opcja 2 dasdsadsadsa</option>
//                     </select>
//                 </div>
//             )
//         }
//     }
//
//     const App = () => <TextField />
//
//     ReactDOM.render(
//         <App />,
//         document.getElementById('app')
//     );
// });


//  WERSJA Z PROPS

import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class TextField extends React.Component {
        state = {
            option: '',
        }

        handleChange = e => {
            this.setState({
                option: e.target.value,
            });
        }

        render() {

            const options = this.props.options.map( o => <option>{o}</option>)

            return (
                <div>
                    <p>{ this.state.option }</p>
                    <span>{ this.state.option.length }</span>

                    <select onChange={ this.handleChange } value={ this.state.option }>
                        {options}
                    </select>
                </div>
            )
        }
    }

    const App = () => <TextField options={ ['dsadsadsa', 'dsadsa','super opcja', 'opcja nijaka', 'opcja pro'] } />

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});