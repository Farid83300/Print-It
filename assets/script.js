const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

let currentIndex = 0; // Index du slide actuel

// Récupération des éléments HTML
let boutonGauche = document.getElementById('bouton-gauche');
let boutonDroit = document.getElementById('bouton-droit');
const dotsContainer = document.querySelector('.dots-container');

// Fonction pour mettre à jour l'affichage du slider
function updateSlider(index) {
    // Mise à jour de l'image et du texte
    document.querySelector('.banner-img').src = `./assets/images/slideshow/${slides[index].image}`;
    document.querySelector('#banner p').innerHTML = slides[index].tagLine;

    // Mise à jour des dots
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('dot_selected', i === index);
    });
}

// Gestion des boutons gauche/droit
boutonGauche.addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider(currentIndex);
});

boutonDroit.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider(currentIndex);
});

// Génération dynamique des dots
dotsContainer.innerHTML = ""; // Vide les dots existants
slides.forEach((_, index) => {
    let dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('dot_selected');
    
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider(currentIndex);
    });

    dotsContainer.appendChild(dot);
});

// Initialisation du slider
updateSlider(currentIndex);
