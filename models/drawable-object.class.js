class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 120;
    y = 250;
    height = 150;
    width = 100;
    offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
    

    /**
     * Loads all the images of the array
     * @param {array} array 
     */
    loadImages(array) {
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }


    /**
     * Loads the image
     * @param {string} path 
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    /**
     * Checks the percentage and returns the right number for the right image
     * @returns - Number of the image with the current percentage
     */
    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }


    /**
     * Draws an image on the canvas
     * @param {context} ctx 
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


    /**
     * Draws a frame around the image border in blue
     * @param {context} ctx 
     */
    drawFrame(ctx) {

        if (this instanceof Character || this instanceof PufferFish || this instanceof JellyFish || this instanceof Endboss || this instanceof CollectableObject || this instanceof ShootableObject) {
            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }


    /**
     * Draws a frame around the object hitbox in red
     * @param {context} ctx 
     */
    drawFrameRedFrame(ctx){
        if (this instanceof Character || this instanceof PufferFish || this instanceof JellyFish || this instanceof Endboss || this instanceof CollectableObject || this instanceof ShootableObject) {
            ctx.beginPath(); 
            ctx.lineWidth = '1';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x + this.offset.left, this.y + this.offset.top, (this.x + this.width - this.offset.right) - (this.x + this.offset.left), (this.y + this.height - this.offset.bottom) - (this.y + this.offset.top));
            ctx.stroke();   
        }
    }


    /**
     * Draws a frame around the object reaction box in yellow
     * @param {context} ctx 
     */
    drawFrameYellowFrame(ctx){
        if (this instanceof PufferFish) {
            ctx.beginPath(); 
            ctx.lineWidth = '0.5';
            ctx.strokeStyle = 'Yellow';
            ctx.rect(this.x + this.offset.left - this.offsetNear.left, this.y + this.offset.top - this.offsetNear.top, (this.x + this.width - this.offset.right + this.offsetNear.right) - (this.x + this.offset.left - this.offsetNear.left), (this.y + this.height - this.offset.bottom + this.offsetNear.bottom) - (this.y + this.offset.top - this.offsetNear.top));
            ctx.stroke();   
        }
    }
}