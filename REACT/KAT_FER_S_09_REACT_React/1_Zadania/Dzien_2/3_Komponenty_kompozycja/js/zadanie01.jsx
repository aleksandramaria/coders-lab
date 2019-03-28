import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    const menu = [
        {
            title   :   'Mysz komputerowa',
            image   :   'https://upload.wikimedia.org/wikipedia/commons/c/c5/Red_computer_mouse.jpg'
        },
        {
            title   :   'Klawiatura',
            image   :   'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Computer_keyboard_Danish_layout.svg/1000px-Computer_keyboard_Danish_layout.svg.png'
        },
        {
            title   :   'Laptop programisty',
            image   :   'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Typing_computer_screen_reflection.jpg/640px-Typing_computer_screen_reflection.jpg'
        }
    ]

    class ShopItemHeader extends React.Component {
        render() {
            return (
                <div>
                    <h1>{this.props.title}</h1>
                    <img src={this.props.img} />
                </div>
            )
        }
    }

    class ShopList extends React.Component {
        render() {
            const list = this.props.items.map( item => (
                <ShopItemHeader
                    title={ item.title }
                    img={ item.image }
                />
                )
            )

            return (
                <div className='shoplist'>{ list }</div>
            )
        }
    }

    const App = () => (
        <ShopList items={ menu }/>
    )

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});


