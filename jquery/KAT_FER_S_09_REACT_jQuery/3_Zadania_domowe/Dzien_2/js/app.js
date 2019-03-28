$(function () {

    var h1 = $('h1');
    var li1 = $('li').first();
    const li2 = $('li').eq(1);
    const li3 = $('li').last();
    var p1 = $('p').first();
    var p2 = $('p').last();

    function findPokemon() {
        $.ajax({
            method: "GET",
            url: 'https://pokeapi.co/api/v2/pokemon/pachirisu/',
            dataType: 'json',
        }).done(function(response) {
            // console.log(response);
            insertContent(response);
        }).fail(function (error) {
            console.log('error ocurred', error);
        });
    }

    function insertContent(pokemon) {
        var name = pokemon.name;
        h1.append(name);
        var hp = pokemon.weight;
        li1.append(hp);
        const moves = pokemon.moves.length;
        li2.append(moves);
        const abilities = pokemon.abilities[0].ability.name;
        li3.append(abilities);
    }

    findPokemon();

    function evolutionType() {
        $.ajax({
            method: "GET",
            url: 'https://pokeapi.co/api/v2/evolution-chain/417',
            dataType: 'json',
        }).done(function (response) {
            p1.append(response.chain.species.name);
        }).fail(function (error) {
            console.log(error);
        });
    }
    evolutionType();

    function evolutionTypeTwo() {
        $.ajax({
            method: "GET",
            url: 'https://pokeapi.co/api/v2/evolution-chain/1',
            dataType: 'json',
        }).done(function (response) {
            insertBulba(response);
        }).fail(function (error) {
            console.log(error);
        });
    }
    evolutionTypeTwo();

    function insertBulba(response) {
        p2.append(response.chain.species.name + " -> " + response.chain.evolves_to[0].species.name + " -> " + response.chain.evolves_to[0].evolves_to[0].species.name);
        // p2.append(response.chain.species[1].name);
    }
})

// $(function() {
//     // DOM elements
//     const pokeName = $("h1"),
//         pokeStats = $("li"),
//         pokeEvo = $(".evolution-chain");
//
//     // Get basic pokemon stats
//     const pokeStatistic = poke => {
//
//         const name = poke.name;
//         const health = poke.stats[5].base_stat.toString();
//         const attack = poke.stats[4].base_stat.toString();
//         const defence = poke.stats[3].base_stat.toString();
//
//         pokeName.append( $(`<span>${name}</span>`) );
//         pokeStats.first().append( $(`<span><strong>${health}</strong></span>`) );
//         pokeStats.eq(1).append($(`<span><strong>${attack}</strong></span>`));
//         pokeStats.last().append($(`<span><strong>${defence}</strong></span>`));
//     }
//
//     // Get pokemon next evolution
//     const pokeEvolve = evo => {
//         const evo1 = evo.chain.evolves_to[0].species.name;
//         const evo2 = evo.chain.evolves_to[0].evolves_to[0].species.name
//
//         newEvolve = $(`<span><strong>${evo1}  i... w ${evo2}</strong></span>`);
//         pokeEvo.append(newEvolve);
//     }
//
//     // Ajax requests
//     const getPoke = () => {
//         $.ajax ({
//             url: 'https://pokeapi.co/api/v2/pokemon/7/', /* "squirtle" */
//             dataType: "json"
//         }).done( response => {
//
//             pokeStatistic(response);
//
//         }).fail( error => console.log("ERROR", error) );
//
//         $.ajax ({
//             url: 'http://pokeapi.co/api/v2/evolution-chain/3', /* "wartortle" */
//             dataType: "json"
//         }).done( response => {
//             console.log(response)
//             pokeEvolve(response);
//
//         }).fail( error => console.log("ERROR", error) );
//
//     }
//
//
//     getPoke();
//
// });
