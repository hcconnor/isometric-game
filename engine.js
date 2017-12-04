var canvas = document.getElementById("isometric-game");
var context = canvas.getContext('2d');
var canvas2 = document.getElementById("fog");

//
//var context2 = canvas2.getContext('2d');
//
var overlay = 'rgba( 0, 0, 0, 1 )'

function printMousePos(event) {
  console.log(
    "clientX: " + event.clientX +
    " - clientY: " + event.clientY + " mapX:"+ Math.floor(event.clientX/30)+ ", MapY: "+ (Math.floor(event.clientY/30)));

}

context2.fillStyle = overlay;
context2.fillRect( 0, 0, 1280, 800 );


document.addEventListener("click", printMousePos);

function doClick(event){
  if (checkBounds(camButton.x,camButton.y,event.clientX,event.clientY))
  {
    camButton.click();
  }
}



function checkmove(x, y) {
  if(world1.getTile(Math.floor(x/30),(Math.floor(y/30))) == 1 || world1.getTile((Math.ceil(x/30)),
  (Math.floor(y/30))) == 1 || world1.getTile(Math.floor(x/30),(Math.ceil(y/30))) == 1 || world1.getTile(Math.ceil(x/30),(Math.ceil(y/30))) == 1) {
    return false;
  } else {
    return true;
  }
}



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


function SpriteSheet(sprite, frameWidth, frameHeight, frameSpeed) {
    this.image = sprite;
    var image = sprite;
    console.log(this.image);
    var numFrames;

    var currentFrame = 0;
    var counter = 0;
    this.startFrame = 0;
    this.endFrame = 0;
    var animationL = this.endFrame - this.startFrame;

    image.onload = function() {
        numFrames = Math.floor(image.width / frameWidth);
        console.log(image.width);
    };

    this.setFrameRange = function(start, finish) {
        this.startFrame = start;
        this.endFrame = finish;
        currentFrame = this.startFrame;
        animationL = this.endFrame - this.startFrame;
    };

    this.update = function() {
            //console.log(this.image);
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
        //console.log(this.image)
        var row = Math.floor(currentFrame / numFrames);
        var col = Math.floor(currentFrame % numFrames);
        context.drawImage(this.image, col * frameWidth, row * frameHeight, frameWidth, frameHeight, x, y, frameWidth, frameHeight);
    };
}

function checkBounds(x,y, mouseX, mouseY)
{
	if((mouseX < (x + 30)) && (mouseY < (y + 30)) && (mouseX > (x)) && (mouseY > (y)))
  {
  return true;
  }

  else
  {
  return false;
  }
}



function Button(x,y,width){
  this.x = x;
  this.y = y;
  this.width = width;
  this.click = function(){
    window.alert("wow");
  }
  this.update = function(){

  }
  this.draw = function(){
    context.fillStyle = 'black';
    context.fillRect(this.x,this.y,this.width,this.width);
    context.stroke();
  }
}




function UI(x,y,img){
    this.x = x;
    this.y = y;
    this.img = img;
    this.draw = function(){
        context.rect(this.x,this.y,210,80);
        context.stroke();
    }
}
