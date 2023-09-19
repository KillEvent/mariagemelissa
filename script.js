document.addEventListener("DOMContentLoaded", function() {
    const gameType = document.getElementById("gameType");
    const animator = document.getElementById("animator");
    const distanceField = document.getElementById("distanceField");
    const distance = document.getElementById("distance");
    const costumeBox = document.getElementById("costumeBox");
    const playerExtension = document.getElementById("playerExtension");
    const totalPrice = document.getElementById("totalPrice");
    const calculateButton = document.getElementById("calculateButton");

    animator.addEventListener("change", function() {
        if (animator.value === "250") {
            distanceField.style.display = "block";
        } else {
            distanceField.style.display = "none";
        }
    });

    calculateButton.addEventListener("click", function() {
        let total = parseFloat(gameType.value) + parseFloat(animator.value);

        if (animator.value === "250") {
            total += parseFloat(distance.value) * 0.50;
        }

        if (costumeBox.checked) {
            total += parseFloat(costumeBox.value);
        }

        if (playerExtension.checked) {
            total += parseFloat(playerExtension.value);
        }

        totalPrice.textContent = total.toFixed(2) + "€";
    });
});
