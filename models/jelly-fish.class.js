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


    constructor(charged) {
        super();
        this.color = this.getColor(charged);
        this.loadImage(JELLYFISH_IMAGES_SWIM[this.color][0]);
        this.x = 400 + Math.random() * (3460 - this.width)// (Endboss Position - 720 canvas width + endboss width - 400 (added at the beginning)) ;
        this.y = Math.random() * (480 - this.height);
        this.speed = 0.1 + Math.random() * 0.5;


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
                this.playAnimation(JELLYFISH_IMAGES_DEAD[this.color]);
                this.y -= 4;
            } else {
                this.playAnimation(JELLYFISH_IMAGES_SWIM[this.color]);
            }
        }, 100);
    }
}