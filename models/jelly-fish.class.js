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
    offsets = {
        normal: {
            top: 5,
            right: 2,
            bottom: 15,
            left: 0
        },
        dead: {
            top: 14,
            right: 5,
            bottom: 28,
            left: 5
        }
    };
    axis;


    constructor(axis, x, y, speed, charged) {
        super();
        this.color = this.getColor(charged);
        this.loadImage(JELLYFISH_IMAGES_SWIM[this.color][0]);
        this.axis = axis;
        this.x = x;
        this.y = y;
        this.speed = speed;

        this.loadImages(JELLYFISH_IMAGES_SWIM[this.color]);
        this.loadImages(JELLYFISH_IMAGES_DEAD[this.color]);
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

        if (random === 0) {
            return 'PURPLE';
        } else if (random === 1) {
            return 'YELLOW';
        } else if (random === 2) {
            return 'GREEN';
        } else if (random === 3) {
            return 'PINK';
        }
    }


    /**
     * Checks jelly fish state to play animations in a loop
     */
    animate() {
        
        // Movement
        if (this.axis === 'vertical') {
            this.moveUpAndDown();
        } else if (this.axis === 'horizontal') {
            this.moveLeftAndRight();
        }

        // Animation
        setStoppableInterval(() => {
            if (this.isDead()) {
                this.playAnimation(JELLYFISH_IMAGES_DEAD[this.color]);
                this.offset = this.offsets.dead;
                this.y -= 6;
            } else {
                this.playAnimation(JELLYFISH_IMAGES_SWIM[this.color]);
            }
        }, 100);
    }
}