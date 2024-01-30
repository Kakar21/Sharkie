class ShootableObject extends MoveableObject {

    constructor(x, y) {
        super().loadImage('../img/1. Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.x = x;
        this.y = y;
        this.height = 50;
        this.width = 50;
        this.shoot();
    }

    shoot() {
        setInterval(() => {
            this.x += 2;
            this.y -= 1;
        }, 1000 / 60);
    }
}