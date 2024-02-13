let canvas;
let world;
let keyboard = new Keyboard();
let instructions = [
    './img/6. Button/Instructions 0.png',
    './img/6. Button/Instructions 1.png',
    './img/6. Button/Instructions 2.png'
];


/**
 * Initializes the game
 */
function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    

    console.log('My Character is', world.character);
}


function openInstructions() {
    let container = document.getElementById('instructions');
    let i = 0;

    container.innerHTML = /* html */ `
        <img onclick="closeInstructions()" id="instructionsClose" src="./img/6. Button/Other/close.svg" alt="Close">
        <img onclick="previousInstruction(${i - 1})" src="./img/6. Button/Other/left.png" alt="Previous">
        <img src="${instructions[0]}">
        <img onclick="nextInstruction(${i + 1})" src="./img/6. Button/Other/right.png" alt="Next">
        `;

    container.classList.remove('d-none');
}


function closeInstructions() {
    document.getElementById('instructions').classList.add('d-none');
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

// TODO: Add start game function
// TODO: Add instruction on start screen
// TODO: Add play again screen
// TODO: Add win screen

// TODO: Add mobile version

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