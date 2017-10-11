var canvas = document.getElementById("isometric-game");
var context = canvas.getContext('2d');



//key codes for WASD
var RIGHT_KEY_CODE = 68;
var LEFT_KEY_CODE = 65;
var UP_KEY_CODE = 87;
var DOWN_KEY_CODE = 83;


var keysPressed = {};
keysPressed[RIGHT_KEY_CODE] = false;
keysPressed[LEFT_KEY_CODE] = false;
keysPressed[UP_KEY_CODE] = false;
keysPressed[DOWN_KEY_CODE] = false;

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

function keyDown(evt)
{
	if(evt.keyCode in keysPressed)
  	keysPressed[evt.keyCode]  = true;
}

function keyUp(evt)
{
	if(evt.keyCode in keysPressed)
		keysPressed[evt.keyCode] = false;
}

function Player(x,y,width,height)
{
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.running = false;
    this.alive = true;
    this.sprite = new
    SpriteSheet('http://i.imgur.com/ttnYfak.png', this.width, this.height, 4);
    this.sprite.setFrameRange(1,5);
    this.update = function()
    {
      if(keysPressed[RIGHT_KEY_CODE])
        {
        	this.x += 2;
        }
        if(keysPressed[LEFT_KEY_CODE])
        {
        	this.x -= 2;
        }
        if(keysPressed[UP_KEY_CODE])
        {
        	this.y -= 2;
        }
        if(keysPressed[DOWN_KEY_CODE])
        {
        	this.y += 2;
        }
    };

    this.draw = function()
    {
     this.sprite.update();
     this.sprite.draw(this.x, this.y);
    };

}
var player = new Player(200, canvas.height - 40, 24, 32)

//temp tile types
// var TILE_TYPE_WATER = 0;
// var TILE_TYPE_GRASS = 1;
// var TILE_TYPE_FIRE = 3;
//
// var NUM_TILE_TYPES = 3;
//
// var TILE_COLORS = ['#0000DD', '#00CC00', '#FF0000'];
//
// var TILE_SIZE = 50;
// var WORLD_SIZE = 10000;
//
// var TILES_IN_A_ROW = Math.floor(WORLD_SIZE/TILE_SIZE);
//
// var VIEW_WIDTH = canvas.width;
// var VIEW_HEIGHT = canvas.height;
//
// var VIEW_TILE_WIDTH = Math.floor(VIEW_WIDTH / TILE_SIZE);
// var VIEW_TILE_HEIGHT = Math.floor(VIEW_HEIGHT / TILE_SIZE);
//
//
//
// //list of keyspressed variables
// var keysPressed = {};
// keysPressed[RIGHT_KEY_CODE] = false;
// keysPressed[LEFT_KEY_CODE] = false;
// keysPressed[UP_KEY_CODE] = false;
// keysPressed[DOWN_KEY_CODE] = false;
//
// //player in the center of the world
// var playerX = WORLD_SIZE / 2;
// var playerY = WORLD_SIZE / 2;
//
// //init the tile grid and tile arrays
// var tileGrid = [];
// // var tiles = [];
//
//
// //randomly generated tile layout for the world
// for(var iter = 0; iter < TILES_IN_A_ROW; iter ++)
// {
// 	var column = new Array();
//   for(var innerIter = 0; innerIter < TILES_IN_A_ROW; innerIter++)
//   {
//   	column[innerIter] = Math.floor(Math.random()*NUM_TILE_TYPES);
//   }
//   tileGrid[iter] = column;
// }
//
// function onEnterFrame()
// {
//
// 	if(keysPressed[RIGHT_KEY_CODE])
//   {
//   	playerX += 2;
//   }
//   if(keysPressed[LEFT_KEY_CODE])
//   {
//   	playerX -= 2;
//   }
//   if(keysPressed[UP_KEY_CODE])
//   {
//   	playerY -= 2;
//   }
//   if(keysPressed[DOWN_KEY_CODE])
//   {
//   	playerY += 2;
//   }
//
//   var left = playerX - VIEW_WIDTH / 2;
//   var top = playerY - VIEW_HEIGHT / 2;
//
//   var leftTile = Math.floor(left / TILE_SIZE);
//   var topTile = Math.floor(top / TILE_SIZE);
//
//   var tileOffsetX = left % TILE_SIZE;
//   var tileOffsetY = top % TILE_SIZE;
//
//
//   context.clearRect(0, 0, canvas.width, canvas.height);
//
//   for (var iter = 0; iter < VIEW_TILE_WIDTH; iter++)
//   {
//   	for(var innerIter = 0; innerIter < VIEW_TILE_HEIGHT; innerIter++)
//     {
//     	var tileColor = tileGrid[ leftTile + iter][ topTile + innerIter ];
//       context.fillStyle = TILE_COLORS[tileColor];
//       context.fillRect(iter*TILE_SIZE - tileOffsetX, innerIter*TILE_SIZE - tileOffsetY, TILE_SIZE, TILE_SIZE);
//     }
//   }
//
//   context.fillStyle = 'white';
//   context.fillRect(VIEW_WIDTH / 2 , VIEW_HEIGHT / 2 , 15 , 15);
//
// }//onEnterFrame


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

function update(){
  player.update();
}

function draw() {
	context.font = "30px Verdana";
  canvas.width = canvas.width;
  context.fillStyle = "#add8e6";
  context.fillRect(0, 0, canvas.width, canvas.height);

  player.draw();
}

function game_loop() {

  update();
  draw();

}

setInterval(game_loop, 30);
