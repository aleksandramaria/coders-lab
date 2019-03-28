import React from 'react';
import ReactDOM from 'react-dom';


//Nie zmieniaj tego kodu poniżej!
document.addEventListener('DOMContentLoaded', function(){

    class Address extends React.Component {

        render() {
            if(this.props.name === '' || this.props.lastname === '' || this.props.street === '' || this.props.city === '' ||
            this.props.housenumber === '' || this.props.postcode.length !== (4 || 5)) {
                return null;
            } else {
                return (
                    <div>
                        <h1>{this.props.name} {this.props.lastname}</h1>
                        <p>{this.props.street} {this.props.housenumber}</p>
                        <p>{this.props.postcode} {this.props.city}</p>
                    </div>
                )
            }
        }
    }

    const App = () => <Address name={'Ala'} lastname={'Lala'} street={'blabla'}
                               housenumber={'123455'} postcode={'1234'} city={'kato'}/>

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});


export {Address}