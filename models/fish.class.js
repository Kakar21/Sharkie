class Fish extends MoveableObject {

    width = 50;
    height = 50;

    constructor() {
        super().loadImage('../img/2. Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.x = 200 + Math.random() * 500;
    }
}