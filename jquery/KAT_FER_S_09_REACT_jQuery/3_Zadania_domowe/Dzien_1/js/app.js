$(function () {

    //zadanie 1
    var border = $('.border');
    console.log(border);
    border.css('border', '1px solid red');

    //Zadanie 2
    var menu = $('#menu');
    var menuChildren = menu.children();
    console.log(menuChildren);
    menuChildren.last().text("Jestem ostatnim dzieckiem");

    //Zadanie 3
    menuChildren.each(function() {
        var color = $(this).data('color');
        $(this).css('color', ($(this).data('color')));
        // $(this).css('color', color);
    });

    //Zadanie 4
    var btn = $('.login button');

    btn.on('click', function () {
        var type = btn.next().attr('type');
        if(type === 'password') {
            $(this).next().attr('type', 'text');
        } else {
            $(this).next().attr('type', 'password');
        }
    })
});


// var userName = $('input.userName');
// /* Pobranie */ userName.attr('type');
// /* Ustawienie */ userName.attr('type', 'password');
