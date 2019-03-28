$(function () {

    $('dt').on('click', function () {
        console.log(this, $(this));
    });

    // var btns = $('.hero-buttons button');

    $(function () {
        var btns = $('.hero-buttons button');

        btns.on('click', function () {
            console.log($(this).data('feature'));
        });

    });

    // zad1

    var dd = $('.superhero-description dd');
    var dt = $('.superhero-description dt');

    dd.hide();
    dt.on('click', function () {
        $(this).next().slideToggle();
    })


    //zad2
    var btns = $('.shopping-list button');
        btns.on('click', function () {

            // if($(this).parent().hasClass('added') === true) {
            //     $(this).parent().removeClass('added');
            //     $(this).css('background', 'black');
            //     $(this).css('color', 'white');
            //     $(this).text('Dodaj');
            // } else {
            //     $(this).parent().addClass('added');
            //     $(this).css('background', '#0080ff');
            //     $(this).css('color', '#fff');
            //     $(this).text('Dodano');
            // }

            if($(this).parent().hasClass('added') === false) {
                $(this).parent().addClass('added');
                $(this).css('background', '#0080ff');
                $(this).css('color', '#fff');
                $(this).text('Dodano');
            } else {
                $(this).parent().removeClass('added');
                $(this).css('background', 'black');
                $(this).css('color', 'white');
                $(this).text('Dodaj');
            }
        })

    $('.menu').children().eq(1).empty(); //Usuń pierwszy element z menu
    $('.menu').find("li").first().remove();

});