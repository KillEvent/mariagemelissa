const dog = document.getElementById('dog');
const door = document.getElementById('door');
const growlSound = document.getElementById('growlSound');

let hasPetTheDog = false;

dog.addEventListener('mouseover', function() {
    if (!hasPetTheDog) {
        growlSound.play();
    }
});

dog.addEventListener('click', function() {
    hasPetTheDog = true;
    alert("Vous avez caressé le chien. Il semble plus content maintenant.");
    dog.src = "chemin_vers_votre_image_de_chien_content.jpg"; // Changez l'image du chien pour montrer qu'il est content
});

door.addEventListener('click', function() {
    if (hasPetTheDog) {
        alert("Bravo! Vous avez su qu'il fallait caresser le chien pour entrer dans la maison.");
    } else {
        alert("Le chien ne semble pas content. Peut-être devriez-vous essayer de le caresser d'abord.");
    }
});
