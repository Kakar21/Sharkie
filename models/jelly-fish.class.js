class JellyFish extends MoveableObject {

    width = 75;
    height = 100;
    offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
    color;
    IMAGES_WALKING = {
        PURPLE: [
            '../img/2. Enemy/2 Jelly fish/Regular damage/Lila 1.png',
            '../img/2. Enemy/2 Jelly fish/Regular damage/Lila 2.png',
            '../img/2. Enemy/2 Jelly fish/Regular damage/Lila 3.png',
            '../img/2. Enemy/2 Jelly fish/Regular damage/Lila 4.png'
        ],
        YELLOW: [
            '../img/2. Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
            '../img/2. Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
            '../img/2. Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
            '../img/2. Enemy/2 Jelly fish/Regular damage/Yellow 4.png'
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
        let random = Math.floor(Math.random() * 2);

        if (random == 0) {
            return 'PURPLE';
        } else if (random == 1) {
            return 'YELLOW';
        }
    }

    animate() {
        this.moveUpAndDown();

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING[this.color]);
        }, 100);
    }
}