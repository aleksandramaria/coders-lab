import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    //Funkcja generuje pseudolosowe liczby całkowite z zakresu 1-10.
    function genNumber(){
        return Math.round( Math.random() * 9 + 1 );
    }
    //Nie modyfikuj kodu powyżej
    const num1 = genNumber();
    const num2 = genNumber();
    // const result = num1 + num2;
    const message = alert('wylosowane liczby to: ' + num1 + " i " + num2);
    const userRes = Number(prompt('podaj wynik dodawania!'));


    const getAnswerElement = (a, b, answer) => {
        let text, color;

        if(answer === a + b) {
            text = "prawidlowa odpowiedz!";
            color = "green" ;
        } else {
            text = "nieprawidlowa odpowiedz!";
            color = "red";
        }

        return <div style={ {backgroundColor: color} }>{ text }</div>
    }

    ReactDOM.render(
        <div> { getAnswerElement(num1, num2, userRes) } </div>,
        document.getElementById('app')
    );

    // let div;
    // if(result === userRes) {
    //     div = <div style={{backgroundColor: 'green'}}>prawidlowa odpowiedz</div>
    // } else {
    //     div = <div style={{backgroundColor: 'red'}}>Niepoprawna odppowiedz</div>
    // }

    // let div;
    // const styleGreen = {
    //     backgroundColor: 'green',
    // }
    // const styleRed = {
    //     backgroundColor: 'red',
    // }
    // if(result === userRes) {
    //     div = <div style={ styleGreen }>prawidlowa odpowiedz</div>
    // } else {
    //     div = <div style={ styleRed }>Niepoprawna odpowiedz</div>
    // }
    //
    // ReactDOM.render(
    //     div,
    //     document.getElementById('app')
    // );

    // let text, color;
    //
    // if(result === userRes) {
    //     text = "prawidlowa odpowiedz!";
    //     color = "green" ;
    // } else {
    //     text = "nieprawidlowa odpowiedz!";
    //     color = "red";
    // }
    //
    // ReactDOM.render(
    //     <div style={ {backgroundColor: color} }>{ text }</div>,
    //     document.getElementById('app')
    // );
});
