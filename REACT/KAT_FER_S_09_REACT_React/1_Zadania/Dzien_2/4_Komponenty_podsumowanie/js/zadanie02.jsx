import React from 'react';
import ReactDOM from 'react-dom';

import shopping from './zadanie02';

document.addEventListener('DOMContentLoaded', function(){

    class Receipt extends React.Component{
        render(){
            return (
                <div>
                    <THead />
                    <TBody items={this.props.items}/>
                    <TFoot total={this.props.items}/>
                </div>
            )
        }
    }

    class THead extends React.Component {
        render() {
            return (
                <thead>
                <tr>
                    <th>Nazwa</th>
                    <th>Cena/1</th>
                    <th>Ilosc</th>
                    <th>Total</th>
                </tr>
                </thead>
            )
        }
    }

    class TBody extends React.Component {
        render() {
            const list = this.props.items.map ( item => (
                <tr>
                    <td> {item.name } </td>
                    <td> {item.price} </td>
                    <td> {item.count} </td>
                    <td> {(item.price * item.count).toFixed(2)} </td>
                </tr> ) )
            return (
                <tbody>
                { list }
                </tbody>
            )
        }
    }

    class TFoot extends React.Component {
        render() {
            const total = this.props.total.reduce((prev, curr) => {
            return prev + (curr.price * curr.count)
        }, 0)
            return (
                <tfoot>
                <tr>
                    <td>RAZEM</td>
                    <td>-</td>
                    <td>-</td>
                    <td> { total.toFixed(2) } </td>
                </tr>
                </tfoot>
            );
        }
    }

    const App = () => (
        <Receipt items={ shopping }/>
    )

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});


