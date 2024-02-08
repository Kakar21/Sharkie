class PufferFish extends MoveableObject {

    width = 50;
    height = 40;
    offset = {
        top: 4,
        right: 4,
        bottom: 11,
        left: 2
    };
    offsetNear = {
        top: 100,
        right: 100,
        bottom: 100,
        left: 100
    };
    offsets = {
        normal: {
            top: 4,
            right: 4,
            bottom: 11,
            left: 2
        },
        puffed: {
            top: 1,
            right: 4,
            bottom: 1,
            left: 2
        }
    };
    color;
    hasPuffedUp = false;
    isPuffingUp = false;
    dead = false;


    constructor() {
        super();
        this.color = this.getColor();
        this.loadImage(PUFFERFISH_IMAGES_SWIM[this.color][0]);
        this.x = 400 + Math.random() * (3460 - this.width)// (Endboss Position - 720 canvas width + endboss width - 400 (added at the beginning)) ;
        this.y = Math.random() * (480 - this.height);
        this.speed = 0.1 + Math.random() * 0.5;

        this.loadImages(PUFFERFISH_IMAGES_DEAD[this.color]);
        this.loadImages(PUFFERFISH_IMAGES_SWIM[this.color]);
        this.loadImages(PUFFERFISH_IMAGES_PUFFING_UP[this.color]);
        this.loadImages(PUFFERFISH_IMAGES_PUFFED_SWIM[this.color]);
        this.animate();
    }


    /**
     * Gets a random color
     * @returns - string
     */
    getColor() {
        let random = Math.floor(Math.random() * 3);

        if (random === 0) {
            return 'GREEN';
        } else if (random === 1) {
            return 'ORANGE';
        } else if (random === 2) {
            return 'RED';
        }
    }

    
    /**
     * Checks puffer fish state to play animations in a loop
     */
    animate() {
        this.moveLeft();

        setInterval(() => {

            if (this.isDead()) {
                this.playDead();
            } else if (this.isPuffingUp) {
                this.playPuffingUp();
            } else if (this.hasPuffedUp) {
                this.playAnimation(PUFFERFISH_IMAGES_PUFFED_SWIM[this.color]);
            } else {
                this.playAnimation(PUFFERFISH_IMAGES_SWIM[this.color]);
            }
        }, 100);
    }

    startPuffingUp() {
        if (!this.isPuffingUp && !this.hasPuffedUp) {
            this.isPuffingUp = true;
            this.currentImage = 0;
        }
    }

    playPuffingUp() {
        this.playAnimation(PUFFERFISH_IMAGES_PUFFING_UP[this.color]);

        if (this.currentImage >= PUFFERFISH_IMAGES_PUFFING_UP[this.color].length) {
            this.isPuffingUp = false;
            this.offset = this.offsets.puffed;
            this.hasPuffedUp = true;
        }
    }

    playDead() {
        this.playAnimation(PUFFERFISH_IMAGES_DEAD[this.color]);

        if (!this.dead) {
            this.dead = true;
            setInterval(() => {
                this.x += 5
                this.y -= 6
            }, 1000 / 60)
        }
        // TODO: Perfectly adjust knock away speed and direction
    }

}