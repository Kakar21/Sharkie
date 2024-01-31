class Coin extends CollectableObject {

    IMAGES_COIN = [
        '../img/4. Score/1. Coins/1.png',
        '../img/4. Score/1. Coins/2.png',
        '../img/4. Score/1. Coins/3.png',
        '../img/4. Score/1. Coins/4.png'
    ];

    constructor(x, y) {
        super().loadImage(this.IMAGES_COIN[0]);
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;

        this.loadImages(this.IMAGES_COIN);
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_COIN);
        }, 150);
    }
}