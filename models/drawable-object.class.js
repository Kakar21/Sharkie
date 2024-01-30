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
    
    loadImages(array) {
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementById('image') <img id="image">
        this.img.src = path;
    }

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

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {

        if (this instanceof Character || this instanceof PufferFish || this instanceof JellyFish || this instanceof Endboss || this instanceof CollectableObject) {
            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    drawFrameRedFrame(ctx){
        if (this instanceof Character || this instanceof PufferFish || this instanceof JellyFish || this instanceof Endboss || this instanceof CollectableObject) {
            ctx.beginPath(); 
            ctx.lineWidth = '1';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x + this.offset.left, this.y + this.offset.top, (this.x + this.width - this.offset.right) - (this.x + this.offset.left), (this.y + this.height - this.offset.bottom) - (this.y + this.offset.top));
            ctx.stroke();   
        }
    }
}