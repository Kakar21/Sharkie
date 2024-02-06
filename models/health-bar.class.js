class HealthBar extends DrawableObject {

    percentage = 100;
    width = 180;
    height = 50;
    x = 15;
    y = 0;

    IMAGES_LIFE = [
        '../img/4. Score/orange/health-bar_1.png',
        '../img/4. Score/orange/health-bar_2.png',
        '../img/4. Score/orange/health-bar_3.png',
        '../img/4. Score/orange/health-bar_4.png',
        '../img/4. Score/orange/health-bar_5.png',
        '../img/4. Score/orange/health-bar_6.png'
    ]



    constructor() {
        super();
        this.loadImages(this.IMAGES_LIFE);
        this.setPercentage(100);
    }


    /**
     * Sets the healthbar to the given number in percent
     * @param {number} percentage 
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_LIFE[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }
}