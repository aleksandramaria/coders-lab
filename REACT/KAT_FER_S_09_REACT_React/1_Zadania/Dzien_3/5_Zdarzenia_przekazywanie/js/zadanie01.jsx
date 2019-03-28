import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class ShopItem extends React.Component {

        handleClick = () => {
            console.log('click');

            if(typeof this.props.onBuy === 'function') {
                this.props.onBuy(this.props.title);
            }
        }

        render() {
            return (
                <div>
                    <h1> {this.props.title} </h1>
                    <button onClick={ this.handleClick }>KUP</button>
                </div>
            )
        }
    }

    class Shop extends React.Component {
        state = {
            items: [],
        }

        handleList = item => {

            const newItems = this.state.items.slice();
            newItems.push(item);

            this.setState({
                items: newItems,
            })
        }

        render() {
            const list = this.state.items.map( (item, index) => (
                <li key={index} >{ item }</li>
            ));

            return (
                <div>
                    <ShopItem title="skarpetki" onBuy={ this.handleList }/>
                    <ShopItem title="koszula" onBuy={ this.handleList }/>
                    <ShopItem title="pończochy" onBuy={ this.handleList }/>
                    <ul>
                        {list}
                    </ul>
                </div>
            );
        }
    }

    const App = () => <Shop />

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});