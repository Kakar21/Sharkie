class BackgroundObject extends MoveableObject {
    height = 480;
    width = 1706.67;
    y = 0;


    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
    }
}