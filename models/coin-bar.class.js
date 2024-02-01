class CoinBar extends DrawableObject {

    percentage = 0;

    IMAGES_COIN = [
        '../img/4. Score/orange/0_coin.png',
        '../img/4. Score/orange/20_coin.png',
        '../img/4. Score/orange/40_coin.png',
        '../img/4. Score/orange/60_coin.png',
        '../img/4. Score/orange/80_coin.png',
        '../img/4. Score/orange/100_coin.png'
    ]


    constructor() {
        super();
        this.loadImages(this.IMAGES_COIN);
        this.x = 30;
        this.y = 50;
        this.width = 200;
        this.height = 60;
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