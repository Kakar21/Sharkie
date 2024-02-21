let canvas;
let world;
let keyboard = new Keyboard();
let instructions = [
    './img/6. Button/Instructions 0.png',
    './img/6. Button/Instructions 1.png',
    './img/6. Button/Instructions 2.png'
];
let allIntervals = [];
let imagesLoaded = 0;
let imagesToLoad = 0;
let percent = 0;

// TODO: Clean code

/**
 * Initializes the game
 */
function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    bindButtonEvents();
}

function stopGame() {
    allIntervals.forEach(clearInterval);
    cancelAnimationFrame(world.game);
    BACKGROUND_SOUND_MUSIC.pause();
    BACKGROUND_SOUND_MUSIC.currentTime = 0;
}

function gameLost() {
    stopGame();
    toggleSounds(true, 'ingame');
    exitFullscreen();
    hideGameScreen();

    if (world.character.hitBy === 'JellyFish') {
        document.getElementById('deadSharkie').src = './img/1. Sharkie/6.dead/2.Electro_shock/10.png';
    } else {
        document.getElementById('deadSharkie').src = './img/1. Sharkie/6.dead/1.Poisoned/without float up/12.png';
    }

    document.getElementById('gameLost').classList.remove('d-none');
    GAME_SOUND_LOST.play();

    setTimeout(() => {
        document.getElementById('tryAgain').classList.remove('d-none');
    }, 3000);
}

function gameWon() {
    stopGame();
    toggleSounds(true, 'ingame');
    exitFullscreen();
    hideGameScreen();

    document.getElementById('gameWon').classList.remove('d-none');
    GAME_SOUND_WON.play();

    setTimeout(() => {
        document.getElementById('playAgain').classList.remove('d-none');
    }, 3000);
}


function playAgain() {

    if (!muted) {
        toggleSounds(false, 'ingame');
    }

    document.getElementById('gameWon').classList.add('d-none');

    showGameScreen();
    initLevel();
    init();

    setTimeout(() => {
        document.getElementById('playAgain').classList.add('d-none');
    }, 3000);
}


function tryAgain() {

    if (!muted) {
        toggleSounds(false, 'ingame');
    }

    document.getElementById('gameLost').classList.add('d-none');

    showGameScreen();
    initLevel();
    init();

    setTimeout(() => {
        document.getElementById('tryAgain').classList.add('d-none');
    }, 3000);
}


function showGameScreen() {
    canvas.classList.remove('d-none');
    document.getElementById('gameTitle').classList.remove('d-none');
    document.getElementById('canvasButtons').classList.remove('d-none');
    document.getElementById('mobileCanvasButtons').classList.remove('d-none');
    document.getElementById('moveButtons').parentElement.classList.remove('d-none');
}


function hideGameScreen() {
    canvas.classList.add('d-none');
    document.getElementById('gameTitle').classList.add('d-none');
    document.getElementById('canvasButtons').classList.add('d-none');
    document.getElementById('mobileCanvasButtons').classList.add('d-none');
    document.getElementById('moveButtons').parentElement.classList.add('d-none');
}


function closeStartScreen() {
    playClickSound();

    document.getElementById('startScreen').classList.add('d-none');

    initLevel();
    init();
}


function openInstructions() {
    playClickSound();

    let container = document.getElementById('instructions');
    let startScreen = document.getElementById('startScreen');
    let i = 0;

    container.innerHTML = /* html */ `
        <img onclick="closeInstructions()" id="instructionsClose" src="./img/6. Button/Other/close.svg" alt="Close">
        <img onclick="previousInstruction(${i - 1})" src="./img/6. Button/Other/left.png" alt="Previous">
        <img src="${instructions[i]}">
        <img onclick="nextInstruction(${i + 1})" src="./img/6. Button/Other/right.png" alt="Next">
        `;

    startScreen.firstElementChild.classList.add('d-none');
    startScreen.lastElementChild.classList.add('d-none');
    container.classList.remove('d-none');
}

function closeInstructions() {
    playClickSound();

    let startScreen = document.getElementById('startScreen');

    document.getElementById('instructions').classList.add('d-none');
    startScreen.firstElementChild.classList.remove('d-none');
    startScreen.lastElementChild.classList.remove('d-none');
}


function nextInstruction(i) {
    playClickSound();

    if (i > 2) {
        i = 0;
    }

    document.getElementById('instructions').innerHTML = /* html */ `
        <img onclick="closeInstructions()" id="instructionsClose" src="./img/6. Button/Other/close.svg" alt="Close">
        <img onclick="previousInstruction(${i - 1})" src="./img/6. Button/Other/left.png" alt="Previous">
        <img src="${instructions[i]}">
        <img onclick="nextInstruction(${i + 1})" src="./img/6. Button/Other/right.png" alt="Next">
    `;
}


function previousInstruction(i) {
    playClickSound();

    if (i < 0) {
        i = 2;
    }

    document.getElementById('instructions').innerHTML = /* html */ `
        <img onclick="closeInstructions()" id="instructionsClose" src="./img/6. Button/Other/close.svg" alt="Close">
        <img onclick="previousInstruction(${i - 1})" src="./img/6. Button/Other/left.png" alt="Previous">
        <img src="${instructions[i]}">
        <img onclick="nextInstruction(${i + 1})" src="./img/6. Button/Other/right.png" alt="Next">
    `;
}


function muteGame() {
    playClickSound();
    toggleSounds(true);

    let muteButton = document.getElementById('canvasButtons').lastElementChild.firstElementChild;
    let muteButtonMobile = document.getElementById('mobileCanvasButtons').firstElementChild;

    muteButton.src = './img/6. Button/Other/muted.png';
    muteButtonMobile.src = './img/6. Button/Other/muted.png';
    muteButton.setAttribute('onclick', 'unmuteGame()');
    muteButtonMobile.setAttribute('onclick', 'unmuteGame()');
}

function unmuteGame() {
    playClickSound();
    toggleSounds(false);

    let muteButton = document.getElementById('canvasButtons').lastElementChild.firstElementChild;
    let muteButtonMobile = document.getElementById('mobileCanvasButtons').firstElementChild;

    muteButton.src = './img/6. Button/Other/unmuted.png';
    muteButtonMobile.src = './img/6. Button/Other/unmuted.png';
    muteButton.setAttribute('onclick', 'muteGame()');
    muteButtonMobile.setAttribute('onclick', 'muteGame()');
}


function enterFullscreen() {
    playClickSound();
    let element = document.querySelector('canvas');

    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {  // iOS Safari
        element.webkitRequestFullscreen();
    }
}


function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}


function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    allIntervals.push(id);
}

// Keyboard Events
window.addEventListener('keydown', (event) => {
    if (event.keyCode === 37) {
        keyboard.LEFT = true;
    }

    if (event.keyCode === 38) {
        keyboard.UP = true;
    }

    if (event.keyCode === 39) {
        keyboard.RIGHT = true;
    }

    if (event.keyCode === 40) {
        keyboard.DOWN = true;
    }

    if (event.keyCode === 32) {
        keyboard.SPACE = true;
    }

    if (event.keyCode === 72) {
        keyboard.H = true;
    }

    if (event.keyCode === 74) {
        keyboard.J = true;
    }

    if (event.keyCode === 87) {
        keyboard.W = true;
    }

    if (event.keyCode === 65) {
        keyboard.A = true;
    }

    if (event.keyCode === 83) {
        keyboard.S = true;
    }

    if (event.keyCode === 68) {
        keyboard.D = true;
    }
});

window.addEventListener('keyup', (event) => {
    if (event.keyCode === 37) {
        keyboard.LEFT = false;
    }

    if (event.keyCode === 38) {
        keyboard.UP = false;
    }

    if (event.keyCode === 39) {
        keyboard.RIGHT = false;
    }

    if (event.keyCode === 40) {
        keyboard.DOWN = false;
    }

    if (event.keyCode === 32) {
        keyboard.SPACE = false;
    }

    if (event.keyCode === 72) {
        keyboard.H = false;
    }

    if (event.keyCode === 74) {
        keyboard.J = false;
    }

    if (event.keyCode === 87) {
        keyboard.W = false;
    }

    if (event.keyCode === 65) {
        keyboard.A = false;
    }

    if (event.keyCode === 83) {
        keyboard.S = false;
    }

    if (event.keyCode === 68) {
        keyboard.D = false;
    }
});


// Mobile Button Events
function bindButtonEvents() {
    document.getElementById('right').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    });

    document.getElementById('right').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.RIGHT = false;
    });

    document.getElementById('left').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    });

    document.getElementById('left').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.LEFT = false;
    });

    document.getElementById('up').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.UP = true;
    });

    document.getElementById('up').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.UP = false;
    });

    document.getElementById('down').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.DOWN = true;
    });

    document.getElementById('down').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.DOWN = false;
    });

    document.getElementById('finslap').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.SPACE = true;
    });

    document.getElementById('finslap').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.SPACE = false;
    });

    document.getElementById('bubbleTrap').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.H = true;
    });

    document.getElementById('bubbleTrap').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.H = false;
    });

    document.getElementById('bubbleTrapPoison').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.J = true;
    });

    document.getElementById('bubbleTrapPoison').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.J = false;
    });
}

// TODO: Fix all console errors