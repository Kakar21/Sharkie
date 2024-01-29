class LifeBar extends DrawableObject {
    IMAGES_LIFE = [
        '../img/4. Score/orange/0_life.png',
        '../img/4. Score/orange/20_life.png',
        '../img/4. Score/orange/40_life.png',
        '../img/4. Score/orange/60_life.png',
        '../img/4. Score/orange/80_life.png',
        '../img/4. Score/orange/100_life.png'
    ]
    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES_LIFE);
        this.x = 30;
        this.y = 0;
        this.width = 200;
        this.height = 60;
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_LIFE[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }
}