
import React from 'react';
import ReactDOM from 'react-dom';


document.addEventListener('DOMContentLoaded', function(){

    class PizzaToppings extends React.Component {
        state = {
            items1: ['Sos pomidorowy', 'Ananas', 'Kukurydza', 'Pomidor'],
            items2: [],
        }

        moveTopping = e => {
            const el = e.target.dataset.topping;
            console.log(el);

            const newItems1 = this.state.items1.filter(topping => topping !== el);

            const newItems2 = this.state.items2.slice();
            newItems2.push(el);

            this.setState({
                items1: newItems1,
                items2: newItems2,
            })
        }

        moveTopping2 = e => {
            const el = e.target.dataset.topping;
            console.log(el);

            const newItems1 = this.state.items2.filter(topping => topping !== el);

            const newItems2 = this.state.items1.slice();
            newItems2.push(el);

            this.setState({
                items1: newItems1,
                items2: newItems2,
            })
        }


        render() {
            const list1 = this.state.items1.map( (topping, index) => (
                <li onClick={this.moveTopping} key={index} data-topping={topping}>{topping}</li>
                )
            )
            const list2 = this.state.items2.map( (topping, index) => (
                <li onClick={this.moveTopping2} key={index} data-topping={topping}>{topping}</li>
                )
            )

            return (
                <div>
                    <ul>
                        { list1 }
                    </ul>
                    <ul>
                        { list2 }
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

// import React from 'react';
// import ReactDOM from 'react-dom';
//
// document.addEventListener('DOMContentLoaded', function(){
//
// class PizzaToppings extends React.Component {
//     state= {
//         list1: ['Sos pomidorowy', 'Ananas', 'Kukurydza', 'Pomidor'],
//         list2: [],
//     }
//
//     handleClick1 = e => {
//         const element = e.target.dataset.name;
//         const oldArr = this.state.list1.filter(item => item !== element)
//         const newArr = this.state.list2.slice();
//         newArr.push(element);
//
//         this.setState({
//             list1: oldArr,
//             list2: newArr,
//         })
//
//     }
//
//     handleClick2 = e => {
//         const element = e.target.dataset.name;
//         const oldArr = this.state.list2.filter(item => item !== element)
//         const newArr = this.state.list1.slice();
//         newArr.push(element);
//
//         this.setState({
//             list1: oldArr,
//             list2: newArr,
//         })
//
//     }
//
//     render(){
//         const list1= this.state.list1.map((topping, index) =>
//             <li key={index} data-name={topping} onClick={this.handleClick1}>{topping}</li>);
//         const list2= this.state.list2.map((topping, index) =>
//             <li key={index} data-name={topping} onClick={this.handleClick2}>{topping}</li>);
//
//         return (
//             <div>
//                 <ul>
//                     {list1}
//                 </ul>
//                 <ul>
//                     {list2}
//                 </ul>
//             </div>
//         )
//     }
// }
// const App= () => <PizzaToppings />
//
//     ReactDOM.render(
//         <App/>,
//         document.getElementById('app')
//     );
// });