import React from 'react';
import ReactDOM from 'react-dom';
import people from "../../../Dzien_1/5_Skladnia_JSX_zagniezdzanie/js/zadanie00_02";

document.addEventListener('DOMContentLoaded', function(){

    const Menu = props => {

        const list = props.menu.map(el => <li><a href={el.urL}> {el.text} </a></li>)
        return <ul>{list}</ul>
    }


    class Menu1 extends React.Component {
        render() {
            const list = this.props.menu.map( el => <li><a href={el.urL}> {el.text} </a></li>)

            return <ul>{ list }</ul>
        }
    }

    ReactDOM.render(
        <div>
            <Menu menu={[
                {
                    urL     :   '/',
                    text    :   'Strona główna'
                },
                {
                    urL     :   '/blog',
                    text    :   'Blog'
                },
                {
                    urL     :   '/pricing',
                    text    :   'Cennik'
                },
                {
                    urL     :   '/contact',
                    text    :   'Kontakt'
                }
            ]} />
            <Menu1 menu={[
                {
                    urL     :   '/',
                    text    :   'Strona główna'
                },
                {
                    urL     :   '/blog',
                    text    :   'Blog'
                },
                {
                    urL     :   '/pricing',
                    text    :   'Cennik'
                },
                {
                    urL     :   '/contact',
                    text    :   'Kontakt'
                }
            ]}/>
        </div>,
        document.getElementById('app')
    );
});