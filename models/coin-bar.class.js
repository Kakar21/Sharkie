class CoinBar extends DrawableObject {
    IMAGES_COIN = [
        '../img/4. Score/orange/0_coin.png',
        '../img/4. Score/orange/20_coin.png',
        '../img/4. Score/orange/40_coin.png',
        '../img/4. Score/orange/60_coin.png',
        '../img/4. Score/orange/80_coin.png',
        '../img/4. Score/orange/100_coin.png'
    ]
    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES_COIN);
        this.x = 30;
        this.y = 50;
        this.width = 200;
        this.height = 60;
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_COIN[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }
}