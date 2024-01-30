class PufferFish extends MoveableObject {

    width = 50;
    height = 50;
    offset = {
        top: 4,
        right: 5,
        bottom: 14,
        left: 3
    };
    color;
    IMAGES_WALKING = {
        GREEN: [
            '../img/2. Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
        ],
        ORANGE: [
            '../img/2. Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png'
        ],
        RED: [
            '../img/2. Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png'
        ]
    }

    constructor() {
        super();
        this.color = this.getColor();
        this.loadImage(this.IMAGES_WALKING[this.color][0]);
        this.x = 200 + Math.random() * 500;
        this.speed = 0.1 + Math.random() * 0.5;


        this.loadImages(this.IMAGES_WALKING[this.color]);
        this.animate();
    }

    getColor() {
        let random = Math.floor(Math.random() * 3);

        if (random == 0) {
            return 'GREEN';
        } else if (random == 1) {
            return 'ORANGE';
        } else if (random == 2) {
            return 'RED';
        }
    }

    animate() {
        this.moveLeft();

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING[this.color]);
        }, 100);
    }
}