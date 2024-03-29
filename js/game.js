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


/**
 * Initializes the game
 */
function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    bindButtonEvents();
}


/**
 * Stops the game and music
 */
function stopGame() {
    allIntervals.forEach(clearInterval);
    cancelAnimationFrame(world.game);
    BACKGROUND_SOUND_MUSIC.pause();
    BACKGROUND_SOUND_MUSIC.currentTime = 0;
}


/**
 * Shows losing screen
 */
function gameLost() {
    exitFullscreen();
    stopGame();
    toggleSounds(true, 'ingame');
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


/**
 * Shows winning screen
 */
function gameWon() {
    exitFullscreen();
    stopGame();
    toggleSounds(true, 'ingame');
    hideGameScreen();

    document.getElementById('gameWon').classList.remove('d-none');
    GAME_SOUND_WON.play();

    setTimeout(() => {
        document.getElementById('playAgain').classList.remove('d-none');
    }, 3000);
}


/**
 * Restarts game from winning screen
 */
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


/**
 * Restarts game from losing screen
 */
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


/**
 * Shows game screen
 */
function showGameScreen() {
    canvas.classList.remove('d-none');
    document.getElementById('gameTitle').classList.remove('d-none');
    document.getElementById('canvasButtons').classList.remove('d-none');
    document.getElementById('mobileCanvasButtons').classList.remove('d-none');
    document.getElementById('moveButtons').parentElement.classList.remove('d-none');
}


/**
 * Hides game screen
 */
function hideGameScreen() {
    canvas.classList.add('d-none');
    document.getElementById('gameTitle').classList.add('d-none');
    document.getElementById('canvasButtons').classList.add('d-none');
    document.getElementById('mobileCanvasButtons').classList.add('d-none');
    document.getElementById('moveButtons').parentElement.classList.add('d-none');
}


/**
 * Closes start screen
 */
function closeStartScreen() {
    playClickSound();

    document.getElementById('startScreen').classList.add('d-none');

    initLevel();
    init();
}


/**
 * Opens instruction menu
 */
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


/**
 * Closes instruction menu
 */
function closeInstructions() {
    playClickSound();

    let startScreen = document.getElementById('startScreen');

    document.getElementById('instructions').classList.add('d-none');
    startScreen.firstElementChild.classList.remove('d-none');
    startScreen.lastElementChild.classList.remove('d-none');
}


/**
 * Shows the next instruction
 * @param {number} i - Index of the next instruction
 */
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


/**
 * Shows the previous instruction
 * @param {number} i - Index of the previous instruction
 */
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


/**
 * Mutes game sounds and updates the mute button
 */
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


/**
 * Unmutes game sounds and updates the mute button
 */
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


/**
 * Shows canvas in fullscreen
 */
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


/**
 * Exits fullscreen of canvas
 */
function exitFullscreen() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else if (document.webkitFullscreenElement) { // iOS Safari
        document.webkitExitFullscreen();
    } else if (document.msFullscreenElement) { // for IE11 (remove June 15, 2022)
        document.msExitFullscreen();
    }
}


/**
 * Set a stoppable interval
 * @param {function} fn - function to set interval
 * @param {number} time - time between each run
 */
function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    allIntervals.push(id);
}