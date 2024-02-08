class Endboss extends MoveableObject {

    width = 350;
    height = 350;
    y = -1000;
    x = 4380 - 150; // (Endboss Width - Character Width); 
    offset = {
        top: 164,
        right: 21,
        bottom: 71,
        left: 21
    };
    offsets = {
        introduce: {
            top: 0,
            right: 55,
            bottom: 200,
            left: 175
        },
        normal: {
            top: 164,
            right: 21,
            bottom: 71,
            left: 21
        },
        bite: {
            top: 127,
            right: 63,
            bottom: 63,
            left: 3
        },
        hurt: {
            top: 140,
            right: 74,
            bottom: 79,
            left: 45
        },
        dead: {
            top: 74,
            right: 68,
            bottom: 145,
            left: 44
        }
    };
    isIntroducing = false;
    hasIntroduced = false;
    world;

    // TODO: Fix dead animation playing to fast / not looking good

    constructor() {
        super().loadImage(ENDBOSS_IMAGES_SWIM[0]);
        this.loadImages(ENDBOSS_IMAGES_INTRODUCE);
        this.loadImages(ENDBOSS_IMAGES_SWIM);
        this.loadImages(ENDBOSS_IMAGES_BITE);
        this.loadImages(ENDBOSS_IMAGES_HURT);
        this.loadImages(ENDBOSS_IMAGES_DEAD);
        this.animate();
    }

    move() {
        setInterval(() => {
            if (!this.isDead() && !this.world.character.isDead()) {

                // Turn Left
                if (this.getMiddleX(this.world.character) < this.getMiddleX(this)) {
                    this.otherDirection = false;
                }
                // Turn Right
                if (this.getMiddleX(this.world.character) > this.getMiddleX(this)) {
                    this.otherDirection = true;
                }
                // Move Left
                if ((this.getMiddleX(this.world.character) < (this.x + this.offset.left)) && !this.isAtLevelEnd(this, 'left')) {
                    this.x -= 4;
                }
                // Move Right
                if ((this.getMiddleX(this.world.character) > (this.x - this.offset.left + this.width)) && !this.isAtLevelEnd(this, 'right')) {
                    this.x += 4;
                }
                // Move Up
                if ((this.getMiddleY(this.world.character) < this.getMiddleY(this)) && !this.isAtLevelEnd(this, 'up')) {
                    this.y -= 4;
                }
                // Move Down
                if ((this.getMiddleY(this.world.character) > this.getMiddleY(this)) && !this.isAtLevelEnd(this, 'down')) {
                    this.y += 4;
                }
            }
        }, 100)
    }


    /**
     * Checks endboss state to play animations in a loop
     */
    animate() {
        setInterval(() => {

            if (this.isDead()) {
                this.playDead();

            } else if (this.isBiting) {
                this.playBite();

            } else if (this.isHurt()) {
                this.playHurt();

            } else if (this.isIntroducing) {
                this.playIntroduce();

            } else {
                this.playSwim();
            }
        }, 100);
    }

    startIntroduce() {
        if (!this.isIntroducing && !this.hasIntroduced) {
            this.isIntroducing = true;
            this.offset = this.offsets.introduce;
            this.currentImage = 0;
        }
    }

    startBite() {
        if (!this.isBiting) {
            this.isBiting = true;
            this.offset = this.offsets.bite;
            this.currentImage = 0;
        }
    }

    playIntroduce() {
        this.playAnimation(ENDBOSS_IMAGES_INTRODUCE);
        this.y = 0;
        this.world.healthBarEndboss.y = 0;

        if (this.currentImage >= ENDBOSS_IMAGES_INTRODUCE.length) {
            this.isIntroducing = false;
            this.hasIntroduced = true;
            this.move();
        }
    }

    playSwim() {
        this.playAnimation(ENDBOSS_IMAGES_SWIM);
        this.offset = this.offsets.normal;
    }

    playBite() {
        this.playAnimation(ENDBOSS_IMAGES_BITE);

        if (this.currentImage >= ENDBOSS_IMAGES_BITE.length) {
            this.isBiting = false;

            if (this.world.character.isColliding(this)) {
                this.world.character.hit(10);
                this.world.healthBar.setPercentage(this.world.character.energy);
            }
        }
    }

    playHurt() {
        this.playAnimation(ENDBOSS_IMAGES_HURT);
        this.offset = this.offsets.hurt;
    }

    playDead() {
        this.playAnimationOnce(ENDBOSS_IMAGES_DEAD);
        this.offset = this.offsets.dead;
    }
}