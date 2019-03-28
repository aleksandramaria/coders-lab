// const sayHello =  (...theArgs) => {
//     return theArgs.map(function(element) {
//         console.log( 'hello ' + element);
//     });
// }

const sayHello = (...args) => {
    return args.map( el => {
        console.log('hello ' + el);
    });
}

sayHello("Ania", "Kasia", "Steve", "Bogumił");

//tu zwracam tablice
// const sayHello = (...args) => {
//     return args.map( el => {
//         return 'hello ' + el;
//     });
// }



// args.forEach(fn = (element,length)=> console.log("Hello"+element));
//
// sayHello("Ania", "Kasia", "Steve", "Bogumił");
