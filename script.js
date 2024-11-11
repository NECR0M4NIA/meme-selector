function jouerSon() {
    // Récupérer l'élément audio et jouer le son
    document.getElementById("son-fart").play();
}

// Sélectionne toutes les images
const images = document.querySelectorAll('.meme-picture');
// Sélectionne le son
const son = document.getElementById('son-hover');

// Joue le son au survol de chaque image
images.forEach(image => {
    image.addEventListener('mouseover', () => {
        son.currentTime = 0; // Remet à zéro le son pour qu'il rejoue à chaque survol
        son.play();
    });
});