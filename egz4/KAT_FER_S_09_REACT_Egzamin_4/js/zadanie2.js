$( () => {
    let getRandomText = () => {
            let korpoText = ['risercz', 'dedlajn', 'dżołk', 'łikend', 'Dizajn', 'fakap' ];
            let randomNumber = Math.floor(Math.random() * korpoText.length);
            return korpoText[randomNumber];
    }

    const box = $('.box');
    const p = $('p');

    // box.each(function () {
    //     $(this).on('mouseenter', () => {
    //         $(this).find(p).text(getRandomText);
    //         $(this).find(p).show();
    //     })
    //
    //     $(this).on('mouseleave', () => {
    //         $(this).find(p).hide();
    //     })
    // })

    // box.on('mouseenter', e => {
    //     $(e.target).children().text(getRandomText());
    //     $(e.target).children().slideToggle();
    //
    // });

    box.on('mouseover', function (e) {
        $(this).children(p).text(getRandomText());
        $(this).children(p).slideToggle();
    });

})
