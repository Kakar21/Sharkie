class Level {
    enemies;
    collectables;
    lights;
    backgroundObjects;


    constructor(enemies, collectables, lights, backgroundObjects) {
        this.enemies = enemies;
        this.collectables = collectables;
        this.lights = lights;
        this.backgroundObjects = backgroundObjects;
    }
}