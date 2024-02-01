class PoisonBar extends DrawableObject {

    percentage = 0;

    IMAGES_POISON = [
        '../img/4. Score/orange/0_poison.png',
        '../img/4. Score/orange/20_poison.png',
        '../img/4. Score/orange/40_poison.png',
        '../img/4. Score/orange/60_poison.png',
        '../img/4. Score/orange/80_poison.png',
        '../img/4. Score/orange/100_poison.png'
    ]


    constructor() {
        super();
        this.loadImages(this.IMAGES_POISON);
        this.x = 30;
        this.y = 100;
        this.width = 200;
        this.height = 60;
        this.setPercentage(0);
    }


    /**
     * Sets the poisonbar to the given number in percent
     * @param {number} percentage 
     */
    setPercentage(percentage) {
        if (this.percentage <= 100) {
            this.percentage = percentage;
            let path = this.IMAGES_POISON[this.resolveImageIndex()];
            this.img = this.imageCache[path];
        }
    }
}