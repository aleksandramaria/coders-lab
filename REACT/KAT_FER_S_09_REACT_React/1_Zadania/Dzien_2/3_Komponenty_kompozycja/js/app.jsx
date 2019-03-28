import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

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

    class ShopItemDescription extends React.Component {
        render() {
            return (
                <article>
                    <p>{this.props.desc}</p>
                </article>
            )
        }
    }

    class ShopItemPricing extends React.Component {
        render() {
            return (
                <div>
                    Cena: {this.props.price}
                    <button>Kup!</button>
                </div>
            )
        }
    }

    class ShopItem extends React.Component {
        render() {
            return (
                <div>
                    <ShopItemHeader title={this.props.title} img={this.props.img}/>
                    <ShopItemDescription desc={this.props.desc }/>
                    <ShopItemPricing price={this.props.price} />
                </div>
            )
        }
    }



    const App = () => (
        <ShopItem
            title="Produkt super hiper"
            img="/dsadsa.png"
            desc="super produkt dla kazdego"
            price={ 4.56 }
        />
    )


    ReactDOM.render(
        <App  />,
        document.getElementById('app')
    );
});