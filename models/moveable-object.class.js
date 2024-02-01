class MoveableObject extends DrawableObject {
    speed = 0.1;
    otherDirection = false;
    energy = 100;
    lastHit = 0;
    offsetY = 0;
    direction = 'up';

    isColliding(obj) {
        return (this.x + this.width - this.offset.right) >= obj.x + obj.offset.left && this.x + this.offset.left <= (obj.x + obj.width - obj.offset.right) &&
            (this.y - this.offset.bottom + this.height) >= (obj.y + obj.offset.top) &&
            (this.y + this.offset.top) <= (obj.y - obj.offset.bottom + obj.height);
    }

    hit(damage) {
        this.energy -= damage;

        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit; // Difference in ms
        timePassed = timePassed / 1000 // Difference in s
        return timePassed < 1;
    }

    isDead() {
        return this.energy == 0;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        console.log('Moving right');
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }

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