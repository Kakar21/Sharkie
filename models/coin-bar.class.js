class CoinBar extends DrawableObject {
    percentage = 0;
    width = 180;
    height = 50;
    x = 15;
    y = 40;


    constructor() {
        super();
        this.loadImages(COINBAR_IMAGES);
        this.setPercentage(0);
    }


    /**
     * Sets the coinbar to the given number in percent
     * @param {number} percentage 
     */
    setPercentage(percentage) {
        if (this.percentage <= 100) {
            this.percentage = percentage;
            let path = COINBAR_IMAGES[this.resolveImageIndex()];
            this.img = this.imageCache[path];
        }
    }
}