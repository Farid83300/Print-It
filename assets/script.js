const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Flèche gauche et droite du slider

let boutonGauche = document.getElementById('bouton-gauche');
boutonGauche.addEventListener('click', function(){
	console.log('click');
});

let boutonDroit = document.getElementById('bouton-droit');
boutonDroit.addEventListener('click', function(){
	console.log('click');
});

// Gestion des boutons gauche/droit
boutonGauche.addEventListener('click', function(){
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider(currentIndex);
});

boutonDroit.addEventListener('click', function(){
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider(currentIndex);
});


const dots = document.querySelectorAll('.dot');
let currentIndex = 0; // Index du slide actuel

function updateSlider(index) {
    // Met à jour l'image et le texte
    document.querySelector('.banner-img').src = `./assets/images/slideshow/${slides[index].image}`;
    document.querySelector('#banner p').innerHTML = slides[index].tagLine;

    // Met à jour les dots
    dots.forEach(dot => dot.classList.remove('dot_selected'));
    dots[index].classList.add('dot_selected');
}



// Gestion du clic sur les dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider(currentIndex);
    });
});

// Initialisation
updateSlider(currentIndex);