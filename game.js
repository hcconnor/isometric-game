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
