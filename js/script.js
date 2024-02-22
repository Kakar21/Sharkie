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