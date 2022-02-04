let audio;
let dataKey = document.querySelectorAll("button");

function removeClass() {
    for (let i = 0; dataKey.length; ++i) {
        dataKey[i].classList.remove("playing");
    }
}
document.querySelector('body').addEventListener('keydown', function(event) {
    var key = event.keyCode;
    switch (key) {
        case 65:
            playClap();
            document.addEventListener('keyup', removeClass);
            break;
        case 83:
            playHihat();
            break;
        case 68:
            playKick();
            break;
        case 70:
            playOpenHat();
            break;
        case 71:
            playBoom();
            break;
        case 72:
            playRide();
            break;
        case 74:
            playSnare();
            break;
        case 75:
            playTom();
            break;
        case 76:
            playTink();
            break;
    }
});

function playClap() {
    audio = new Audio("/sounds/clap.wav");
    audio.play();
    dataKey[0].classList.add("playing");
}

function playHihat() {
    audio = new Audio("/sounds/hihat.wav");
    audio.play();
    dataKey[1].classList.add("playing");
}

function playKick() {
    audio = new Audio("/sounds/kick.wav");
    audio.play();
    dataKey[2].classList.add("playing");
}

function playOpenHat() {
    audio = new Audio("/sounds/openhat.wav");
    audio.play();
    dataKey[3].classList.add("playing");
}

function playBoom() {
    audio = new Audio("/sounds/boom.wav");
    audio.play();
    dataKey[4].classList.add("playing");
}

function playRide() {
    audio = new Audio("/sounds/ride.wav");
    audio.play();
    dataKey[5].classList.add("playing");
}

function playSnare() {
    audio = new Audio("/sounds/snare.wav");
    audio.play();
    dataKey[6].classList.add("playing");
}

function playTom() {
    audio = new Audio("/sounds/tom.wav");
    audio.play();
    dataKey[7].classList.add("playing");
}

function playTink() {
    audio = new Audio("/sounds/tink.wav");
    audio.play();
    dataKey[8].classList.add("playing");
}