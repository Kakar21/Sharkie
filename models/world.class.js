class World {
    character = new Character();
    enemies = [
    new pufferFish(),
    new pufferFish(),
    new pufferFish()
    ];
    lights = [
        new Light()
    ];
    backgroundObjects = [
        new BackgroundObject('../img/3. Background/Layers/5. Water/D.png'),
        new BackgroundObject('../img/3. Background/Layers/4.Fondo 2/D.png'),
        new BackgroundObject('../img/3. Background/Layers/3.Fondo 1/D.png'),
        new BackgroundObject('../img/3. Background/Layers/2. Floor/D.png')
    ];
    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.lights);
        this.addObjectsToMap(this.enemies);
        this.addToMap(this.character);


        // Draw() wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    }

    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}