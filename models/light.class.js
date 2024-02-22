class Light extends MoveableObject {
    y = 0;
    height = 480;
    width = 1706.67;


    constructor(x) {
        super().loadImage('img/3. Background/Layers/1. Light/COMPLETO.png');
        this.x = x;

        this.animate();
    }


    /**
     * Animates the light
     */
    animate() {
        this.moveLeft();
    }
}