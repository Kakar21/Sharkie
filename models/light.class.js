class Light extends MoveableObject {
    y = 0;
    height = 480;
    width = 1706.67;

    constructor() {
        super().loadImage('../img/3. Background/Layers/1. Light/COMPLETO.png');
        this.x = Math.random() * 500;
        this.animate();
    }

    animate() {
        setInterval( () => {
            this.x -= 0.1;
        }, 1000 / 60);
    }
}