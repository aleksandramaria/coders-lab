$(function () {
    console.log('dziala!!');

    // function zadanie00() {
    //     var section = $('section');
    //     section.addClass('section');
    // }
    //
    // function zadanie01() {
    //     $('body').css('background-color', #eee);
    // }

    // zadanie00();
    // zadanie01();

    function zad1() {
        var ul = $('.section-menu').find('ul');
        ul.addClass('menu');
        var lis = $('li');
        lis.addClass('menu-element');
    }

    zad1();

    function zad2() {
        var lis = $('.section-main li');
        lis.addClass('main-element-bg main-element-bg')
    }
    zad2();

    function zad3() {
        var links = $('.section-links a');
        links.addClass('links-element');
        links.first().addClass('links-element-first');
        links.last().addClass('links-element-last');
        links.eq(4).addClass('links-element-active');
    }
    zad3();

    function zad4() {
        var shape = $('#shape');
        shape.addClass('shape-star');
        shape.prev().addClass('shape shape-circle');
        shape.next().addClass('shape shape-square');
    }
    zad4();

    function zad5() {
        var counter = $('.counter');
        console.log(counter);
        counter.children().eq(1).hide();
        counter.children().eq(2).hide();
        counter.children().eq(3).hide();
    }
    zad5();

    function zad6() {
        var codersLink = $('#codersLink');
        var href = codersLink.attr('href');
        console.log(href);
        var newHref = codersLink.attr('href', 'http://www.blabla.pl');
        console.log(newHref);
    }
    zad6();

    function zad7() {
        const form = $('.form');
        const name = $('#name');
        const email = $('#email');
        console.log(email.val());
        console.log(name.val());
    }
    zad7();
});





// Znajdź element o klasie form. Znajdują się w nim dwa pola input.
//     Pobierz ich wartości (indywidualnie) i wyświetl je w konsoli.
//     Spróbuj też pobrać te wartości za pomocą pętli each() .

// Zapoznaj się z plikiem index.html oraz odpowiednimi plikami CSS.
//     Wyszukaj listę UL w sekcji o klasie .section-menu. Dodaj tej liście klasę .menu,
//     a każdemu LI w tej liście klasę menu-element.