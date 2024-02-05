class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    lifeBar = new LifeBar();
    coinBar = new CoinBar();
    poisonBar = new PoisonBar();
    shootableObjects = [];

    //TODO: Add underwater ambience and music


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    /**
     * Sets the world of the character to this object
     */
    setWorld() {
        this.character.world = this;
    }


    /**
     * Runs different function in a loop
     */
    run() {
        setInterval(() => {
            this.checkCollisions();
            // this.checkShootObjects();
        }, 100);
    }


    // /**
    //  * Checks if the player pressed the key to shoot a bubble and creates a new object
    //  */
    // checkShootObjects() {
    //     // Shooting bubbles
    //     if (this.keyboard.H) {
    //         let bubble = new ShootableObject(this.character.x, this.character.y);
    //         this.shootableObjects.push(bubble);
    //     }


    // }


    /**
     * Check collisions for all kind of different objects
     */
    checkCollisions() {
        // Character with all Enemies
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hitBy = enemy.constructor.name;

                // Character with diffrent types of Jelly Fishes
                if (enemy instanceof JellyFish && enemy.color == 'GREEN' || enemy.color == 'PINK') {
                    this.character.hit(10);
                } else {
                    this.character.hit(1);
                }

                this.lifeBar.setPercentage(this.character.energy)
                console.log('Collision with Character, energy', this.character.energy);
            };
        });

        // All bubbles with Enemies
        if (this.shootableObjects.length >= 1) {
            this.level.enemies.forEach((enemy) => {
                this.shootableObjects.forEach((bubble) => {
                    if (bubble.isColliding(enemy)) {

                        if (enemy instanceof JellyFish && !bubble.poison) {
                            enemy.energy = 0;
                        }
                        //TODO: let bubbles go trought if they are dead
                        let i = this.shootableObjects.indexOf(bubble);
                        this.shootableObjects.splice(i, 1);
                        // TODO: Add popping sound
                    };
                });
            })
        }

        // Character with collectables
        this.level.collectables.forEach((collectable) => {
            if (this.character.isColliding(collectable)) {

                if (collectable instanceof Coin) {
                    this.coinBar.setPercentage(this.coinBar.percentage += 10);
                } else if (collectable instanceof Poison) {
                    this.poisonBar.setPercentage(this.poisonBar.percentage += 10);
                }

                let i = this.level.collectables.indexOf(collectable);
                this.level.collectables.splice(i, 1);
                // TODO: Add collecting sound
            };
        });

        // Character with Puffer Fishes 
        this.level.enemies.forEach((enemy) => {
            if (enemy instanceof PufferFish) {
                if (this.character.isNearBy(enemy)) {

                    if (enemy.puffedUp == false) {
                        enemy.currentImage = 0;
                        enemy.puffingUp = true;
                    }
                }
            };
        });
    }


    /**
     * Calls every addToMap() object to draw them on the canvas everytime
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);


        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.collectables);

        this.ctx.globalAlpha = 0.25;
        this.addObjectsToMap(this.level.lights);
        this.ctx.globalAlpha = 1;

        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.shootableObjects);
        this.addToMap(this.character);

        // Space for fixed objects
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.lifeBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.poisonBar);
        this.ctx.translate(this.camera_x, 0);


        this.ctx.translate(-this.camera_x, 0);


        // Draw() wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }


    /**
     * Calls addToMap() on every object
     * @param {array} objects 
     */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    }


    /**
     * Draws the object on the canvas with all frames
     * @param {object} mo 
     */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        mo.drawFrameRedFrame(this.ctx);
        mo.drawFrameYellowFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }


    /**
     * Mirrors the image of the object
     * @param {object} mo 
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }


    /**
     * Mirrors the image of the object back to normal
     * @param {object} mo 
     */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}