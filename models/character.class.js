class Character extends MoveableObject {

    width = 200;
    height = 200;
    y = 0;
    IMAGES_WALKING = ['../img/1. Sharkie/3.Swim/1.png',
        '../img/1. Sharkie/3.Swim/2.png',
        '../img/1. Sharkie/3.Swim/3.png',
        '../img/1. Sharkie/3.Swim/4.png',
        '../img/1. Sharkie/3.Swim/5.png',
        '../img/1. Sharkie/3.Swim/6.png'
    ];
    world;

    constructor() {
        super().loadImage('../img/1. Sharkie/3.Swim/1.png');
        this.loadImages(this.IMAGES_WALKING);

        this.animate();
    };

    animate() {
        setInterval(() => {

            if (this.world.keyboard.RIGHT) {
            
            let i = this.currentImage % this.IMAGES_WALKING.length;
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
            }
        }, 100);
    }

    moveUp() {

    }
}