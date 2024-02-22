class ShootableObject extends MoveableObject {
    height = 50;
    width = 50;
    poison = false;

    
    constructor(x, y, poison) {
        if (poison) {
            super().loadImage('img/1. Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png');
            this.height = 58;
            this.width = 58;
            this.poison = true;
            this.offset = {
                top: 4,
                right: 4,
                bottom: 4,
                left: 4
            };
        } else {
            super().loadImage('img/1. Sharkie/4.Attack/Bubble trap/Bubble.png');
        }

        this.x = x + 150;
        this.y = y + 100;

        this.shoot();
    }


    /**
     * Shoots the object to the right up
     */
    shoot() {
        setStoppableInterval(() => {
            this.x += 2;
            this.y -= 1;
        }, 1000 / 60);
    }
}