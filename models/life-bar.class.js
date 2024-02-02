class LifeBar extends DrawableObject {

    percentage = 100;
    width = 180;
    height = 50;
    x = 15;
    y = 0;

    IMAGES_LIFE = [
        '../img/4. Score/orange/0_life.png',
        '../img/4. Score/orange/20_life.png',
        '../img/4. Score/orange/40_life.png',
        '../img/4. Score/orange/60_life.png',
        '../img/4. Score/orange/80_life.png',
        '../img/4. Score/orange/100_life.png'
    ]
    //TODO: Position all bars perfectly



    constructor() {
        super();
        this.loadImages(this.IMAGES_LIFE);
        this.setPercentage(100);
    }


    /**
     * Sets the lifebar to the given number in percent
     * @param {number} percentage 
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_LIFE[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }
}