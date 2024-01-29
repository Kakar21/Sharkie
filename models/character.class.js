class Character extends MoveableObject {

    width = 200;
    height = 200;
    y = 0;
    speed = 5;
    offset = {
        top: 95,
        right: 40,
        bottom: 50,
        left: 40
    };
    IMAGES_WALKING = [
        '../img/1. Sharkie/3.Swim/1.png',
        '../img/1. Sharkie/3.Swim/2.png',
        '../img/1. Sharkie/3.Swim/3.png',
        '../img/1. Sharkie/3.Swim/4.png',
        '../img/1. Sharkie/3.Swim/5.png',
        '../img/1. Sharkie/3.Swim/6.png'
    ];
    IMAGES_DEAD = [
        '../img/1. Sharkie/6.dead/1.Poisoned/1.png',
        '../img/1. Sharkie/6.dead/1.Poisoned/2.png',
        '../img/1. Sharkie/6.dead/1.Poisoned/3.png',
        '../img/1. Sharkie/6.dead/1.Poisoned/4.png',
        '../img/1. Sharkie/6.dead/1.Poisoned/5.png',
        '../img/1. Sharkie/6.dead/1.Poisoned/6.png',
        '../img/1. Sharkie/6.dead/1.Poisoned/7.png',
        '../img/1. Sharkie/6.dead/1.Poisoned/8.png',
        '../img/1. Sharkie/6.dead/1.Poisoned/9.png',
        '../img/1. Sharkie/6.dead/1.Poisoned/10.png',
        '../img/1. Sharkie/6.dead/1.Poisoned/11.png',
        '../img/1. Sharkie/6.dead/1.Poisoned/12.png'
    ];
    //TODO: Add electro dead and poison dead
    IMAGES_HURT = [
        '../img/1. Sharkie/5.Hurt/1.Poisoned/1.png',
        '../img/1. Sharkie/5.Hurt/1.Poisoned/2.png',
        '../img/1. Sharkie/5.Hurt/1.Poisoned/3.png',
        '../img/1. Sharkie/5.Hurt/1.Poisoned/4.png',
        '../img/1. Sharkie/5.Hurt/1.Poisoned/5.png'
    ];
    //TODO: Add electro hurt and poison hurt

    world;
    SOUND_WALKING = new Audio('../audio/swimming.mp3');
    //TODO: Fix playing after a fast keypress

    constructor() {
        super().loadImage('../img/1. Sharkie/3.Swim/1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);

        this.animate();
    };

    animate() {

        // Movement
        setInterval( () => {
            this.SOUND_WALKING.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
                this.SOUND_WALKING.play();
            }

            if (this.world.keyboard.LEFT && this.x > 0) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.SOUND_WALKING.play();
            }

            if (this.world.keyboard.UP && this.y > -50) {
                this.y -= this.speed;
                this.SOUND_WALKING.play();
            }

            if (this.world.keyboard.DOWN && this.y < this.world.level.level_end_y - this.height) {
                this.y += this.speed;
                this.SOUND_WALKING.play();
            }

            this.world.camera_x = -this.x;
        }, 1000 / 60)

        
        // Walk Animation
        setInterval(() => {

            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);

            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);

            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
                this.playAnimation(this.IMAGES_WALKING);
            };
        }, 100);
    }

    moveUp() {

    }
}