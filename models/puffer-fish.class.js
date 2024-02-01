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
    puffedUp = false;

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
    };

    // IMAGES_PUFFING_UP = {
    //     GREEN: [
    //         '../img/2. Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png',
    //         '../img/2. Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png',
    //         '../img/2. Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png',
    //         '../img/2. Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png',
    //         '../img/2. Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png'
    //     ],
    //     ORANGE: [
    //         '../img/2. Enemy/1.Puffer fish (3 color options)/2.transition/2.transition1.png',
    //         '../img/2. Enemy/1.Puffer fish (3 color options)/2.transition/2.transition2.png',
    //         '../img/2. Enemy/1.Puffer fish (3 color options)/2.transition/2.transition3.png',
    //         '../img/2. Enemy/1.Puffer fish (3 color options)/2.transition/2.transition4.png',
    //         '../img/2. Enemy/1.Puffer fish (3 color options)/2.transition/2.transition5.png'
    //     ],
    //     RED: [
    //         '../img/2. Enemy/1.Puffer fish (3 color options)/2.transition/3.transition1.png',
    //         '../img/2. Enemy/1.Puffer fish (3 color options)/2.transition/3.transition2.png',
    //         '../img/2. Enemy/1.Puffer fish (3 color options)/2.transition/3.transition3.png',
    //         '../img/2. Enemy/1.Puffer fish (3 color options)/2.transition/3.transition4.png',
    //         '../img/2. Enemy/1.Puffer fish (3 color options)/2.transition/3.transition5.png'
    //     ]
    // };
    // TODO: Add Puffing up (one time animation)

    IMAGES_PUFFED_WALKING = {
        GREEN: [
            '../img/2. Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim1.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim2.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim3.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim4.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim5.png'
        ],
        ORANGE: [
            '../img/2. Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim1.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim2.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim3.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim4.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim5.png'
        ],
        RED: [
            '../img/2. Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim1.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim2.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim3.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim4.png',
            '../img/2. Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim5.png'
        ]
    };

    constructor() {
        super();
        this.color = this.getColor();
        this.loadImage(this.IMAGES_WALKING[this.color][0]);
        this.x = 200 + Math.random() * 500;
        this.speed = 0.1 + Math.random() * 0.5;


        this.loadImages(this.IMAGES_WALKING[this.color]);
        // this.loadImages(this.IMAGES_PUFFING_UP[this.color]);
        this.loadImages(this.IMAGES_PUFFED_WALKING[this.color]);
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

            if (this.isDead()) {

            } else if (this.puffedUp) {
                // this.playAnimation(this.IMAGES_PUFFING_UP[this.color]);
                this.playAnimation(this.IMAGES_PUFFED_WALKING[this.color]);
            } else {
                this.playAnimation(this.IMAGES_WALKING[this.color]);
            }
        }, 100);
    }
}