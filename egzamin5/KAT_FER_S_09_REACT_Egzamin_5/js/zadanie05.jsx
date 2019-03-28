import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class ContactForm extends React.Component {
        state = {
            name: '',
            select: '',
            email: '',
            message: '',
        }

        handleChangeName = e => {
            this.setState({
                name: e.target.value,
            })
        }

        handleChangeSelect = e => {
            this.setState({
                select: e.target.value,
            })
        }

        handleChangeEmail = e => {
            this.setState({
                email: e.target.value,
            })
        }

        handleChangeMessage = e => {
            this.setState({
                message: e.target.value,
            })
        }

        handleSubmit = e => {
            e.preventDefault();
        }

        // handleSubmit = e => {
        //     e.preventDefault();
        //
        //     if( this.state.name === '') {
        //         alert('Pole imię musi zostać uzupełnione')
        //     }
        //     if( this.state.message === '') {
        //         alert('Pole wiadomość musi zostać uzupełnione')
        //     }
        //     if( this.state.email.indexOf('@') === -1) {
        //         alert('Pole email musi zostać uzupełnione i zawierać znak @')
        //     } else {
        //         alert('Dziękujemy za wiadomość. Wysłano do wydziału: ');
        //     }
        // }

        render() {

            let alert;
            let good;

            if( this.state.name === '') {
                alert.push('Pole imię musi zostać uzupełnione')
            }
            if( this.state.message === '') {
                alert.push('Pole wiadomość musi zostać uzupełnione')
            }
            if( this.state.email.indexOf('@') === -1) {
                alert.push('Pole email musi zostać uzupełnione i zawierać znak @')
            } else {
                good.push('Dziękujemy za wiadomość. Wysłano do wydziału: ');
            }

            return (
                <div>
                    <p>  </p>
                    <form onSubmit={ this.handleSubmit }>

                        <input onChange={ this.handleChangeName } value={ this.state.name } />
                        <select value={ this.state.select} onChange={ this.handleChangeSelect }>
                            <option value="1">BOK</option>
                            <option value="2">Dział techniczny</option>
                            <option value="3">Marketing</option>
                        </select>
                        <input type={'email'} onChange={ this.handleChangeEmail } value={ this.state.email } />
                        <textarea onChange={ this.handleChangeMessage } value={ this.state.message } />
                        <input onClick={ this.handleClick } type="submit" />
                    </form>
                </div>
            )
        }
    }

    const App = () => <ContactForm />

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});