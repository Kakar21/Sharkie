let canvas;
let world;
let keyboard = new Keyboard();
let instructions = [
    './img/6. Button/Instructions 0.png',
    './img/6. Button/Instructions 1.png',
    './img/6. Button/Instructions 2.png'
];
allIntervals = [];


/**
 * Initializes the game
 */
function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);


    console.log('My Character is', world.character);
}

// TODO: Add menu click sound


function stopGame() {
    allIntervals.forEach(clearInterval);
    cancelAnimationFrame(world.game);
}

function gameLost() {
    stopGame();
    toggleSounds(true);
    exitFullscreen();

    canvas.classList.add('d-none');
    document.getElementById('gameTitle').classList.add('d-none');
    document.getElementById('buttons').classList.add('d-none');

    if (world.character.hitBy === 'JellyFish') {
        document.getElementById('deadSharkie').src = './img/1. Sharkie/6.dead/2.Electro_shock/10.png'
    } else {
        document.getElementById('deadSharkie').src = './img/1. Sharkie/6.dead/1.Poisoned/without float up/12.png'
    }

    document.getElementById('gameLost').classList.remove('d-none');

    setTimeout(() => {
        document.getElementById('tryAgain').classList.remove('d-none')
    }, 3000);
}

function gameWon() {
    stopGame();
    toggleSounds(true);
    exitFullscreen();

    canvas.classList.add('d-none');
    document.getElementById('gameTitle').classList.add('d-none');
    document.getElementById('buttons').classList.add('d-none');
    document.getElementById('gameWon').classList.remove('d-none');

    setTimeout(() => {
        document.getElementById('playAgain').classList.remove('d-none')
    }, 3000);
}


function playAgain() {
    document.getElementById('gameWon').classList.add('d-none');
    canvas.classList.remove('d-none');
    toggleSounds(false);
    document.getElementById('gameTitle').classList.remove('d-none');
    document.getElementById('buttons').classList.remove('d-none');

    initLevel();
    init();

    setTimeout(() => {
        document.getElementById('playAgain').classList.add('d-none');
    }, 3000);
}


function tryAgain() {
    document.getElementById('gameLost').classList.add('d-none');
    canvas.classList.remove('d-none');
    toggleSounds(false);
    document.getElementById('gameTitle').classList.remove('d-none');
    document.getElementById('buttons').classList.remove('d-none');

    initLevel();
    init();

    setTimeout(() => {
        document.getElementById('tryAgain').classList.add('d-none');
    }, 3000);
}
    // TODO: Add game over sound + game won sound


function closeStartScreen() {
    document.getElementById('startScreen').classList.add('d-none');

    initLevel();
    init();
}

// TODO: Start screen title music?
// TODO: Add loading screen?

function openInstructions() {
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
    let startScreen = document.getElementById('startScreen');

    document.getElementById('instructions').classList.add('d-none');
    startScreen.firstElementChild.classList.remove('d-none');
    startScreen.lastElementChild.classList.remove('d-none');
}


function nextInstruction(i) {
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
    toggleSounds(true);

    let muteButton = document.getElementById('buttons').lastElementChild.firstElementChild;

    muteButton.src = './img/6. Button/Other/muted.png';
    muteButton.setAttribute('onclick', 'unmuteGame()');
}


function unmuteGame() {
    toggleSounds(false);

    let muteButton = document.getElementById('buttons').lastElementChild.firstElementChild;

    muteButton.src = './img/6. Button/Other/unmuted.png';
    muteButton.setAttribute('onclick', 'muteGame()');
}


function enterFullscreen() {
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

// TODO: Add mobile version

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
})


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
})


// TODO: Delete all console logs & frames