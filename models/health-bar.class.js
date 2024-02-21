class HealthBar extends DrawableObject {
    percentage = 100;
    width = 180;
    height = 50;
    x = 15;
    y = 0;

    
    constructor() {
        super();
        this.loadImages(HEALTHBAR_IMAGES);
        this.setPercentage(100);
    }


    /**
     * Sets the healthbar to the given number in percent
     * @param {number} percentage 
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = HEALTHBAR_IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }
}