
function collisionList(object, array) {
    for (var i = 0; i < array.length; i++) {
        if (doesCollide(object, array[i])) {
            return array[i];
        }
    }
    return false;
}

function doesCollide(obj1, obj2) {
    sX = obj1.x;
    sW = obj1.width;
    sY = obj1.y;
    sH = obj1.height;
    oX = obj2.x;
    oY = obj2.y;
    oW = obj2.width;
    oH = obj2.height;

    if (sX < oX + oW && sX + sW > oX && sY < oY + oH && sH + sY > oY) {
        return true;
    }
    return false;
}


function SpriteSheet(url, frameWidth, frameHeight, frameSpeed) {
    var image = new Image();
    var numFrames;

    var currentFrame = 0;
    var counter = 0;
    this.startFrame = 0;
    this.endFrame = 0;
    var animationL = this.endFrame - this.startFrame;
    image.src = url;

    image.onload = function() {
        numFrames = Math.floor(image.width / frameWidth);
    };

    this.setFrameRange = function(start, finish) {
        this.startFrame = start;
        this.endFrame = finish;
        currentFrame = this.startFrame;
        animationL = this.endFrame - this.startFrame;
    };

    this.update = function() {
        if (counter == (frameSpeed - 1)) {
            if (currentFrame == this.endFrame) {
                currentFrame = this.startFrame;
            } else {
                currentFrame = (currentFrame + 1);
            }
        }

        counter = (counter + 1) % frameSpeed;
    };

    this.draw = function(x, y) {
        var row = Math.floor(currentFrame / numFrames);
        var col = Math.floor(currentFrame % numFrames);
        context.drawImage(image, col * frameWidth, row * frameHeight, frameWidth, frameHeight, x, y, frameWidth, frameHeight);

    };

}
