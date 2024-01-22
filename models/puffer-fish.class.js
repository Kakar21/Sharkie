class pufferFish extends MoveableObject {

    width = 50;
    height = 50;
    IMAGES_WALKING = ['../img/2. Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        '../img/2. Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        '../img/2. Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        '../img/2. Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        '../img/2. Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
    ];


    constructor() {
        super().loadImage('../img/2. Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.x = 200 + Math.random() * 500;
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_WALKING.length;
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100);
    }
}