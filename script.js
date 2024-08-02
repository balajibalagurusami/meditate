// script.js
document.getElementById('startButton').addEventListener('click', startMeditation);
document.getElementById('endButton').addEventListener('click', endMeditation);

function startMeditation() {
    const bellSound = document.getElementById('bellSound');
    const breathingSound = document.getElementById('breathingSound');
    const startButton = document.getElementById('startButton');
    const endButton = document.getElementById('endButton');

    // Play the bell sound at the start
    bellSound.play();

    // Start the breathing sound after the bell sound ends
    bellSound.onended = () => {
        breathingSound.play();
    };

    // Hide the start button and show the end button
    startButton.style.display = 'none';
    endButton.style.display = 'inline-block';

    // End meditation automatically after 3 minutes (180,000 milliseconds)
    setTimeout(endMeditation, 180000);
}

function endMeditation() {
    const breathingSound = document.getElementById('breathingSound');
    const endButton = document.getElementById('endButton');
    const startButton = document.getElementById('startButton');
    const bellSound = document.getElementById('bellSound');

    // Pause the breathing sound and reset its time
    breathingSound.pause();
    breathingSound.currentTime = 0;

    // Play the bell sound to indicate end of meditation
    bellSound.play();

    // Hide the end button and show the start button
    endButton.style.display = 'none';
    startButton.style.display = 'inline-block';
}
