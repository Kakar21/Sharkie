class Character extends MoveableObject {

    width = 200;
    height = 200;
    y = 0;
    speed = 5;
    IMAGES_WALKING = ['../img/1. Sharkie/3.Swim/1.png',
        '../img/1. Sharkie/3.Swim/2.png',
        '../img/1. Sharkie/3.Swim/3.png',
        '../img/1. Sharkie/3.Swim/4.png',
        '../img/1. Sharkie/3.Swim/5.png',
        '../img/1. Sharkie/3.Swim/6.png'
    ];
    world;
    WALKING_SOUND = new Audio('../audio/swimming.mp3');
    //TODO: Fix playing after a fast click

    constructor() {
        super().loadImage('../img/1. Sharkie/3.Swim/1.png');
        this.loadImages(this.IMAGES_WALKING);

        this.animate();
    };

    animate() {

        // Movement
        setInterval( () => {
            this.WALKING_SOUND.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
                this.WALKING_SOUND.play();
            }

            if (this.world.keyboard.LEFT && this.x > 0) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.WALKING_SOUND.play();
            }

            if (this.world.keyboard.UP && this.y > -50) {
                this.y -= this.speed;
                this.WALKING_SOUND.play();
            }

            if (this.world.keyboard.DOWN && this.y < this.world.level.level_end_y - this.height) {
                this.y += this.speed;
                this.WALKING_SOUND.play();
            }

            this.world.camera_x = -this.x;
        }, 1000 / 60)

        
        // Walk Animation
        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 100);
    }

    moveUp() {

    }
}