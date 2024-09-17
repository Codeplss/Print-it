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


// Selectionnez les éléments HTML pertinents
const bannerImg = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
const dotsContainer = document.querySelector(".dots");
const nextArrow = document.querySelector(".arrow_right");
const prevArrow = document.querySelector(".arrow_left");

// Initialisation de l'index de la diapositive actuelle
let SlideIndex = 0;

// Met a jour la diapositive en fonction de l'index
function updateSlide(index) {    
    const slide = slides[index];
    bannerImg.src = `./assets/images/slideshow/${slide.image}`;
    tagLine.innerHTML = slide.tagLine;

    // Met a jour les points du carrousel
    const dots = dotsContainer.querySelectorAll(".dot");
    dots.forEach((dot, dotIndex) => {
        if (dotIndex === index) {
            dot.classList.add("dot_selected");
        } else {
            dot.classList.remove("dot_selected");
        }
    });
}

// Fonction pour créer les points (dots) en fonction du nombre de diapositives
function createDots() {
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement("div");
        dot.className = "dot";
        dot.addEventListener("click", () => updateSlide(i)); // Ajoutez un gestionnaire de clic pour chaque point
        dotsContainer.appendChild(dot); // Ajoutez le point au conteneur des points
    }
}

// Fonction pour changer de diapositive
function changeSlide(direction) {
    // Met à jour l'index de la diapositive en fonction de la direction
    SlideIndex = (SlideIndex + direction + slides.length) % slides.length;
    updateSlide(SlideIndex); // Met à jour la diapositive affichée
}

// Ajouter des écouteurs d'événements pour les flèches de navigation
nextArrow.addEventListener("click", () => changeSlide(1)); // Passe à la diapositive suivante
prevArrow.addEventListener("click", () => changeSlide(-1)); // Reviens à la diapositive précédente



// Fonction d'initialisation du carrousel
function initCarousel() {
    updateSlide(SlideIndex); // Affiche la première diapositive
    createDots(); // Crée les points de navigation
}

// Appel de la fonction d'initialisation pour démarrer le carrousel
initCarousel();


  

