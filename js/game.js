let canvas;
let world;
let keyboard = new Keyboard();


/**
 * Initializes the game
 */
function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);


    console.log('My Character is', world.character);
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