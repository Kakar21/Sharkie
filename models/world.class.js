class World {
    character = new Character();
    endboss = new Endboss();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    healthBar = new HealthBar();
    coinBar = new CoinBar();
    poisonBar = new PoisonBar();
    healthBarEndboss = new HealthBarEndboss();
    shootableObjects = [];

    // TODO: Perfectly set all speeds 
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
        this.endboss.world = this;
    }


    /**
     * Runs different function in a loop
     */
    run() {
        setInterval(() => {
            this.checkCollisions();
            BACKGROUND_SOUND_MUSIC.play()
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
            if (this.character.isColliding(enemy) && !this.character.isDead()) {
                this.character.hitBy = enemy.constructor.name;

                // Character with diffrent types of Jelly Fishes
                if (enemy instanceof JellyFish && enemy.color === 'GREEN' || enemy.color === 'PINK') {
                    this.character.hit(10);
                } else {
                    this.character.hit(1);
                }

                if (this.character.hitBy === 'JellyFish') {
                    CHARACTER_SOUND_SHOCK.play();
                } else {
                    CHARACTER_SOUND_POISON.play();
                }

                this.healthBar.setPercentage(this.character.energy)
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
                            BUBBLE_SOUND.play()
                        } else {
                            BUBBLE_SOUND_POP.play()
                        }

                        let i = this.shootableObjects.indexOf(bubble);
                        this.shootableObjects.splice(i, 1);
                    };
                });
            })
        }

        // TODO: Any static animation 60 FPS!

        // Character with collectables
        this.level.collectables.forEach((collectable) => {
            if (this.character.isColliding(collectable) && !this.character.isDead()) {

                if (collectable instanceof Coin) {
                    this.coinBar.setPercentage(this.coinBar.percentage += 10);
                    COIN_SOUND.currentTime = 0;
                    COIN_SOUND.play()
                } else if (collectable instanceof Poison) {
                    this.poisonBar.setPercentage(this.poisonBar.percentage += 10);
                    POISON_SOUND.currentTime = 0;
                    POISON_SOUND.play()
                }
                let i = this.level.collectables.indexOf(collectable);
                this.level.collectables.splice(i, 1);
            };
        });

        // Character with Puffer Fishes nearby
        this.level.enemies.forEach((enemy) => {
            if (enemy instanceof PufferFish && this.character.isNearby(enemy)) {
                enemy.startPuffingUp();
            };
        });

        // Character near Endboss
        if (this.character.x > 3860) {
            this.endboss.startIntroduce();
        }

        // Poison Bubble with Endboss
        if (this.shootableObjects.length >= 1) {
            this.shootableObjects.forEach((bubble) => {
                if (bubble.isColliding(this.endboss)) {
                    if (bubble.poison && !this.endboss.isDead()) {
                        ENDBOSS_SOUND_HURT.play();
                        this.endboss.hit(20);
                        BUBBLE_SOUND.play()
                    } else {
                        BUBBLE_SOUND_POP.play()
                    }

                    this.healthBarEndboss.setPercentage(this.endboss.energy)
                    let i = this.shootableObjects.indexOf(bubble);
                    this.shootableObjects.splice(i, 1);
                }
            });
        }

        // Character with Endboss
        if (this.character.isColliding(this.endboss) && !this.character.isDead()) {
            this.character.hitBy = this.endboss.constructor.name;
            console.log(this.character.hitBy);
            this.endboss.startBite();
        }
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
        this.addToMap(this.endboss);
        this.addObjectsToMap(this.shootableObjects);
        this.addToMap(this.character);


        // Space for fixed objects
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.healthBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.poisonBar);
        this.addToMap(this.healthBarEndboss);
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