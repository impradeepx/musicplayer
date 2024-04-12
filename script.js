const audio = document.getElementById('audio');

function playPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function stop() {
    audio.pause();
    audio.currentTime = 0;
}

function setVolume() {
    const volume = document.getElementById('volume').value;
    audio.volume = volume;
}
