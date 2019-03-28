$( function() {

    var movieList = $('#movies');
    console.log(movieList);
    var movieUrl = 'https://fe-api-jquery.firebaseio.com/fe-api-jquery.json';

    function loadMovies() {
        $.ajax({
            url: movieUrl,
            dataType: 'json',
        }).done(function (response) {
            // console.log(response);
            insertContent(response);
        }).fail(function (error) {
            console.log('Błąd!', error);
        });
    }

    function insertContent(response) {

        for(const movie of response){

            const h2 = $('<h2>');
            h2.text(movie.title);
            movieList.append(h2);

            const h3 = $('<h3>');
            h3.text(movie.year);
            movieList.append(h3);
        }
    }
    loadMovies();
});
