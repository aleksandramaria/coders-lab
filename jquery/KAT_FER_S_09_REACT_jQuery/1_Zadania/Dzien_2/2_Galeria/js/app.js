$( function() {

    var apiUrl = 'https://pixabay.com/api/';
    var form = $('.form');
    var input = $('.form-search');
    var gallery = $('.gallery');

    form.on('submit', function (e) {
        e.preventDefault();
        var submit = $('button');
        console.log(submit);
        submit.attr('disabled', true);
        submit.addClass('loading');
        var searchTerm = input.val();
        // console.log(searchTerm);

        loadImages(searchTerm);
    });

    function loadImages(searchQuery) {
        $.ajax({
            url : apiUrl,
            data : {
                q : searchQuery,
                key : "11726925-e5d5f5c37f0fc0dd5cf4fc52e"
            },
            dataType: 'json',
        }).done(function(result) {
            displayImages(result.hits);
            var submit = $('button');
            submit.removeAttr('disabled');
            submit.removeClass('loading');
        }).fail(function (error) {
            console.log('error ocurred', error);
        });
    }

    function displayImages(images) {
        gallery.empty();

        for(var img of images) {
            var newEl = $('<a href="" class="gallery-element"><img class="gallery-img" src="" alt=""></a>');

            newEl.attr('href', img.previewURL);

            newEl.find('img').attr('src', img.previewURL);
            newEl.attr('data-fancybox', 'data-fancybox');

            gallery.append(newEl);
        }
    }
});
