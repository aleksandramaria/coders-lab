import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    const Menu = () => (
        <ul>
            <li><a href={'/'} >Strona glowna</a></li>
            <li><a href={'/blog'} >Blog</a></li>
            <li><a href={'/pricing'} >Cennik</a></li>
            <li><a href={'/contact'} >Kontakt</a></li>
        </ul>
    );

    class Menu1 extends React.Component {
        render() {
            return (
                <ul>
                    <li><a href={'/'} >Strona glowna</a></li>
                    <li><a href={'/blog'} >Blog</a></li>
                    <li><a href={'/pricing'} >Cennik</a></li>
                    <li><a href={'/contact'} >Kontakt</a></li>
                </ul>
            )
        }
    }

    ReactDOM.render(
        <div>
            <Menu />
            <Menu1 />
        </div>,
        document.getElementById('app')
    );
});