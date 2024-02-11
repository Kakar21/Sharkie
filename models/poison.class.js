class Poison extends CollectableObject {

    width = 50;
    height = 67.5;
    offset = {
        top: 32,
        right: 9.5,
        bottom: 1.5,
        left: 9.5
    };

    
    constructor(x, y) {
        super().loadImage(POISON_IMAGES[0]);
        this.x = x;
        this.y = y;

        this.loadImages(POISON_IMAGES);
        this.animate();
    }


    /**
     * Plays the coin animation in a loop
     */
    animate() {
        setInterval(() => {
            this.playAnimation(POISON_IMAGES);
        }, 100);
    }
}