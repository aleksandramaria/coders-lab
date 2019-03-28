// $(function () {
//
//     var newDiv = $('<div class="info">Zaczynamy kolejne zadania</div>');
//
//     var sectionBefore = $('.section-users');
//     sectionBefore.before(newDiv);
//
//     var form = $('form');
//     var userList = $('.user-list');
//     var inputName = $('#name');
//     var inputAge = $('#age');
//
//     form.on('submit', function (e) {
//         e.preventDefault();
//
//         var name = inputName.val();
//         var age = inputAge.val();
//
//         console.log(name, age);
//
//         var liLast = $('<li data-age= age ><span> name </span></li>');
//
//         liLast.text(name);
//         liLast.data('age', age); //Nie widać w zakładce Elementów!!!
//
//         if (name === '' || age === '') {
//
//             console.log('Nie można dodać pustych wartości!');
//             return; // Zakończy całkiem funkcję = wyjdzie z niej!
//         }
//
//         inputName('');
//         inputAge('');
//
//         userList.append(liLast);
//         makeColors();
//     })
//
//     function makeColors() {
//         var lis = userList.find('li');
//         lis.each(function () {
//             $(this).addClass('color-white');
//
//             var age = $(this).data('age');
//
//             if (age <= 15) {
//                 var color = '#75D701';
//             } else if (age <= 40) {
//                 var color = '#f9c00c';
//             } else {
//                 var color = '#c03546';
//             }
//
//             $(this).css('background', color);
//         });
//     }
//
//     makeColors();
//
// });



$(function () {

    var form = $('form');
    var list = $('.user-list');
    var inputName = $('#name');
    var inputAge = $('#age');

    form.on('submit', function (e) {

        e.preventDefault();

        var name = inputName.val();
        var age = inputAge.val();

        var newLi = $('<li>');
        newLi.text(name);
        newLi.data('age', age); //Nie widać w zakładce Elementów!!!

        if (name === '' || age === '') {

            console.log('Nie można dodać pustych wartości!');
            return; // Zakończy całkiem funkcję = wyjdzie z niej!
        }

        inputName.val('');
        inputAge.val('');

        list.append(newLi);
        makeColors();

    });

    function makeColors() {
        var lis = list.find('li');
        lis.each(function () {
            $(this).addClass('color-white');

            var age = $(this).data('age');

            if (age <= 15) {
                var color = '#75D701';
            } else if (age <= 40) {
                var color = '#f9c00c';
            } else {
                var color = '#c03546';
            }

            $(this).css('background', color);
        });
    }

    makeColors();

    list.on('click', 'li', function () {
        $(this).fadeOut();
    });

    //zadanie z kolumnami
    var left= $(".list-left");
    var right= $(".list-right");
    var elements= $(".list-element");

    elements.on("click", function () {
        if($(this).parent().hasClass("list-left")){
            right.append($(this));
        }
        else if ($(this).parent().hasClass("list-right")){
            left.append($(this));
        }
    })

    var przycisk = $("<button>Dodaj</button>");
    var div = $("#fooId");

    div.on('click', 'button ', () => {
        console.log("Kliknięto przycisk");
    });
        div.append(przycisk);
});









