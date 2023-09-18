const correctCode = "1234"; // Vous pouvez changer ce code

function checkCode() {
    const userInput = document.getElementById('codeInput').value;

    if (userInput === correctCode) {
        document.getElementById('result').textContent = "Bravo! Vous avez trouvé le code et vous êtes échappé!";
        document.getElementById('result').style.color = "green";
    } else {
        document.getElementById('result').textContent = "Code incorrect. Essayez encore!";
        document.getElementById('result').style.color = "red";
    }
}

