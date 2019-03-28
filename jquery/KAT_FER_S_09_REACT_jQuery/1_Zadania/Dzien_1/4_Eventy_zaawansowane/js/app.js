$(function () {

    var nameInput = $('#name');
    var form = $('form');
    var list = $('.user-list');

    form.on('submit', function (e) {

        e.preventDefault();

        var name = nameInput.val();

        var newLi = $('<li><span class="user-name">Barack Obama</span><button class="btn-delete">Usuń</button></li>');

        newLi.find('.user-name').text(name);

        list.append(newLi);

        nameInput.val('');
        // nameInput.focus(); //Wróć kursorem do inputa
    });

    list.on('click', '.btn-delete', function () {
        $(this).parent().remove();
    });

});