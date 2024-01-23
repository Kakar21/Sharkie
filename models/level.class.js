class Level {
    enemies;
    lights;
    backgroundObjects;
    level_end_x = 4380;
    level_end_y = 480;

    constructor(enemies, lights, backgroundObjects) {
        this.enemies = enemies;
        this.lights = lights;
        this.backgroundObjects = backgroundObjects;
    }
}