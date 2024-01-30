class Poison extends CollectableObject {

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

    constructor() {
        super().loadImage(this.IMAGES_POISON[0]);
        this.x = 400;
        this.y = 100;
        this.width = 50;
        this.height = 50;

        this.loadImages(this.IMAGES_POISON);
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_POISON);
        }, 100);
    }
}