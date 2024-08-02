// script.js

document.addEventListener("DOMContentLoaded", function () {
    const uploadInput = document.getElementById("upload");
    const headImg = document.getElementById("head");
    const bonkSound = document.getElementById("bonk-sound");
    const bonkCounter = document.getElementById("bonk-counter");
    let bonkCount = 0;

    // Handle image upload
    uploadInput.addEventListener("change", function (event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            headImg.src = e.target.result;
        };

        reader.readAsDataURL(file);
    });

    // Handle bonk
    headImg.addEventListener("click", function () {
        bonkSound.play();
        bonkCount++;
        bonkCounter.textContent = `Bonks: ${bonkCount}`;
    });

    // Change cursor to baseball bat
    headImg.addEventListener("mouseover", function () {
        headImg.style.cursor = "url('bat.png'), auto";
    });
});
