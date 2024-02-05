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
    }
    color;
    hasPuffedUp = false;
    isPuffingUp = false;
    dead = false;

    IMAGES_SWIM = {
        GREEN: [
            '../img/2. Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
        ],
        ORANGE: [
            '../img/2. Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png'
        ],
        RED: [
            '../img/2. Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png'
        ]
    };

    IMAGES_PUFFING_UP = {
        GREEN: [
            '../img/2. Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png'
        ],
        ORANGE: [
            '../img/2. Enemy/1.Puffer fish (3 color options)/2.transition/2.transition1.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/2.transition/2.transition2.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/2.transition/2.transition3.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/2.transition/2.transition4.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/2.transition/2.transition5.png'
        ],
        RED: [
            '../img/2. Enemy/1.Puffer fish (3 color options)/2.transition/3.transition1.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/2.transition/3.transition2.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/2.transition/3.transition3.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/2.transition/3.transition4.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/2.transition/3.transition5.png'
        ]
    };

    IMAGES_PUFFED_SWIM = {
        GREEN: [
            '../img/2. Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim1.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim2.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim3.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim4.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim5.png'
        ],
        ORANGE: [
            '../img/2. Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim1.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim2.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim3.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim4.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim5.png'
        ],
        RED: [
            '../img/2. Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim1.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim2.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim3.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim4.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim5.png'
        ]
    };

    IMAGES_DEAD = {
        GREEN: [
            '../img/2. Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 1 (can animate by going up).png'
        ],
        ORANGE: [
            '../img/2. Enemy/1.Puffer fish (3 color options)/4.DIE/2.png'
        ],
        RED: [
            '../img/2. Enemy/1.Puffer fish (3 color options)/4.DIE/3.png'
        ]
    }


    constructor() {
        super();
        this.color = this.getColor();
        this.loadImage(this.IMAGES_SWIM[this.color][0]);
        this.x = 400 + Math.random() * (3460 - this.width)// (Endboss Position - 720 canvas width + endboss width - 400 (added at the beginning)) ;
        this.y = Math.random() * (480 - this.height);
        this.speed = 0.1 + Math.random() * 0.5;

        this.loadImages(this.IMAGES_DEAD[this.color]);
        this.loadImages(this.IMAGES_SWIM[this.color]);
        this.loadImages(this.IMAGES_PUFFING_UP[this.color]);
        this.loadImages(this.IMAGES_PUFFED_SWIM[this.color]);
        this.animate();
    }


    /**
     * Gets a random color
     * @returns - string
     */
    getColor() {
        let random = Math.floor(Math.random() * 3);

        if (random == 0) {
            return 'GREEN';
        } else if (random == 1) {
            return 'ORANGE';
        } else if (random == 2) {
            return 'RED';
        }
    }

    //TODO: Change hit box when puffed up

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
                this.playAnimation(this.IMAGES_PUFFED_SWIM[this.color]);
            } else {
                this.playAnimation(this.IMAGES_SWIM[this.color]);
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
        this.playAnimation(this.IMAGES_PUFFING_UP[this.color]);

        if (this.currentImage >= this.IMAGES_PUFFING_UP[this.color].length) {
            this.isPuffingUp = false;
            this.hasPuffedUp = true;
        }
    }

    playDead() {
        this.playAnimation(this.IMAGES_DEAD[this.color]);

        if (!this.dead) {
            this.dead = true;
            setInterval(() => {
                this.x += 5
                this.y -= 6
            }, 1000 / 60)
        }
    }

}