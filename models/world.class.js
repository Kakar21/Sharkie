class World {
    character = new Character();
    endboss = new Endboss();
    level = level1;
    canvas;
    game;
    ctx;
    keyboard;
    camera_x = 0;
    healthBar = new HealthBar();
    coinBar = new CoinBar();
    poisonBar = new PoisonBar();
    healthBarEndboss = new HealthBarEndboss();
    shootableObjects = [];


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
        setStoppableInterval(() => {
            this.checkCollisionCharWithEnemy();
            this.checkCollisionBubbleWithEnemy();
            this.checkCollisionCharWithCollectable();
            this.checkCollisionCharNearPuffer();
            this.checkCollisionCharNearBoss();
            this.checkCollisionPoisonWithBoss();
            this.checkCollisionCharWithBoss();
            this.checkGameStatus();
            BACKGROUND_SOUND_MUSIC.play();
        }, 1000 / 60);
    }


    checkGameStatus() {
        if (this.character.hasDied) {
            setTimeout(() => {
                gameLost();
            }, 3000);

        } else if (this.endboss.hasDied) {
            setTimeout(() => {
                gameWon();
            }, 3000);
        }
    }


    /**
     * Check collisions for all kind of different objects
     */
    checkCollisionCharWithEnemy() {
        // Character with all Enemies
        this.level.enemies.forEach((enemy) => {

            if (this.character.isColliding(enemy) && !this.character.isDead() && !enemy.isDead()) {
                this.character.hitBy = enemy.constructor.name;

                // Character with diffrent types of Jelly Fishes
                if (enemy instanceof JellyFish && enemy.color === 'GREEN' || enemy.color === 'PINK') {
                    this.character.hit(1);
                } else {
                    this.character.hit(0.5);
                }

                if (this.character.hitBy === 'JellyFish') {
                    CHARACTER_SOUND_SHOCK.play();
                } else {
                    CHARACTER_SOUND_POISON.play();
                }

                this.healthBar.setPercentage(this.character.energy);
            };
        });
    }

    checkCollisionBubbleWithEnemy() {
        // All bubbles with Enemies
        if (this.shootableObjects.length >= 1) {

            this.level.enemies.forEach((enemy) => {

                this.shootableObjects.forEach((bubble) => {

                    if (bubble.isColliding(enemy)) {

                        let i = this.shootableObjects.indexOf(bubble);

                        if (enemy instanceof JellyFish && !bubble.poison) {
                            enemy.energy = 0;
                            BUBBLE_SOUND.play();
                        } else {
                            BUBBLE_SOUND_POP.play();
                        }

                        this.shootableObjects.splice(i, 1);
                    };
                });
            });
        }
    }

    checkCollisionCharWithCollectable() {
        // Character with collectables
        this.level.collectables.forEach((collectable) => {

            if (this.character.isColliding(collectable) && !this.character.isDead()) {

                let i = this.level.collectables.indexOf(collectable);

                if (collectable instanceof Coin) {
                    this.coinBar.setPercentage(this.coinBar.percentage += 10);
                    COIN_SOUND.currentTime = 0;
                    COIN_SOUND.play();

                } else if (collectable instanceof Poison) {
                    this.poisonBar.setPercentage(this.poisonBar.percentage += 10);
                    POISON_SOUND.currentTime = 0;
                    POISON_SOUND.play();
                }

                this.level.collectables.splice(i, 1);
            };
        });
    }

    checkCollisionCharNearPuffer() {
        // Character with Puffer Fishes nearby
        this.level.enemies.forEach((enemy) => {

            if (enemy instanceof PufferFish && this.character.isNearby(enemy)) {
                enemy.startPuffingUp();
            };
        });
    }

    checkCollisionCharNearBoss() {
        // Character near Endboss
        if (this.character.x > 3860) {
            this.endboss.startIntroduce();
        }
    }

    checkCollisionPoisonWithBoss() {
        // Poison Bubble with Endboss
        if (this.shootableObjects.length >= 1) {

            this.shootableObjects.forEach((bubble) => {

                if (bubble.isColliding(this.endboss)) {

                    let i = this.shootableObjects.indexOf(bubble);

                    if (bubble.poison && !this.endboss.isDead()) {
                        ENDBOSS_SOUND_HURT.play();
                        this.endboss.hit(20);
                        BUBBLE_SOUND.play();
                    } else {
                        BUBBLE_SOUND_POP.play();
                    }

                    this.healthBarEndboss.setPercentage(this.endboss.energy);
                    this.shootableObjects.splice(i, 1);
                }
            });
        }
    }

    checkCollisionCharWithBoss() {
        // Character with Endboss
        if (this.character.isColliding(this.endboss) && !this.character.isDead()) {
            this.character.hitBy = this.endboss.constructor.name;
            this.endboss.startBite();
        }
    }


    /**
     * Calls every addToMap() object to draw them on the canvas everytime
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);

        // Background
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.collectables);

        // Lights
        this.ctx.globalAlpha = 0.25;
        this.addObjectsToMap(this.level.lights);
        this.ctx.globalAlpha = 1;

        // Moving Objects
        this.addObjectsToMap(this.level.enemies);
        this.addToMap(this.endboss);
        this.addObjectsToMap(this.shootableObjects);
        this.addToMap(this.character);

        // Fixed Objects
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.healthBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.poisonBar);
        this.addToMap(this.healthBarEndboss);
        this.ctx.translate(this.camera_x, 0);

        this.ctx.translate(-this.camera_x, 0);

        // Draw() will be executed again and again
        let self = this;
        this.game = requestAnimationFrame(function () {
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
        });
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