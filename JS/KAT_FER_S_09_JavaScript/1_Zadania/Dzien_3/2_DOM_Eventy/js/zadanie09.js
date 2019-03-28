var a = document.getElementById("a");
var b = document.getElementById("b");

// Tutaj this wskazuje na obiekt document (Ponieważ kontext wywołania funkcji
// addEventListener to właśnie document)
console.log("obiekt document: ", this);

a.addEventListener("click", function(event){
  // Tutaj this wskazuje na element DOM o id a
  console.log("a: ", this);
});

b.addEventListener("click", function(event){
  // Tutaj this wskazuje na element DOM o id b
  event.stopPropagation;
  console.log("b: ", this);
  var self = this;

  function innerFuncOne(){
      // Tutaj this wskazuje na element Window, bo funkcja została
      //wywołana bez żadnego kontekstu.

      console.log("innerFuncOne: ", this);
      // b.style.backgroundColor = 'green';
      self.style.backgroundColor = 'green';
  }
  innerFuncOne();


  // function innerFuncOne(){
  //     // Tutaj this wskazuje na element Window, bo funkcja została
  //     //wywołana bez żadnego kontekstu.
  //     console.log("innerFuncOne: ", this);
  // }
  // innerFuncOne();

});

//potrzebny jest kontekst wskazujacy na b oraz stopPropagation ktory 
//umozliwi zmiane koloru tylko mniejszego diva
//przez przypisanie do b self = this mozemy zmienic kontekst w funkcji 
//innerFuncOne bez odwolania bezposredniego :)


