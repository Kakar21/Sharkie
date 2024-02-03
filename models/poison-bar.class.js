class PoisonBar extends DrawableObject {

    percentage = 0;
    width = 180;
    height = 50;
    x = 15;
    y = 80;

    IMAGES_POISON = [
        '../img/4. Score/orange/poison-bar_1.png',
        '../img/4. Score/orange/poison-bar_2.png',
        '../img/4. Score/orange/poison-bar_3.png',
        '../img/4. Score/orange/poison-bar_4.png',
        '../img/4. Score/orange/poison-bar_5.png',
        '../img/4. Score/orange/poison-bar_6.png',
    ]
    

    constructor() {
        super();
        this.loadImages(this.IMAGES_POISON);

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