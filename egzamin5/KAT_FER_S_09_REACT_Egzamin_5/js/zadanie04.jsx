
import React from 'react';
import ReactDOM from 'react-dom';


document.addEventListener('DOMContentLoaded', function(){

    // class Item extends React.Component {
    //     handleClick = () => {
    //         console.log('klik', this.props.topping);
    //
    //         if(typeof this.props.fromParent === 'function') {
    //             this.props.fromParent( this.props.topping );
    //         }
    //     }
    //
    //     handleClick2 = () => {
    //         console.log('klik', this.props.topping);
    //
    //         if(typeof this.props.fromParent2 === 'function') {
    //             this.props.fromParent2( this.props.topping );
    //         }
    //     }
    //
    //     render() {
    //         return (
    //             <li>{ this.props.topping }
    //                 <button onClick={ this.handleClick }>remove</button>
    //                 <button onClick={ this.handleClick2 }>add</button>
    //             </li>
    //         )
    //     }
    // }

    class Item extends React.Component {
        render() {
            return (
                <li onClick={ this.props.fromParent }> { this.props.topping } </li>
            )
        }
    }

    class PizzaToppings extends React.Component {
        state = {
            items: ['Sos pomidorowy', 'Ananas', 'Kukurydza', 'Pomidor'],
        }

        removeTopping = toRemove => {

            const newItems = this.state.items.filter(topping => topping !== toRemove);
            this.setState({
                items: newItems,
            })
        }

        addTopping = toAdd => {

            const newItems = this.state.items.slice();
            newItems.push(toAdd);
            this.setState({
                items: newItems,
            })
        }

        render() {
            const list = this.state.items.map( (topping, index) => (
                    <Item key={index} topping={ topping } fromParent={ this.removeTopping } fromParent2={ this.addTopping }/>
                )
            );

            return (
                <div>
                    <ul>
                        { list }
                    </ul>
                    <ul>
                        { list }
                    </ul>
                </div>
            )
        }
    }

    const App = () => <PizzaToppings />

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});