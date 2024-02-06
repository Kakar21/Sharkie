class Endboss extends MoveableObject {

    width = 350;
    height = 350;
    y = -1000;
    x = 4380 - 150; // (Endboss Width - Character Width); 
    offset = {
        top: 164,
        right: 63,
        bottom: 71,
        left: 21
    };
    isIntroducing = false;
    hasIntroduced = false;
    world;

    IMAGES_INTRODUCE = [
        '../img/2. Enemy/3 Final Enemy/1.Introduce/1.png',
        '../img/2. Enemy/3 Final Enemy/1.Introduce/2.png',
        '../img/2. Enemy/3 Final Enemy/1.Introduce/3.png',
        '../img/2. Enemy/3 Final Enemy/1.Introduce/4.png',
        '../img/2. Enemy/3 Final Enemy/1.Introduce/5.png',
        '../img/2. Enemy/3 Final Enemy/1.Introduce/6.png',
        '../img/2. Enemy/3 Final Enemy/1.Introduce/7.png',
        '../img/2. Enemy/3 Final Enemy/1.Introduce/8.png',
        '../img/2. Enemy/3 Final Enemy/1.Introduce/9.png',
        '../img/2. Enemy/3 Final Enemy/1.Introduce/10.png'
    ]

    IMAGES_SWIM = [
        '../img/2. Enemy/3 Final Enemy/2.floating/1.png',
        '../img/2. Enemy/3 Final Enemy/2.floating/2.png',
        '../img/2. Enemy/3 Final Enemy/2.floating/3.png',
        '../img/2. Enemy/3 Final Enemy/2.floating/4.png',
        '../img/2. Enemy/3 Final Enemy/2.floating/5.png',
        '../img/2. Enemy/3 Final Enemy/2.floating/6.png',
        '../img/2. Enemy/3 Final Enemy/2.floating/7.png',
        '../img/2. Enemy/3 Final Enemy/2.floating/8.png',
        '../img/2. Enemy/3 Final Enemy/2.floating/9.png',
        '../img/2. Enemy/3 Final Enemy/2.floating/10.png',
        '../img/2. Enemy/3 Final Enemy/2.floating/11.png',
        '../img/2. Enemy/3 Final Enemy/2.floating/12.png',
        '../img/2. Enemy/3 Final Enemy/2.floating/13.png'
    ];

    IMAGES_BITE = [
        '../img/2. Enemy/3 Final Enemy/Attack/1.png',
        '../img/2. Enemy/3 Final Enemy/Attack/2.png',
        '../img/2. Enemy/3 Final Enemy/Attack/3.png',
        '../img/2. Enemy/3 Final Enemy/Attack/4.png',
        '../img/2. Enemy/3 Final Enemy/Attack/5.png',
        '../img/2. Enemy/3 Final Enemy/Attack/6.png'
    ]

    IMAGES_HURT = [
        '../img/2. Enemy/3 Final Enemy/Hurt/1.png',
        '../img/2. Enemy/3 Final Enemy/Hurt/2.png',
        '../img/2. Enemy/3 Final Enemy/Hurt/3.png',
        '../img/2. Enemy/3 Final Enemy/Hurt/4.png'
    ]

    IMAGES_DEAD = [
        '../img/2. Enemy/3 Final Enemy/Hurt/1.png',
        '../img/2. Enemy/3 Final Enemy/Hurt/2.png',
        '../img/2. Enemy/3 Final Enemy/Hurt/3.png',
        '../img/2. Enemy/3 Final Enemy/Hurt/4.png',
        '../img/2. Enemy/3 Final Enemy/Dead/1.png',
        '../img/2. Enemy/3 Final Enemy/Dead/2.png',
        '../img/2. Enemy/3 Final Enemy/Dead/3.png',
        '../img/2. Enemy/3 Final Enemy/Dead/4.png',
        '../img/2. Enemy/3 Final Enemy/Dead/5.png'
    ]

    // TODO: Fix dead animation playing to fast / not looking good


    constructor() {
        super().loadImage(this.IMAGES_SWIM[0]);
        this.loadImages(this.IMAGES_INTRODUCE);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_BITE);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
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
                if (this.getMiddleX(this.world.character) < (this.x + this.offset.left)) {
                    this.x -= 4;
                }
                // Move Right
                if (this.getMiddleX(this.world.character) > (this.x - this.offset.left + this.width)) {
                    this.x += 4;
                }
                // Move Up
                if (this.getMiddleY(this.world.character) < this.getMiddleY(this)) {
                    this.y -= 4;
                }
                // Move Down
                if (this.getMiddleY(this.world.character) > this.getMiddleY(this)) {
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
            this.currentImage = 0;
        }
    }

    startBite() {
        if (!this.isBiting) {
            this.isBiting = true;
            this.currentImage = 0;
        }
    }

    playIntroduce() {
        this.playAnimation(this.IMAGES_INTRODUCE);
        this.y = 0;
        this.world.healthBarEndboss.y = 0;

        if (this.currentImage >= this.IMAGES_INTRODUCE.length) {
            this.isIntroducing = false;
            this.hasIntroduced = true;
            this.move();
        }
    }

    playSwim() {
        this.playAnimation(this.IMAGES_SWIM);
    }

    playBite() {
        this.playAnimation(this.IMAGES_BITE);

        if (this.currentImage >= this.IMAGES_BITE.length) {
            this.isBiting = false;

            if (this.world.character.isColliding(this)) {
                this.world.character.hit(10);
                this.world.healthBar.setPercentage(this.world.character.energy);
            }
        }
    }

    playHurt() {
        this.playAnimation(this.IMAGES_HURT);
    }

    playDead() {
        this.playAnimationOnce(this.IMAGES_DEAD);
    }
}