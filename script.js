
document.addEventListener("DOMContentLoaded", function() {
    const gameType = document.getElementById("gameType");
    const animator = document.getElementById("animator");
    const costumeBox = document.getElementById("costumeBox");
    const playerExtension = document.getElementById("playerExtension");
    const totalPrice = document.getElementById("totalPrice");
    const calculateButton = document.getElementById("calculateButton");

    calculateButton.addEventListener("click", function() {
        let total = parseFloat(gameType.value) + parseFloat(animator.value);

        if (costumeBox.checked) {
            total += parseFloat(costumeBox.value);
        }

        if (playerExtension.checked) {
            total += parseFloat(playerExtension.value);
        }

        totalPrice.textContent = total.toFixed(2) + "€";
    });
});
