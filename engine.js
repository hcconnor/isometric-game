var canvas = document.getElementById("isometric-game");
var context = canvas.getContext('2d');
var canvas2 = document.getElementById("fog");

var timer = 0;
var camArray = [];
var camMode = false;
var context2 = canvas2.getContext('2d');

var overlay = 'rgba( 0, 0, 0, 1 )'


context2.fillStyle = overlay;
context2.fillRect( 0, 0, 1280, 800 );


document.addEventListener("click", doClick);

function doClick(event){
  if (checkBounds(camButton.x,camButton.y,event.clientX,event.clientY,30,30))
  {
    camButton.click();
  }
  if (checkBounds(player.x,player.y,event.clientX,event.clientY,24,32)&&timer ==0)
  {
      alert("overlord wins!");
  }
  else {
      timer = 300
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
        var row = Math.floor(currentFrame / numFrames);
        var col = Math.floor(currentFrame % numFrames);

        if (this.image.complete) {
            context.drawImage(this.image, col * frameWidth, row * frameHeight, frameWidth, frameHeight, x, y, frameWidth, frameHeight);
        } else {

            this.image.onload = function () {
        context.drawImage(this.image, col * frameWidth, row * frameHeight, frameWidth, frameHeight, x, y, frameWidth, frameHeight);
        };
        }


    };
}

function checkBounds(x,y, mouseX, mouseY, width, height)
{
	if((mouseX < (x + width)) && (mouseY < (y + height)) && (mouseX > (x)) && (mouseY > (y)))
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
    document.removeEventListener("click", doClick);
    document.addEventListener("click", placeCam);
    console.log("cam mode");
    camMode = true;
  }
  this.update = function(){

  }
  this.draw = function(){
    context.fillStyle = 'black';
    context.fillRect(this.x,this.y,this.width,this.width);
    context.stroke();
  }
}

function placeCam(){
    cam = new Cam(mouseX -50 ,mouseY -50);
    if(camArray.length >= 3)
    {
        camArray.shift();
        camArray.push(cam);
    }
    else{
        camArray.push(cam);
    }

    document.removeEventListener("click", placeCam);
    document.addEventListener("click", doClick);
    camMode = false;
}

function Cam(x,y){
    this.x = x;
    this.y = y;
    this.draw = function(){
        context2.clearRect(x,y,100,100);
        context.fillStyle="black";
        context.fillRect(this.x+45,this.y+45,10,10)
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
