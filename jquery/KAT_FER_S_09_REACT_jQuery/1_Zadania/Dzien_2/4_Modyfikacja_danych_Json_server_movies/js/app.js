$(function () {
    var form = $('.form');
    var movieTitle = $('#movieTitle');
    var movieDesc = $('#movieDescription');
    var list = $('.movie-list');
    var url = "http://localhost:3000";


//     //zadanie1
    loadMovies();

    function loadMovies() {
        $.ajax({
            method: "GET",
            url: url + "/movies",
            dataType: 'json',
        }).done(function(response) {
            // console.log(response);
            insertMovies(response);
        }).fail(function (error) {
            console.log('error ocurred', error);
        });
    }

// function load() {
//
//     var url = "http://localhost:3000";
//     $.ajax({
//         method: "GET",
//         url: url + "/db",
//         dataType: "json"
//     }).done(function (response) {
//         //console.log(response.movies);
//         loadMovies(response.movies);
//     });
// }
//
    function insertMovies(movies) {
        for(var movie of movies) {
            var newLi = $('<li class="movie"><div class="movie-content"><h3 class="movie-title"></h3><p class="movie-description"></p></li>');
            newLi.find('h3').text(movie.title);
            newLi.find('p').text(movie.description);
            list.append(newLi);
        }
    }


    form.on('submit', function (e) {
        e.preventDefault();
        var title = movieTitle.val();
        var description = movieDesc.val();

        addMovie(title, description);

    })


    function addMovie(title, description) {
        var movie = {
            title: title,
            description: description,
        }
        $.ajax({
            method: "POST",
            url: url + "/movies",
            dataType: "json",
            data: movie
        }).done(function (response) {
            console.log(response);
        });
    }

    loadMovies();
})

// $(function() {
//
//     var form=$("form");
//     var movie_title=$("#movieTitle");
//     var movie_description=$("#movieDescription");
//     var ul=$(".movie-list");
//     var form_btn=$(".form-button");
//
//     load();
//
//     function load() {
//
//         var url = "http://localhost:3000";
//         $.ajax({
//             method: "GET",
//             url: url + "/db",
//             dataType: "json"
//         }).done(function (response) {
//             //console.log(response.movies);
//             loadMovies(response.movies);
//         });
//     }

    // function loadMovies(films) {
    //
    //     for(film of films){
    //         //console.log(film.title);
    //         //console.log(film.description);
    //
    //         var new_film=$('<li class="movie"><div class="movie-content"><h3 class="movie-title"></h3><p class="movie-description"></p></div><button class="btn-edit">Edycja</button><button class="btn-delete">Usuń</button></li>');
    //         new_film.find("h3").text(film.title);
    //         new_film.find("p").text(film.description);
    //         ul.append(new_film);
    //     }
    // }

    // form_btn.on("click", function (e) {
    //
    //     e.preventDefault();
    //
    //     var tit=movie_title.val();
    //     var des=movie_description.val();
    //     //console.log(tit, des);
    //     addMovie(tit, des);
    //
    // })

//     function addMovie(title, description){
//
//         var url = "http://localhost:3000";
//         var movie = {
//             title: title,
//             description: description,
//         };
//         $.ajax({
//             method: "POST",
//             url: url + "/movies",
//             dataType: "json",
//             data: movie
//         }).done(function(response) {
//             console.log(response);
//             load();
//         });
//
//     }
//
//     function removeMovie(id) {
//
//     }
//
// });