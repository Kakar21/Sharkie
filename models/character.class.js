class Character extends MoveableObject {

    width = 200;
    height = 200;
    y = 100;
    x = 4000;
    speed = 10;
    offset = {
        top: 95,
        right: 40,
        bottom: 50,
        left: 40
    };
    offsetNear = {
        top: 0,
        right: 50,
        bottom: 0,
        left: 0
    }
    hitBy;
    lastMovement = 0;
    isSlapping = false;
    isShooting = {
        NORMAL: false,
        POISON: false
    };
    isLongIDLE = false;
    world;

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
        '../img/1. Sharkie/2.Long_IDLE/10.png'
    ]

    IMAGES_SLEEP = [
        '../img/1. Sharkie/2.Long_IDLE/11.png',
        '../img/1. Sharkie/2.Long_IDLE/11.png',
        '../img/1. Sharkie/2.Long_IDLE/11.png',
        '../img/1. Sharkie/2.Long_IDLE/11.png',
        '../img/1. Sharkie/2.Long_IDLE/11.png',
        '../img/1. Sharkie/2.Long_IDLE/12.png',
        '../img/1. Sharkie/2.Long_IDLE/12.png',
        '../img/1. Sharkie/2.Long_IDLE/12.png',
        '../img/1. Sharkie/2.Long_IDLE/12.png',
        '../img/1. Sharkie/2.Long_IDLE/12.png',
        '../img/1. Sharkie/2.Long_IDLE/13.png',
        '../img/1. Sharkie/2.Long_IDLE/13.png',
        '../img/1. Sharkie/2.Long_IDLE/13.png',
        '../img/1. Sharkie/2.Long_IDLE/13.png',
        '../img/1. Sharkie/2.Long_IDLE/13.png',
        '../img/1. Sharkie/2.Long_IDLE/14.png',
        '../img/1. Sharkie/2.Long_IDLE/14.png',
        '../img/1. Sharkie/2.Long_IDLE/14.png',
        '../img/1. Sharkie/2.Long_IDLE/14.png',
        '../img/1. Sharkie/2.Long_IDLE/14.png'
    ]

    IMAGES_SWIM = [
        '../img/1. Sharkie/3.Swim/1.png',
        '../img/1. Sharkie/3.Swim/2.png',
        '../img/1. Sharkie/3.Swim/3.png',
        '../img/1. Sharkie/3.Swim/4.png',
        '../img/1. Sharkie/3.Swim/5.png',
        '../img/1. Sharkie/3.Swim/6.png'
    ];

    IMAGES_FINSLAP = [
        '../img/1. Sharkie/4.Attack/Fin slap/1.png',
        '../img/1. Sharkie/4.Attack/Fin slap/4.png',
        '../img/1. Sharkie/4.Attack/Fin slap/5.png',
        '../img/1. Sharkie/4.Attack/Fin slap/6.png',
        '../img/1. Sharkie/4.Attack/Fin slap/7.png',
        '../img/1. Sharkie/4.Attack/Fin slap/8.png'
    ]

    IMAGES_BUBBLETRAP = {
        NORMAL: [
            '../img/1. Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
            '../img/1. Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
            '../img/1. Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
            '../img/1. Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
            '../img/1. Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
            '../img/1. Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
            '../img/1. Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
            '../img/1. Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png'
        ],
        POISON: [
            '../img/1. Sharkie/4.Attack/Bubble trap/For Whale/1.png',
            '../img/1. Sharkie/4.Attack/Bubble trap/For Whale/2.png',
            '../img/1. Sharkie/4.Attack/Bubble trap/For Whale/3.png',
            '../img/1. Sharkie/4.Attack/Bubble trap/For Whale/4.png',
            '../img/1. Sharkie/4.Attack/Bubble trap/For Whale/5.png',
            '../img/1. Sharkie/4.Attack/Bubble trap/For Whale/6.png',
            '../img/1. Sharkie/4.Attack/Bubble trap/For Whale/7.png',
            '../img/1. Sharkie/4.Attack/Bubble trap/For Whale/8.png'
        ]
    }

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

    SOUND_SWIM = new Audio('../audio/swimming.mp3');
    // TODO: damp swim sound for underwater feeling?
    //TODO: Fix playing after a fast keypress

    constructor() {
        super().loadImage('../img/1. Sharkie/3.Swim/1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONG_IDLE);
        this.loadImages(this.IMAGES_SLEEP);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_FINSLAP);
        this.loadImages(this.IMAGES_BUBBLETRAP['NORMAL']);
        this.loadImages(this.IMAGES_BUBBLETRAP['POISON']);
        this.loadImages(this.IMAGES_DEAD['POISON']);
        this.loadImages(this.IMAGES_DEAD['SHOCK']);
        this.loadImages(this.IMAGES_HURT['POISON']);
        this.loadImages(this.IMAGES_HURT['SHOCK']);

        this.animate();
    };


    /**
     * Checks pressed keys for character movement and sound in a loop
     * Checks characters state to play animations in a loop
     */
    animate() {

        // Movement
        setInterval(() => {
            this.SOUND_SWIM.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
                this.SOUND_SWIM.play();
            }

            if (this.world.keyboard.LEFT && this.x > 0) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.SOUND_SWIM.play();
            }

            if (this.world.keyboard.UP && this.y > -50) {
                this.y -= this.speed;
                this.SOUND_SWIM.play();
            }

            if (this.world.keyboard.DOWN && this.y < this.world.level.level_end_y - this.height) {
                this.y += this.speed;
                this.SOUND_SWIM.play();
            }

            if (this.world.keyboard.SPACE) {
                this.startFinSlap();
            }

            if (this.world.keyboard.H) {
                this.startBubbleTrap();
            }

            if (this.world.keyboard.J) {
                if (this.world.poisonBar.percentage >= 10)
                    this.startBubbleTrapPoison();
            }

            this.world.camera_x = -this.x;
        }, 1000 / 60)

        // Animation
        setInterval(() => {

            if (this.isDead()) {
                this.playDead();

            } else if (this.isHurt()) {
                this.playHurt();

            } else if (this.isSlapping) {
                this.playFinSlap();

            } else if (this.isShooting.NORMAL) {
                this.playBubbleTrap();

            } else if (this.isShooting.POISON) {
                this.playBubbleTrapPoison();

            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
                this.playSwim();

            } else if (this.lastMovement >= 60) {
                this.playSleep();

            } else if (this.lastMovement >= 50) {
                this.playLongIDLE();
            } else {
                this.playIDLE();
            };
        }, 100);
    }

    startFinSlap() {
        if (!this.isSlapping && !this.otherDirection) {
            this.isSlapping = true;
            this.currentImage = 0;
        }
    }

    startBubbleTrap() {
        if (!this.isShooting.NORMAL && !this.otherDirection) {
            this.isShooting.NORMAL = true;
            this.currentImage = 0;
        }
    }

    startBubbleTrapPoison() {
        if (!this.isShooting.POISON && !this.otherDirection) {
            this.isShooting.POISON = true;
            this.currentImage = 0;
            console.log(this.world.poisonBar.percentage);
            this.world.poisonBar.setPercentage(this.world.poisonBar.percentage - 10);
        }
    }

    playDead() {
        if (this.hitBy == 'JellyFish') {
            this.playAnimationOnce(this.IMAGES_DEAD['SHOCK']);
        } else {
            this.playAnimationOnce(this.IMAGES_DEAD['POISON']);
        }

        this.lastMovement = 0;
        // TODO: Add floating up after dying
    }

    playFinSlap() {
        this.playAnimation(this.IMAGES_FINSLAP);

        if (this.currentImage == 3) {
            this.world.level.enemies.forEach((enemy) => {
                if (enemy instanceof PufferFish && enemy.isNearby(this)) {
                    enemy.energy = 0;
                }
            });
        }

        if (this.currentImage >= this.IMAGES_FINSLAP.length) {
            this.isSlapping = false;
        }

        this.lastMovement = 0;
    }

    playBubbleTrap() {
        this.playAnimation(this.IMAGES_BUBBLETRAP['NORMAL']);

        if (this.currentImage >= this.IMAGES_BUBBLETRAP['NORMAL'].length) {
            let bubble = new ShootableObject(this.x, this.y);
            this.world.shootableObjects.push(bubble);
            this.isShooting.NORMAL = false;
        }

        // TODO: if too easy (too fast shooting), add cooldown
        this.lastMovement = 0;
    }

    playBubbleTrapPoison() {
        this.playAnimation(this.IMAGES_BUBBLETRAP['POISON']);

        if (this.currentImage >= this.IMAGES_BUBBLETRAP['POISON'].length) {
            let bubble = new ShootableObject(this.x, this.y, 'poison');
            this.world.shootableObjects.push(bubble);
            this.isShooting.POISON = false;
        }

        // TODO: if too easy (too fast shooting), add cooldown
        this.lastMovement = 0;
    }

    playHurt() {
        if (this.hitBy == 'JellyFish') {
            this.playAnimation(this.IMAGES_HURT['SHOCK']);
        } else {
            this.playAnimation(this.IMAGES_HURT['POISON']);
        }
        // TODO: Add individual hurt sounds

        this.lastMovement = 0;
    }

    playSwim() {
        this.playAnimation(this.IMAGES_SWIM);
        this.lastMovement = 0;
    }

    playIDLE() {
        this.playAnimation(this.IMAGES_IDLE);
        this.lastMovement += 1;
    }

    playLongIDLE() {

        if (!this.isLongIDLE) {
            this.isLongIDLE = true;
            this.currentImage = 0;
        }

        this.playAnimation(this.IMAGES_LONG_IDLE);

        if (this.currentImage >= this.IMAGES_LONG_IDLE.length) {
            this.isLongIDLE = false;
            this.currentImage = 0;
        }

        this.lastMovement += 1;
    }

    playSleep() {
        this.playAnimation(this.IMAGES_SLEEP);
    }
}

