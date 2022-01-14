// var imgMeuilleurFilm = document.getElementById("affichage_meuilleur_film");
// var imgLesMieuxNote = document.getElementById("affiche_films_les_mieux_notés");
// var img1919 = document.getElementById("affiche_films_des_années_1919");
// var imgAventure = document.getElementById("affiche_meuilleur_films_aventure");
// var imgAnimation2020 = document.getElementById("films_d_animation_de_l_année_2020");

const url = "http://localhost:8000/api/v1";

function fetchBestFilm(link, localHTML, number){
    response = fetch(url + link).json()
    
    return(response => localHTML.src = (response.results[number].image_url))
}

// function fetchBestFilms(link, page_number, localHTML,film_number){
//     for (let page = 1; page < page_number; page ++)
//         for (let num = 0; num < film_number; num ++)
//             (fetch(url + link + page))
//                     .then (response => response.json())
//                     .then (response => localHTML.src = (response.results[num].image_url))
// }



fetchBestFilm("/titles/?imdb_score_min=9.6&page=1",affichage_meuilleur_film, 0);








// let fetchCatagorie
//     for (let i = 1; i < 6; i ++)
//         for (let num = 0; num < 5; num ++)
//             (fetch(url + "/genres"))
//                 .then(response => response.json())
//                 .then(response => console.table(response.results[num].name))

// let fetchBestFilm = (fetch (url + "/titles/?imdb_score_min=9.6&page=1"))
//     .then(response => response.json())
//     .then(response => imgMeuilleurFilm.src =(response.results[0].image_url))

// let fetchBestFilms
//     for (let i = 1; i < 13; i ++)
//         for (let num = 0; num < 5; num ++)
//             (fetch(url + "/titles/?imdb_score_min=9&page=" + i))
//                     .then (response => response.json())
//                     .then (response => imgLesMieuxNote.src = (response.results[num].image_url))

// let fetchFilmYear1919
//     for (let i = 1; i < 11; i ++)
//         (fetch(url + "/titles/?min_year=&page=" + i +"&year=1919"))
//             .then (response => response.json())
//             .then (response => console.table(response.results));

// let fetchBestAdeventerFilm
//     for (let i = 1; i < 31; i ++)
//         (fetch(url + "/titles/?genre=Adventure&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=8&page=" + i))
//             .then (response => response.json())
//             .then (response => console.table(response.results));

// let fetchFilmsAnimationYear2020
//     for (let i = 1; i < 6; i ++)
//         (fetch(url + "/titles/?year=2020&min_year=&max_year=&genre=Animation&genre_contains=&page=" + i + "&year=2020"))
//             .then (response => response.json())
//             .then (response => console.table(response.results));