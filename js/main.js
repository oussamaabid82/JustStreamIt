let film_mieux_note = document.getElementById("affiche_films_les_mieux_notés")
let films_les_mieux_notes = document.getElementById("film_les_mieux_notes")

// lien de l'API
const url = "http://localhost:8000/api/v1";

// Affichage du meilleur film
async function fetchBestFilm(link, film_number, localHtml){
	let lien =(url+link);
	const response = await fetch(lien);
  	const myJson = await response.json();
	myJson.results.forEach(element =>{
		localHtml.src = (myJson.results[film_number].image_url);
	})

// Affichage de la description du film
	const response1 = await fetch(myJson.results[film_number].url);
	const myJson1 = await response1.json();
	resume = document.getElementById("resume");
	resume.textContent = (myJson1.description);

// Affichage du modal
	var modal = document.getElementById('myModal');
	var btn = document.getElementById("button_meuilleur_film");
	var span = document.getElementsByClassName("close")[0];
	btn.onclick = function () {
		modal.style.display = "block";
	}
	span.onclick = function () {
		modal.style.display = "none";
	}
	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}	
}

// inseret les données dans le modal
	// Liste des données recupérer de l'API
	const liste = [myJson1.title, myJson1.genres, myJson1.date_published, myJson1.rated,
	myJson1.imdb_score, myJson1.writers, myJson1.actors, myJson1.duration, myJson1.countries,
	myJson1.avg_vote, myJson1.long_description];

	text_modal = document.getElementById("modal-content");
	// Liste des titres
	const liste_titres = ["Le Titre du film: ", "Genre: ", "Date de sortie: ", "Rate: ", "Score Imdb: ", 
						"Réalisateur: ", "Liste des acteurs: ",  "Durée: ", "Pays d'origine: ",
						"Résultat au Box office: ", "Resumé du film: "]

	for (let i in liste_titres){
		newP = document.createElement("p");
		text_modal.appendChild(newP);
		newP.classList.add("text_modal");
		newP.textContent = liste_titres[i] + liste[i] 
	}
	}	


// Création de la premiére section, faire le fetch des images dns l'API et les inserer à la carrousel
async function fetchFilms(link,page_number,_link_comp,localHtml){
    for (let i = 1; i < page_number; i ++){
		let lien = (url+link+i)
			const response = await fetch(lien);
  			const myJson = await response.json();
			myJson.results.forEach(element =>{

		// Création des balises qui vont recupérer les liens des images
				newDiv = document.createElement("div");
				newDiv.classList.add("films");
				section.appendChild(newDiv);

				newPic = document.createElement("picture");
				newDiv.appendChild(newPic);

				newImg = document.createElement("img");
				newImg.setAttribute("src", element.image_url);
				newImg.classList.add(localHtml);
				newPic.appendChild(newImg);
			
		// Création des balise qui vont afficher les bouttons pour chaque films
				newButton = document.createElement("button");
				newButton.classList.add("button1");
				newButton.textContent = "Détails film"
				newDiv.appendChild(newButton);
			
		// Créations des balises qui vont afficher les modals pour chaque films 
				newDiv1 = document.createElement("div");
				newDiv.appendChild(newDiv1);
				newDiv1.setAttribute("id", "myModal");
				newDiv1.classList.add("modal");

				newDiv2 = document.createElement("div");
				newDiv1.appendChild(newDiv2);
				newDiv2.setAttribute("id", "modal-content");

				newP = document.createElement("p");
				newDiv1.appendChild(newP);
				newP.classList.add("text_modal");
				newP.textContent = "myJson1[i]"

				newSpan = document.createElement("span");
				newDiv2.appendChild(newSpan);
				newSpan.classList.add("close");
				newSpan.textContent = "&times;"
				});
			}

// Création de la carrousel
let span = document.getElementsByClassName('fleche');
let films = document.getElementsByClassName('films');
let films_page = Math.ceil(films.length/4);
let l = 0;
let movePer = 90;
let maxMove = Math.ceil(films.length*12);

// mobile_view	
let mob_view = window.matchMedia("(max-width: 768px)");
if (mob_view.matches);
	{
		movePer = 50.36;
		maxMove = 504;
	}
	let right_mover = ()=>{
		l = l + movePer;
		if (films == 1){l = 0;}
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
fetchBestFilm("/titles/?imdb_score_min=9.6&page=1",0, affichage_meuilleur_film);
fetchFilms("/titles/?imdb_score_min=9&page=",13,"", films_les_mieux_notes);
