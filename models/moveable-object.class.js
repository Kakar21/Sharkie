class MoveableObject extends DrawableObject {
    speed = 0.1;
    otherDirection = false;
    energy = 100;
    lastHit = 0;
    offsetY = 0;
    direction = 'up';
    level_end_x = 4536;
    level_end_y = 480;
    level_end_space = 30;


    /**
     * Checks if the object collides with the given object
     * @param {object} obj 
     * @returns - boolean
     */
    isColliding(obj) {
        return (this.x + this.width - this.offset.right) >= obj.x + obj.offset.left && this.x + this.offset.left <= (obj.x + obj.width - obj.offset.right) &&
            (this.y - this.offset.bottom + this.height) >= (obj.y + obj.offset.top) &&
            (this.y + this.offset.top) <= (obj.y - obj.offset.bottom + obj.height);
    }


    /**
     * Checks if the object is in the nearby/reaction box of the given object
     * @param {object} obj 
     * @returns - boolean
     */
    isNearby(obj) {
        return (this.x + this.width - this.offset.right) >= obj.x + obj.offset.left - obj.offsetNear.left && this.x + this.offset.left <= (obj.x + obj.width - obj.offset.right + obj.offsetNear.right) &&
            (this.y - this.offset.bottom + this.height) >= (obj.y + obj.offset.top - obj.offsetNear.top) &&
            (this.y + this.offset.top) <= (obj.y - obj.offset.bottom + obj.offsetNear.bottom + obj.height);
    }


    getMiddleX(obj) {
        return obj.x + obj.offset.left + ((obj.width - obj.offset.left - obj.offset.right) / 2);
    }

    getMiddleY(obj) {
        return obj.y + obj.offset.top + ((obj.height - obj.offset.top - obj.offset.bottom) / 2)
    }


    isAtLevelEnd(obj, direction) {
        if (direction === 'left') {
            return (obj.x + obj.offsets.normal.left) < this.level_end_space;
        } else if (direction === 'right') {
            return (obj.x + obj.width - obj.offsets.normal.right) > this.level_end_x;
        } else if (direction === 'up') {
            return (obj.y + obj.offsets.normal.top) < this.level_end_space;
        } else if (direction === 'down') {
            return (obj.y + obj.height - obj.offsets.normal.bottom) > this.level_end_y - this.level_end_space;
        }
    }


    /**
     * Substracts the given damage from the energy of the object
     * @param {number} damage 
     */
    hit(damage) {
        this.energy -= damage;

        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    /**
     * Checks if the last hit was more than 1 second ago
     * @returns - boolean
     */
    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit; // Difference in ms
        timePassed = timePassed / 1000 // Difference in s
        return timePassed < 1;
    }


    /**
     * Checks if the object has 0 energy
     * @returns - boolean
     */
    isDead() {
        return this.energy === 0;
    }


    /**
     * Sets the object image to the currentImage of the array
     * @param {array} images 
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    /**
     * Sets the object image to the currentImage of the array in a loop till all images where set
     * @param {array} images 
     */
    playAnimationOnce(images) {
        let i = this.currentImage % images.length;
        if (i < images.length - 1) {
            let path = images[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }
    }
    

    /**
     * Moves the object left in itselfs speed
     */
    moveLeft() {
        setInterval(() => {
            if (this.energy > 0) {
                this.x -= this.speed;
            }
        }, 1000 / 60);
    }


    /**
     *  Moves the object up and down till the canvas borders in a loop in itselfs speed
     */
    moveUpAndDown() {
        setInterval(() => {
            if (!this.isDead()) {
                // Change Direction
                if (this.isAtLevelEnd(this, 'up')) {
                    this.direction = 'down';
                } else if (this.isAtLevelEnd(this, 'down')) {
                    this.direction = 'up';
                }

                // Movement
                if (this.direction === 'down') {
                    this.y += this.speed;
                } else if (this.direction === 'up') {
                    this.y -= this.speed;
                }
            }
        }, 1000 / 60);
    }


}