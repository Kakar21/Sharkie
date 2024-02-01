class Character extends MoveableObject {

    width = 200;
    height = 200;
    y = 100;
    speed = 5;
    offset = {
        top: 95,
        right: 40,
        bottom: 50,
        left: 40
    };
    hitBy;
    lastMovement = 0;
    IMAGES_IDLE = [
        '../img/1. Sharkie/1.IDLE/1.png',
        '../img/1. Sharkie/1.IDLE/2.png',
        '../img/1. Sharkie/1.IDLE/3.png',
        '../img/1. Sharkie/1.IDLE/4.png',
        '../img/1. Sharkie/1.IDLE/5.png',
        '../img/1. Sharkie/1.IDLE/6.png',
        '../img/1. Sharkie/1.IDLE/7.png',
        '../img/1. Sharkie/1.IDLE/8.png',
        '../img/1. Sharkie/1.IDLE/9.png',
        '../img/1. Sharkie/1.IDLE/10.png',
        '../img/1. Sharkie/1.IDLE/11.png',
        '../img/1. Sharkie/1.IDLE/12.png',
        '../img/1. Sharkie/1.IDLE/13.png',
        '../img/1. Sharkie/1.IDLE/14.png',
        '../img/1. Sharkie/1.IDLE/15.png',
        '../img/1. Sharkie/1.IDLE/16.png',
        '../img/1. Sharkie/1.IDLE/17.png',
        '../img/1. Sharkie/1.IDLE/18.png'
    ];

    IMAGES_LONG_IDLE = [
        '../img/1. Sharkie/2.Long_IDLE/1.png',
        '../img/1. Sharkie/2.Long_IDLE/2.png',
        '../img/1. Sharkie/2.Long_IDLE/3.png',
        '../img/1. Sharkie/2.Long_IDLE/4.png',
        '../img/1. Sharkie/2.Long_IDLE/5.png',
        '../img/1. Sharkie/2.Long_IDLE/6.png',
        '../img/1. Sharkie/2.Long_IDLE/7.png',
        '../img/1. Sharkie/2.Long_IDLE/8.png',
        '../img/1. Sharkie/2.Long_IDLE/9.png',
        '../img/1. Sharkie/2.Long_IDLE/10.png',
        '../img/1. Sharkie/2.Long_IDLE/11.png',
        '../img/1. Sharkie/2.Long_IDLE/12.png',
        '../img/1. Sharkie/2.Long_IDLE/13.png',
        '../img/1. Sharkie/2.Long_IDLE/14.png'
    ]

    // IMAGES_SLEEP = [
    //     '../img/1. Sharkie/2.Long_IDLE/11.png',
    //     '../img/1. Sharkie/2.Long_IDLE/11.png',
    //     '../img/1. Sharkie/2.Long_IDLE/11.png',
    //     '../img/1. Sharkie/2.Long_IDLE/11.png',
    //     '../img/1. Sharkie/2.Long_IDLE/11.png',
    //     '../img/1. Sharkie/2.Long_IDLE/12.png',
    //     '../img/1. Sharkie/2.Long_IDLE/12.png',
    //     '../img/1. Sharkie/2.Long_IDLE/12.png',
    //     '../img/1. Sharkie/2.Long_IDLE/12.png',
    //     '../img/1. Sharkie/2.Long_IDLE/12.png',
    //     '../img/1. Sharkie/2.Long_IDLE/13.png',
    //     '../img/1. Sharkie/2.Long_IDLE/13.png',
    //     '../img/1. Sharkie/2.Long_IDLE/13.png',
    //     '../img/1. Sharkie/2.Long_IDLE/13.png',
    //     '../img/1. Sharkie/2.Long_IDLE/13.png',
    //     '../img/1. Sharkie/2.Long_IDLE/14.png',
    //     '../img/1. Sharkie/2.Long_IDLE/14.png',
    //     '../img/1. Sharkie/2.Long_IDLE/14.png',
    //     '../img/1. Sharkie/2.Long_IDLE/14.png',
    //     '../img/1. Sharkie/2.Long_IDLE/14.png'
    // ]
    //TODO: Add sleep (after one time animation)

    IMAGES_WALKING = [
        '../img/1. Sharkie/3.Swim/1.png',
        '../img/1. Sharkie/3.Swim/2.png',
        '../img/1. Sharkie/3.Swim/3.png',
        '../img/1. Sharkie/3.Swim/4.png',
        '../img/1. Sharkie/3.Swim/5.png',
        '../img/1. Sharkie/3.Swim/6.png'
    ];
    IMAGES_DEAD = {
        POISON: [
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
        ],
        SHOCK: [
            '../img/1. Sharkie/6.dead/2.Electro_shock/1.png',
            '../img/1. Sharkie/6.dead/2.Electro_shock/2.png',
            '../img/1. Sharkie/6.dead/2.Electro_shock/3.png',
            '../img/1. Sharkie/6.dead/2.Electro_shock/4.png',
            '../img/1. Sharkie/6.dead/2.Electro_shock/5.png',
            '../img/1. Sharkie/6.dead/2.Electro_shock/6.png',
            '../img/1. Sharkie/6.dead/2.Electro_shock/7.png',
            '../img/1. Sharkie/6.dead/2.Electro_shock/8.png',
            '../img/1. Sharkie/6.dead/2.Electro_shock/9.png',
            '../img/1. Sharkie/6.dead/2.Electro_shock/10.png'
        ]
    };
    //TODO: Fix dead animation playing from currentImage ?
    // TODO: Play dead animation only once (one time animation)

    IMAGES_HURT = {
        POISON: [
            '../img/1. Sharkie/5.Hurt/1.Poisoned/1.png',
            '../img/1. Sharkie/5.Hurt/1.Poisoned/2.png',
            '../img/1. Sharkie/5.Hurt/1.Poisoned/3.png',
            '../img/1. Sharkie/5.Hurt/1.Poisoned/4.png'
        ],
        SHOCK: [
            '../img/1. Sharkie/5.Hurt/2.Electric shock/1.png',
            '../img/1. Sharkie/5.Hurt/2.Electric shock/2.png',
            '../img/1. Sharkie/5.Hurt/2.Electric shock/3.png',
        ]
    }

    world;
    SOUND_WALKING = new Audio('../audio/swimming.mp3');
    //TODO: Fix playing after a fast keypress

    constructor() {
        super().loadImage('../img/1. Sharkie/3.Swim/1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONG_IDLE);
        // this.loadImages(this.IMAGES_SLEEP);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD['POISON']);
        this.loadImages(this.IMAGES_DEAD['SHOCK']);
        this.loadImages(this.IMAGES_HURT['POISON']);
        this.loadImages(this.IMAGES_HURT['SHOCK']);


        this.animate();
    };

    async animate() {

        // Movement
        setInterval(() => {
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


        // Animation
        setInterval(() => {

            if (this.isDead()) {
                if (this.hitBy == 'JellyFish') {
                    this.playAnimation(this.IMAGES_DEAD['SHOCK']);
                } else {
                    this.playAnimation(this.IMAGES_DEAD['POISON']);
                }
                this.lastMovement = 0;

            } else if (this.isHurt()) {

                if (this.hitBy == 'JellyFish') {
                    this.playAnimation(this.IMAGES_HURT['SHOCK']);
                } else {
                    this.playAnimation(this.IMAGES_HURT['POISON']);
                }
                // TODO: Add individual hurt sounds
                this.lastMovement = 0;

            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
                this.playAnimation(this.IMAGES_WALKING);
                this.lastMovement = 0;
            } else if (this.lastMovement > 50) {
                this.playAnimation(this.IMAGES_LONG_IDLE);
                // this.playAnimation(this.IMAGES_SLEEP);
            } else {
                this.playAnimation(this.IMAGES_IDLE);
                this.lastMovement += 1;
            };
        }, 100);
    }

    moveUp() {

    }
}