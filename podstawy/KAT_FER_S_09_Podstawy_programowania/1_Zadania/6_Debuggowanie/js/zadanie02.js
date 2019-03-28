function checkNumber(number){
    debugger;
  var type = typeof number;

  if(type === 'string') {
   return 'Your number is string';
  }

  if(type === 'undefined') {
   return 'Your number is undefined';
  }

  if(number === null) {
   return 'Your number is null';
  }

  return 'Your number is really number';

}


function countSomething() {
    debugger;
 var foo;
 console.log(checkNumber(foo));

 var bar = "lalalala";
 console.log(checkNumber(bar));


 var baz = null;
 console.log(checkNumber(baz));
}

countSomething();
