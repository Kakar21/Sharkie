class Coin extends CollectableObject {

    width = 45;
    height = 45;


    constructor(x, y) {
        super().loadImage(COIN_IMAGES[0]);
        this.x = x;
        this.y = y;

        this.loadImages(COIN_IMAGES);
        this.animate();
    }


    /**
     * Plays the coin animation in a loop
     */
    animate() {
        setStoppableInterval(() => {
            this.playAnimation(COIN_IMAGES);
        }, 150);
    }
}