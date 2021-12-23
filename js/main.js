let film_mieux_note = document.getElementById("affiche_films_les_mieux_notés")
let films_les_mieux_notes = document.getElementById("film_les_mieux_notes")

// lien de l'API
const url = "http://localhost:8000/api/v1";

// Affichage du milleur film
async function fetchBestFilm(link, film_number, localHtml){
    fetch(url + link)
        .then(response => response.json())
        .then(response => localHtml.src = (response.results[film_number].image_url))
}

// Création de la premiére section, faire le fetch des images dns l'API et les inserer à la carrousel
async function fetchFilms(link,page_number,_link_comp,localHtml){
    for (let i = 1; i < page_number; i ++){
		let lien = (url+link+i)
			
			const response = await fetch(lien);
  			const myJson = await response.json(); //extract JSON from the http response
			myJson.results.forEach(element =>{

				newDiv = document.createElement("div")
				newDiv.classList.add("films")
				newPic = document.createElement("picture")
				newButton = document.createElement("button")
				newButton.classList.add("button1")
				newButton.textContent = "Détails film"
				section.appendChild(newDiv)
				newDiv.appendChild(newPic)
				newDiv.appendChild(newButton)

				newImg = document.createElement("img")

				newImg.setAttribute("src", element.image_url);

				newImg.classList.add(localHtml)
				newPic.appendChild(newImg)
				});
			}
// Création de la carrousel
let span = document.getElementsByTagName('span')
let films = document.getElementsByClassName('films')
console.log(films)
let films_page = Math.ceil(films.length/4);
console.log(films_page)
let l = 0;
let movePer = 90;
let maxMove = 550;
// mobile_view	
let mob_view = window.matchMedia("(max-width: 768px)");
if (mob_view.matches)
	{
		movePer = 50.36;
		maxMove = 504;
	}
	let right_mover = ()=>{
	l = l + movePer;
	if (films == 1){l = 0; }
	for(const i of films)
	{
		if (l > maxMove){l = l - movePer;}
		i.style.left = '-' + l + '%';
	}

	}
	let left_mover = ()=>{
		l = l - movePer;
		if (l<=0){l = 0;}
		for(const i of films){
			if (films_page>1){
				i.style.left = '-' + l + '%';
			}
		}
	}
	span[1].onclick = ()=>{right_mover();}
	span[0].onclick = ()=>{left_mover();}
}
// Appel des fonctions
fetchBestFilm("/titles/?imdb_score_min=9.6&page=1",0, affichage_meuilleur_film)
fetchFilms("/titles/?imdb_score_min=9&page=",13,"", films_les_mieux_notes);

