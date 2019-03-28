import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    const Sum = props => {
        return (
            <h1> {props.numbers.reduce(function (accumulator, currentValue) {
                return accumulator + currentValue;
            })
            }
            </h1>
        )
    }

    class Sum1 extends React.Component {
        render() {
            return (
                <h1> {this.props.numbers.reduce(function (accumulator, currentValue) {
                    return accumulator + currentValue })
                }
                </h1>
            )
        }
    }

    ReactDOM.render(
        <div>
            <Sum numbers={[1, 2, 6]} />
            <Sum1 numbers={[1, 2, 3]} />
        </div>,
        document.getElementById('app')
    );
});
