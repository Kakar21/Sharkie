class BackgroundObject extends MoveableObject {

    height = 480;
    width = 1706.67;
    x = 0;
    y = 0;
    
    constructor(imagePath) {
        super().loadImage(imagePath);
    }
}