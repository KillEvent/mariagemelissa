window.onload = function() {
    // Première boîte de dialogue
    alert("Bienvenue au mariage de Melissa et Adrien!");

    // Deuxième boîte de dialogue
    alert("Melissa : Quelqu'un a volé mon collier!");

    // Troisième boîte de dialogue
    alert("Melissa : Je suis vraiment paniquée...");

    // Quatrième boîte de dialogue
    const morseCode = "... --- ..."; // Ceci est un exemple de code Morse pour "SOS". Remplacez-le par le code que vous souhaitez utiliser.
    const userInput = prompt("Melissa : On m'a donné ce code secret en Morse : " + morseCode + ". Pouvez-vous le traduire pour moi?");

    // Vérifiez la réponse de l'utilisateur
    if (userInput === "SOS") { // Remplacez "SOS" par la traduction correcte de votre code Morse.
        alert("Melissa : C'est exact! Merci beaucoup pour votre aide.");
    } else {
        alert("Melissa : Ce n'est pas la bonne traduction. Pouvez-vous réessayer?");
        // Vous pouvez ajouter une boucle ici pour permettre à l'utilisateur de réessayer jusqu'à ce qu'il obtienne la bonne réponse.
    }
}
