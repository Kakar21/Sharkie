class ShootableObject extends MoveableObject {

    constructor(x, y) {
        super().loadImage('../img/1. Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.x = x + 150;
        this.y = y + 100;
        this.height = 50;
        this.width = 50;
        this.shoot();
    }


    /**
     * Shoots the object to the right up
     */
    shoot() {
        setInterval(() => {
            this.x += 2;
            this.y -= 1;
        }, 1000 / 60);
    }
}

// TODO: Add bubble animation
// TODO: add poison bubble
// TODO: Bubble shooting to other direction when swimming back