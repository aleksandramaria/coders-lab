$( function() {

    var movieList = $( '.list' );
    var movieUrl = 'https://cors.io/?https://swapi.co/api/films/';

    function loadMovies() {
        //tutaj wykonaj połączenie Ajaxem
        $.ajax({
            url: movieUrl,
            dataType: 'json',
        }).done(function (response) {
            insertContent(response.results);
        }).fail(function (error) {
            console.log('Błąd!', error);
        });
    }

    function insertContent( movies ) {
        //tutaj zrób pętlę po filmach
        //wygeneruj kolejne LI i wstaw do listy movieList
        for(var movie of movies){

            var newLi = $('<li>');
            newLi.text(movie.title);
            movieList.append(newLi);

        }
    }

    loadMovies();
});