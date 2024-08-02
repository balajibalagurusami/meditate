let startButton = document.getElementById('start');
let resetButton = document.getElementById('reset');
let minutesDisplay = document.getElementById('minutes');
let secondsDisplay = document.getElementById('seconds');
let timerInterval;
let isRunning = false;

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    let minutes = parseInt(minutesDisplay.textContent);
    let seconds = parseInt(secondsDisplay.textContent);

    timerInterval = setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(timerInterval);
                isRunning = false;
                alert('Time is up!');
                return;
            }
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }

        minutesDisplay.textContent = minutes.toString().padStart(2, '0');
        secondsDisplay.textContent = seconds.toString().padStart(2, '0');
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    minutesDisplay.textContent = '25';
    secondsDisplay.textContent = '00';
}
