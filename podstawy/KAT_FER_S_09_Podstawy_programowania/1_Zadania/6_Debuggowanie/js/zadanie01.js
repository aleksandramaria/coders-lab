/* Ta funkcja nie robi nic sensownego.
*/
function doSomething(number) {
    debugger;
    var numberOfSlides = 10;
    var slideWidth = 400;

    var foo = "Galeria ma ";
    console.log(foo + numberOfSlides + ' zdjęcia');

    var naj = "naj ";
    for(var i = 0; i < numberOfSlides
        ; i++) {
      var bar = "Zdjęcie nr " + (i + 1) + " lubię " + naj + " bardziej";
      console.log(bar)
      naj += " naj";
    }
}

doSomething(2);