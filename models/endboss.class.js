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
        '../img/2. Enemy/3 Final Enemy/2.floating/13.png',
    ];

    IMAGES_HURT = [
        '../img/2. Enemy/3 Final Enemy/Hurt/1.png',
        '../img/2. Enemy/3 Final Enemy/Hurt/2.png',
        '../img/2. Enemy/3 Final Enemy/Hurt/3.png',
        '../img/2. Enemy/3 Final Enemy/Hurt/4.png'
    ]


    constructor() {
        super().loadImage(this.IMAGES_SWIM[0]);
        this.loadImages(this.IMAGES_INTRODUCE);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_HURT);
        this.animate();
    }


    /**
     * Checks endboss state to play animations in a loop
     */
    animate() {
        setInterval(() => {

            if (this.isDead()) {

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

    playIntroduce() {
        this.playAnimation(this.IMAGES_INTRODUCE);
        this.y = 0;
        this.world.healthBarEndboss.y = 0;

        if (this.currentImage >= this.IMAGES_INTRODUCE.length) {
            this.isIntroducing = false;
            this.hasIntroduced = true;
        }
    }

    playSwim() {
        this.playAnimation(this.IMAGES_SWIM);
    }

    playHurt() {
        this.playAnimation(this.IMAGES_HURT);
    }
}

// TODO: Add endboss following logic