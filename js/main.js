let film_mieux_note = document.getElementById("affiche_films_les_mieux_notés")
let films_les_mieux_notes = document.getElementById("film_les_mieux_notes")
let meuilleur_films_d_animation = document.getElementById("meuilleur_films_d_animation")
let meuilleur_films_action = document.getElementById("filmsAction")
let meuilleur_films_biography = document.getElementById("meuilleur_films_biography")

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
	title = document.getElementById("titre");
	title.textContent = (myJson1.title);

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
		newP.textContent = liste_titres[i] + liste[i]; 
	}
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
}	

// #######################################################################################################################################################

// Création de la premiére section, faire le fetch des images dns l'API et les inserer à la carrousel
async function filmsMieuxNote(link,page_number,_link_comp,localHtml){
	num = 0
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
				newPic.appendChild(newImg);
	});	
}
		// Création de la carrousel de la section 1
		let span = document.getElementsByClassName('fleche');
		let films = document.getElementsByClassName('films');
		let films_page = 25;
		let l = 0;
		let movePer = 90;
		let maxMove = 250;

		// mobile_view	
		let mob_view = window.matchMedia("(max-width: 768px)");
		if (mob_view.matches);
			{
				movePer = 50.36;
				maxMove = 200;
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

// #######################################################################################################################################################
// Création de la deuxiéme section, faire le fetch des images dans l'API et les inserer à la carrousel

async function filmsAnimation2020(link,page_number,_link_comp,localHtml){
    for (let i = 1; i < page_number; i ++){
		let lien = (url+link+i)
			const response = await fetch(lien);
  			const myJson = await response.json();
			myJson.results.forEach(element =>{
			
		// Création des balises qui vont recupérer les liens des images
				newDiv = document.createElement("div");
				newDiv.classList.add("filmsAnimation");
				section1.appendChild(newDiv);

				newPic = document.createElement("picture");
				newDiv.appendChild(newPic);

				newImg = document.createElement("img");
				newImg.setAttribute("src", element.image_url);
				newImg.classList.add(localHtml);
				newPic.appendChild(newImg);
			});
		}
		// Création de la carrousel de la section 2
		let span = document.getElementsByClassName('fleche1');
		let films = document.getElementsByClassName('filmsAnimation');
		let films_page = 25;
		let l = 0;
		let movePer = 90;
		let maxMove = 250;

		// mobile_view	
		let mob_view = window.matchMedia("(max-width: 768px)");
		if (mob_view.matches);
			{
				movePer = 50.36;
				maxMove = 200;
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

// #######################################################################################################################################################

// Création de la troisiéme section, faire le fetch des images dans l'API et les inserer à la carrousel

async function filmsAction(link,page_number,_link_comp,localHtml){
    for (let i = 1; i < page_number; i ++){
		let lien = (url+link+i)
			const response = await fetch(lien);
  			const myJson = await response.json();
			myJson.results.forEach(element =>{
			
		// Création des balises qui vont recupérer les liens des images
				newDiv = document.createElement("div");
				newDiv.classList.add("filmAction");
				section2.appendChild(newDiv);

				newPic = document.createElement("picture");
				newDiv.appendChild(newPic);

				newImg = document.createElement("img");
				newImg.setAttribute("src", element.image_url);
				newImg.classList.add(localHtml);
				newPic.appendChild(newImg);
			});
		};
		// Création de la carrousel de la section 3
		let span = document.getElementsByClassName('fleche2');
		let films = document.getElementsByClassName('filmAction');
		let films_page = 25;
		let l = 0;
		let movePer = 90;
		let maxMove = 250;

		// mobile_view	
		let mob_view = window.matchMedia("(max-width: 768px)");
		if (mob_view.matches);
			{
				movePer = 50.36;
				maxMove = 200;
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
// #######################################################################################################################################################

// Création de la quatriéme section, faire le fetch des images dans l'API et les inserer à la carrousel

async function filmsBiography(link,page_number,_link_comp,localHtml){
    for (let i = 1; i < page_number; i ++){
		let lien = (url+link+i)		
			const response = await fetch(lien);
  			const myJson = await response.json();
			myJson.results.forEach(element =>{
				
		// Création des balises qui vont recupérer les liens des images
				newDiv = document.createElement("div");
				newDiv.classList.add("filmsBiography");
				section3.appendChild(newDiv);

				newPic = document.createElement("picture");
				newDiv.appendChild(newPic);

				newImg = document.createElement("img");
				newImg.setAttribute("src", element.image_url);
				newImg.classList.add(localHtml);
				newPic.appendChild(newImg);

		// Créations des balises qui vont afficher les modals pour chaque films 
				newDiv1 = document.createElement("div");
				newDiv.appendChild(newDiv1);
				newDiv1.setAttribute("id", "myModal4");
				newDiv1.classList.add("modal");

				newDiv2 = document.createElement("div");
				newDiv1.appendChild(newDiv2);
				newDiv2.setAttribute("id", "modal-content");	

				newSpan = document.createElement("span");
				newDiv2.appendChild(newSpan);
				newSpan.classList.add("close");
				newSpan.textContent = "&times;"
			});
		}
		// Création de la carrousel de la section 3
		let span = document.getElementsByClassName('fleche3');
		let films = document.getElementsByClassName('filmsBiography');
		let films_page = 25;
		let l = 0;
		let movePer = 90;
		let maxMove = 250;

		// mobile_view	
		let mob_view = window.matchMedia("(max-width: 768px)");
		if (mob_view.matches);
			{
				movePer = 50.36;
				maxMove = 200;
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

// #######################################################################################################################################################

// Appel des fonctions
fetchBestFilm("/titles/?imdb_score_min=9.6&page=1",0, affichage_meuilleur_film);
filmsMieuxNote("/titles/?imdb_score_min=9&page=",4,"", films_les_mieux_notes);
filmsAnimation2020("/titles/?genre=Animation&imdb_score=&imdb_score_max=&imdb_score_min=8.5&page=",5,"",meuilleur_films_d_animation);
filmsAction("/titles/?genre=Action&imdb_score=&imdb_score_max=&imdb_score_min=8.8&page=",4,meuilleur_films_action)
filmsBiography("/titles/?genre=Biography&imdb_score_min=8.5&page=",5,meuilleur_films_biography)