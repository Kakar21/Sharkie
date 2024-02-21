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
    percent;


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
        imagesToLoad++;
        this.img = new Image();
        this.img.src = path;
        this.img.onload = () => {
            imagesLoaded++;
            percent = (imagesLoaded / imagesToLoad) * 100;
            document.getElementById('loadingBar').value = percent;

            if (percent == 100) {
                document.getElementById('loadingScreen').classList.add('d-none');
            }
        };
    }


    /**
     * Checks the percentage and returns the right number for the right image
     * @returns - Number of the image with the current percentage
     */
    resolveImageIndex() {
        if (this.percentage >= 90) {
            return 5;
        } else if (this.percentage >= 70) {
            return 4;
        } else if (this.percentage >= 50) {
            return 3;
        } else if (this.percentage >= 30) {
            return 2;
        } else if (this.percentage >= 10) {
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
}