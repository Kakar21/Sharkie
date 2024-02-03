class CoinBar extends DrawableObject {

    percentage = 0;
    width = 180;
    height = 50;
    x = 15;
    y = 40;

    IMAGES_COIN = [
        '../img/4. Score/orange/coin-bar_1.png',
        '../img/4. Score/orange/coin-bar_2.png',
        '../img/4. Score/orange/coin-bar_3.png',
        '../img/4. Score/orange/coin-bar_4.png',
        '../img/4. Score/orange/coin-bar_5.png',
        '../img/4. Score/orange/coin-bar_6.png'
    ]


    constructor() {
        super();
        this.loadImages(this.IMAGES_COIN);

        this.setPercentage(0);
    }

    
    /**
     * Sets the coinbar to the given number in percent
     * @param {number} percentage 
     */
    setPercentage(percentage) {
        if (this.percentage <= 100) {
            this.percentage = percentage;
            let path = this.IMAGES_COIN[this.resolveImageIndex()];
            this.img = this.imageCache[path];
        }
    }
}