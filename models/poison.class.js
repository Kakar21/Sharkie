class Poison extends CollectableObject {

    width = 50;
    height = 67.5;
    offset = {
        top: 32,
        right: 9.5,
        bottom: 1.5,
        left: 9.5
    };

    IMAGES_POISON = [
        '../img/4. Score/Posión/Animada/1.png',
        '../img/4. Score/Posión/Animada/2.png',
        '../img/4. Score/Posión/Animada/3.png',
        '../img/4. Score/Posión/Animada/4.png',
        '../img/4. Score/Posión/Animada/5.png',
        '../img/4. Score/Posión/Animada/6.png',
        '../img/4. Score/Posión/Animada/7.png',
        '../img/4. Score/Posión/Animada/8.png'
    ];


    constructor(x, y) {
        super().loadImage(this.IMAGES_POISON[0]);
        this.x = x;
        this.y = y;

        this.loadImages(this.IMAGES_POISON);
        this.animate();
    }


    /**
     * Plays the coin animation in a loop
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_POISON);
        }, 100);
    }
}