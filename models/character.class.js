class Character extends MoveableObject {
    width = 200;
    height = 200;
    y = (480 / 2) - this.offset.top - ((this.height - this.offset.top - this.offset.bottom) / 2); // Mid of the canvas
    x = 0;
    energy = 100;
    speed = 5;
    offset = {
        top: 95,
        right: 40,
        bottom: 50,
        left: 40
    };
    offsetNear = {
        top: 0,
        right: 66,
        bottom: 0,
        left: 0
    };
    offsets = {
        normal: {
            top: 95,
            right: 40,
            bottom: 50,
            left: 40
        },
        sleep: {
            top: 120,
            right: 38,
            bottom: 26,
            left: 40
        },
        poison: {
            top: 99,
            right: 53,
            bottom: 45,
            left: 51
        },
        shock: {
            top: 83,
            right: 53,
            bottom: 35,
            left: 64
        },
        finslap: {
            top: 100,
            right: 66,
            bottom: 50,
            left: 43
        },
        bubbletrap: {
            top: 75,
            right: 41,
            bottom: 51,
            left: 22
        }
    };
    hitBy;
    lastMovement = 0;
    isSlapping = false;
    isShooting = {
        NORMAL: false,
        POISON: false
    };
    isLongIDLE = false;
    hasDied = false;
    world;


    constructor() {
        super().loadImage('../img/1. Sharkie/3.Swim/1.png');
        this.loadImages(CHARACTER_IMAGES_IDLE);
        this.loadImages(CHARACTER_IMAGES_LONG_IDLE);
        this.loadImages(CHARACTER_IMAGES_SLEEP);
        this.loadImages(CHARACTER_IMAGES_SWIM);
        this.loadImages(CHARACTER_IMAGES_FINSLAP);
        this.loadImages(CHARACTER_IMAGES_BUBBLETRAP['NORMAL']);
        this.loadImages(CHARACTER_IMAGES_BUBBLETRAP['POISON']);
        this.loadImages(CHARACTER_IMAGES_HURT['POISON']);
        this.loadImages(CHARACTER_IMAGES_HURT['SHOCK']);
        this.loadImages(CHARACTER_IMAGES_DEAD['POISON']);
        this.loadImages(CHARACTER_IMAGES_DEAD['SHOCK']);

        this.animate();
    };


    /**
     * Runs everything in intervals to animate and move the character
     */
    animate() {

        // Movement
        setStoppableInterval(() => {
            this.moveCharacter();
        }, 1000 / 60);

        // Animation
        setStoppableInterval(() => {
            this.playCharacter();
        }, 100);
    }


    /**
     * Checks pressed keys for character movement and sound
     */
    moveCharacter() {
        const moveRight = (this.world.keyboard.RIGHT || this.world.keyboard.D) && !this.isAtLevelEnd(this, 'right');
        const moveLeft = (this.world.keyboard.LEFT || this.world.keyboard.A) && !this.isAtLevelEnd(this, 'left');
        const moveUp = (this.world.keyboard.UP || this.world.keyboard.W) && !this.isAtLevelEnd(this, 'up');
        const moveDown = (this.world.keyboard.DOWN || this.world.keyboard.S) && !this.isAtLevelEnd(this, 'down');

        if (!this.isDead()) {
            if (moveRight) {
                this.x += this.speed;
                this.otherDirection = false;
            }

            if (moveLeft) {
                this.x -= this.speed;
                this.otherDirection = true;
            }

            if (moveUp) {
                this.y -= this.speed;
            }

            if (moveDown) {
                this.y += this.speed;
            }

            if (moveRight || moveLeft || moveUp || moveDown) {
                CHARACTER_SOUND_SWIM.play();
            } else {
                CHARACTER_SOUND_SWIM.pause();
                CHARACTER_SOUND_SWIM.currentTime = 0;
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
        }
        this.world.camera_x = -this.x - this.offsets.normal.left + this.level_end_space;
    }


    /**
     * Checks characters state to play animations
     */
    playCharacter() {
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

        } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN || this.world.keyboard.W || this.world.keyboard.A || this.world.keyboard.S || this.world.keyboard.D) {
            this.playSwim();

        } else if (this.lastMovement >= 60) {
            this.playSleep();

        } else if (this.lastMovement >= 50) {
            this.playLongIDLE();
        } else {
            this.playIDLE();
        };
    }


    /**
     * Prepares the finslap attack of the character
     */
    startFinSlap() {
        if (!this.isSlapping && !this.otherDirection) {
            this.isSlapping = true;
            this.currentImage = 0;
            this.offset = this.offsets.finslap;
        }
    }

    
    /**
     * Prepares the bubble-trap attack of the character
     */
    startBubbleTrap() {
        if (!this.isShooting.NORMAL && !this.otherDirection) {
            this.isShooting.NORMAL = true;
            this.currentImage = 0;
            this.offset = this.offsets.bubbletrap;
        }
    }


    /**
     * Prepares the bubble-trap-poison attack of the character
     */
    startBubbleTrapPoison() {
        if (!this.isShooting.POISON && !this.otherDirection) {
            this.isShooting.POISON = true;
            this.currentImage = 0;
            this.offset = this.offsets.bubbletrap;
            this.world.poisonBar.setPercentage(this.world.poisonBar.percentage - 10);
        }
    }


    /**
     * Plays the swim animation of the character
     */
    playSwim() {
        this.playAnimation(CHARACTER_IMAGES_SWIM);
        this.offset = this.offsets.normal;
        this.lastMovement = 0;
    }


    /**
     * Plays the IDLE animation of the character
     */
    playIDLE() {
        this.playAnimation(CHARACTER_IMAGES_IDLE);
        this.offset = this.offsets.normal;
        this.lastMovement += 1;
    }


    /**
     * Plays the long IDLE animation of the character
     */
    playLongIDLE() {
        if (!this.isLongIDLE) {
            this.isLongIDLE = true;
            this.currentImage = 0;
        }

        this.playAnimation(CHARACTER_IMAGES_LONG_IDLE);

        if (this.currentImage >= CHARACTER_IMAGES_LONG_IDLE.length) {
            this.isLongIDLE = false;
            this.currentImage = 0;
        }

        this.lastMovement += 1;
    }


    /**
     * Plays the sleep animation of the character
     */
    playSleep() {
        this.playAnimation(CHARACTER_IMAGES_SLEEP);
        this.offset = this.offsets.sleep;
    }


    /**
     * Plays the finslap animation of the character
     */
    playFinSlap() {
        this.playAnimation(CHARACTER_IMAGES_FINSLAP);

        if (this.currentImage === 3) {
            this.world.level.enemies.forEach((enemy) => {

                if (enemy instanceof PufferFish && enemy.isNearby(this)) {
                    enemy.energy = 0;
                    CHARACTER_SOUND_FINSLAP.play();
                }
            });
        }

        if (this.currentImage >= CHARACTER_IMAGES_FINSLAP.length) {
            this.isSlapping = false;
        }

        this.lastMovement = 0;
    }


    /**
     * Plays the bubble-trap animation of the character and creates new bubble 
     */
    playBubbleTrap() {
        this.playAnimation(CHARACTER_IMAGES_BUBBLETRAP['NORMAL']);
        CHARACTER_SOUND_BUBBLETRAP.play();

        if (this.currentImage >= CHARACTER_IMAGES_BUBBLETRAP['NORMAL'].length) {
            let bubble = new ShootableObject(this.x, this.y);
            this.world.shootableObjects.push(bubble);
            this.isShooting.NORMAL = false;
        }

        this.lastMovement = 0;
    }

    
    /**
     * Plays the bubble-trap-poison animation of the character and creates new poison-bubble
     */
    playBubbleTrapPoison() {
        this.playAnimation(CHARACTER_IMAGES_BUBBLETRAP['POISON']);
        CHARACTER_SOUND_BUBBLETRAP.play();

        if (this.currentImage >= CHARACTER_IMAGES_BUBBLETRAP['POISON'].length) {
            let bubble = new ShootableObject(this.x, this.y, 'poison');
            this.world.shootableObjects.push(bubble);
            this.isShooting.POISON = false;
        }

        this.lastMovement = 0;
    }


    /**
     * Plays the different hurt animations of the character
     */
    playHurt() {
        if (this.hitBy === 'JellyFish') {
            this.playAnimation(CHARACTER_IMAGES_HURT['SHOCK']);
            this.offset = this.offsets.shock;
        } else {
            this.playAnimation(CHARACTER_IMAGES_HURT['POISON']);
            this.offset = this.offsets.poison;
        }

        this.lastMovement = 0;
    }


    /**
     * Plays the different dead animations of the character and lets the character death float
     */
    playDead() {
        if (!this.hasDied && (this.hitBy === 'PufferFish' || this.hitBy === 'Endboss')) {
            CHARACTER_SOUND_DEAD.play();
        }

        if (!this.hasDied) {
            this.hasDied = true;
            this.currentImage = 0;
        }

        if (this.hitBy === 'JellyFish') {
            this.playAnimationOnce(CHARACTER_IMAGES_DEAD['SHOCK']);

            if ((this.currentImage >= CHARACTER_IMAGES_DEAD['SHOCK'].length) && this.y <= 250) {
                this.y += 3;
            }
        } else {
            this.playAnimationOnce(CHARACTER_IMAGES_DEAD['POISON']);

            if (this.currentImage >= CHARACTER_IMAGES_DEAD['POISON'].length - 4) {
                this.y -= 3;
            }
        }

        this.lastMovement = 0;
    }
}

