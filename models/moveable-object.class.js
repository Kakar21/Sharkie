class MoveableObject extends DrawableObject {
    speed = 0.1;
    otherDirection = false;
    energy = 100;
    lastHit = 0;
    offsetY = 0;
    direction = 'up';


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
    isNearBy(obj) {
        return (this.x + this.width - this.offset.right) >= obj.x + obj.offset.left - obj.offsetNear.left && this.x + this.offset.left <= (obj.x + obj.width - obj.offset.right + obj.offsetNear.right) &&
            (this.y - this.offset.bottom + this.height) >= (obj.y + obj.offset.top - obj.offsetNear.top) &&
            (this.y + this.offset.top) <= (obj.y - obj.offset.bottom + obj.offsetNear.bottom + obj.height);
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
        return this.energy == 0;
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
     * NOT FINISHED!
     * Moves the object right in itselfs speed
     */
    moveRight() {
        console.log('Moving right');
    }


    /**
     * Moves the object left in itselfs speed
     */
    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }

    
    /**
     *  Moves the object up and down till the canvas borders in a loop in itselfs speed
     */
    moveUpAndDown() {
        setInterval(() => {
            if (this.isDead()) {
                return;
            }

            if (this.y < 1 && this. y > -20) {
                this.direction = 'down';
            } else if ((this.y + this.height) > 480 && (this.y + this.height) < 500) {
                this.direction = 'up';
            }

            if (this.direction == 'down') {
                this.y += this.speed;
            } else if (this.direction == 'up') {
                this.y -= this.speed;
            }
        }, 1000 / 60);
    }


}