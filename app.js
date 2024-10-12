let milliseconds = 0, seconds = 0, minutes = 0;
let timer;

document.getElementById('start').addEventListener('click', function() {
    clearInterval(timer);
    timer = setInterval(startStopwatch, 10);
});

document.getElementById('stop').addEventListener('click', function() {
    clearInterval(timer);
});

document.getElementById('reset').addEventListener('click', function() {
    clearInterval(timer);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    document.getElementById('milliseconds').textContent = "00";
    document.getElementById('seconds').textContent = "00";
    document.getElementById('minutes').textContent = "00";
});

function startStopwatch() {
    milliseconds += 1;

    if (milliseconds === 100) {
        milliseconds = 0;
        seconds += 1;
    }

    if (seconds === 60) {
        seconds = 0;
        minutes += 1;
    }

    document.getElementById('milliseconds').textContent = formatTime(milliseconds);
    document.getElementById('seconds').textContent = formatTime(seconds);
    document.getElementById('minutes').textContent = formatTime(minutes);
}

function formatTime(value) {
    return value < 10 ? `0${value}` : value;
}
