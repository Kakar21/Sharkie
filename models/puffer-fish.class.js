class PufferFish extends MoveableObject {

    width = 50;
    height = 50;
    offset = {
        top: 4,
        right: 5,
        bottom: 14,
        left: 3
    };
    IMAGES_WALKING = [
        '../img/2. Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        '../img/2. Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        '../img/2. Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        '../img/2. Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        '../img/2. Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
    ];


    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.x = 200 + Math.random() * 500;
        this.speed = 0.1 + Math.random() * 0.5;

        this.loadImages(this.IMAGES_WALKING);
        this.animate();
    }

    animate() {
        this.moveLeft();

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 100);
    }
}