// script.js
document.getElementById('startButton').addEventListener('click', startMeditation);
document.getElementById('endButton').addEventListener('click', endMeditation);
document.getElementById('shareButton').addEventListener('click', shareSession);

let timerInterval;
let startTime;

function startMeditation() {
    const bellSound = document.getElementById('bellSound');
    const breathingSound = document.getElementById('breathingSound');
    const startButton = document.getElementById('startButton');
    const endButton = document.getElementById('endButton');
    const shareButton = document.getElementById('shareButton');
    const timer = document.getElementById('timer');

    // Play the bell sound at the start
    bellSound.play();

    // Start the breathing sound after the bell sound ends
    bellSound.onended = () => {
        breathingSound.play();
    };

    // Hide the start button and show the end button
    startButton.style.display = 'none';
    endButton.style.display = 'inline-block';
    shareButton.style.display = 'none';

    // Start timer
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);

    // End meditation automatically after 3 minutes (180,000 milliseconds)
    setTimeout(endMeditation, 180000);
}

function endMeditation() {
    const breathingSound = document.getElementById('breathingSound');
    const endButton = document.getElementById('endButton');
    const startButton = document.getElementById('startButton');
    const shareButton = document.getElementById('shareButton');
    const bellSound = document.getElementById('bellSound');
    const timer = document.getElementById('timer');

    // Pause the breathing sound and reset its time
    breathingSound.pause();
    breathingSound.currentTime = 0;

    // Play the bell sound to indicate end of meditation
    bellSound.play();

    // Hide the end button and show the start button
    endButton.style.display = 'none';
    startButton.style.display = 'inline-block';
    shareButton.style.display = 'inline-block';

    // Stop timer
    clearInterval(timerInterval);

    // Reset timer display
    timer.textContent = '00:00';
}

function updateTimer() {
    const timer = document.getElementById('timer');
    const elapsed = Date.now() - startTime;
    const minutes = Math.floor(elapsed / 60000);
    const seconds = Math.floor((elapsed % 60000) / 1000);
    timer.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function shareSession() {
    const shareData = {
        title: 'Breathing Exercise Session',
        text: 'I just completed a 3-minute breathing exercise session!',
        url: window.location.href
    };

    if (navigator.share) {
        navigator.share(shareData)
            .then(() => console.log('Session shared successfully'))
            .catch((error) => console.error('Error sharing session:', error));
    } else {
        alert('Sharing is not supported in this browser.');
    }
}
