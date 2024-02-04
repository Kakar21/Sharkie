class JellyFish extends MoveableObject {

    width = 66.66;
    height = 100;
    offset = {
        top: 5,
        right: 2,
        bottom: 15,
        left: 0
    };
    color;

    IMAGES_SWIM = {
        PURPLE: [
            '../img/2. Enemy/2 Jelly fish/Regular damage/Lila 1.png',
            '../img/2. Enemy/2 Jelly fish/Regular damage/Lila 2.png',
            '../img/2. Enemy/2 Jelly fish/Regular damage/Lila 3.png',
            '../img/2. Enemy/2 Jelly fish/Regular damage/Lila 4.png'
        ],
        YELLOW: [
            '../img/2. Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
            '../img/2. Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
            '../img/2. Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
            '../img/2. Enemy/2 Jelly fish/Regular damage/Yellow 4.png'
        ],
        GREEN: [
            '../img/2. Enemy/2 Jelly fish/Súper dangerous/Green 1.png',
            '../img/2. Enemy/2 Jelly fish/Súper dangerous/Green 2.png',
            '../img/2. Enemy/2 Jelly fish/Súper dangerous/Green 3.png',
            '../img/2. Enemy/2 Jelly fish/Súper dangerous/Green 4.png'
        ],
        PINK: [
            '../img/2. Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
            '../img/2. Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
            '../img/2. Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
            '../img/2. Enemy/2 Jelly fish/Súper dangerous/Pink 4.png'
        ]
    }

    IMAGES_DEAD = {
        PURPLE: [
            '../img/2. Enemy/2 Jelly fish/Dead/Lila/L1.png',
            '../img/2. Enemy/2 Jelly fish/Dead/Lila/L2.png',
            '../img/2. Enemy/2 Jelly fish/Dead/Lila/L3.png',
            '../img/2. Enemy/2 Jelly fish/Dead/Lila/L4.png'
        ],
        YELLOW: [
            '../img/2. Enemy/2 Jelly fish/Dead/Yellow/y1.png',
            '../img/2. Enemy/2 Jelly fish/Dead/Yellow/y2.png',
            '../img/2. Enemy/2 Jelly fish/Dead/Yellow/y3.png',
            '../img/2. Enemy/2 Jelly fish/Dead/Yellow/y4.png'
        ],
        GREEN: [
            '../img/2. Enemy/2 Jelly fish/Dead/green/g1.png',
            '../img/2. Enemy/2 Jelly fish/Dead/green/g2.png',
            '../img/2. Enemy/2 Jelly fish/Dead/green/g3.png',
            '../img/2. Enemy/2 Jelly fish/Dead/green/g4.png'
        ],
        PINK: [
            '../img/2. Enemy/2 Jelly fish/Dead/Pink/P1.png',
            '../img/2. Enemy/2 Jelly fish/Dead/Pink/P2.png',
            '../img/2. Enemy/2 Jelly fish/Dead/Pink/P3.png',
            '../img/2. Enemy/2 Jelly fish/Dead/Pink/P4.png'
        ]
    }


    constructor(charged) {
        super();
        this.color = this.getColor(charged);
        this.loadImage(this.IMAGES_SWIM[this.color][0]);
        this.x = 400 + Math.random() * (3460 - this.width)// (Endboss Position - 720 canvas width + endboss width - 400 (added at the beginning)) ;
        this.y = Math.random() * (480 - this.height);
        this.speed = 0.1 + Math.random() * 0.5;


        this.loadImages(this.IMAGES_SWIM[this.color]);
        this.loadImages(this.IMAGES_DEAD[this.color]);
        this.animate();
    }


    /**
     * Gets a random color based on the type of jelly fish
     * @param {string} charged - any
     * @returns - string
     */
    getColor(charged) {
        let random;

        if (charged) {
            random = 2 + Math.floor(Math.random() * 2);
        } else {
            random = Math.floor(Math.random() * 2);
        }

        if (random == 0) {
            return 'PURPLE';
        } else if (random == 1) {
            return 'YELLOW';
        } else if (random == 2) {
            return 'GREEN';
        } else if (random == 3) {
            return 'PINK';
        }
    }


    /**
     * Checks jelly fish state to play animations in a loop
     */
    animate() {
        this.moveUpAndDown();

        // Animation
        setInterval(() => {

            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD[this.color]);
                this.y -= 10;
            } else {
                this.playAnimation(this.IMAGES_SWIM[this.color]);
            }
        }, 100);
    }
}