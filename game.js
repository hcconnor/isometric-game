var player1Sprite = new Image();
player1Sprite.src = "./assets/player.png";
var player2Sprite = new Image();
player2Sprite.src = "./assets/player2.png";
var fogmap = new Image();
fogmap.src = "./assets/map.png";
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

function Player(x,y,width,height,sheet)
{
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.running = false;
    this.alive = true;
    this.sheet = sheet;
    this.sprite = new
    SpriteSheet(this.sheet, this.width, this.height, 4);
    this.sprite.setFrameRange(1,5);
    this.update = function()
    {
        this.sprite.image = this.sheet;
        //console.log(this.sheet);
        // var dx = Math.cos(this.direction) * distance;
        // var dy = Math.sin(this.direction) * distance;
        // if (map.get(this.x + dx, this.y) <= 0) this.x += dx;
        // if (map.get(this.x, this.y + dy) <= 0) this.y += dy;

      if(keysPressed[RIGHT_KEY_CODE])
        {
            // var temp = world1.getTile(this.x, this.y);
            // console.log(temp);
            // console.log(this.x+"," +this.y);
            // if(temp!==1){
            if(checkmove(this.x+2, this.y)) {
                this.x += 2;
            }
        }
        if(keysPressed[LEFT_KEY_CODE])
        {
            if(checkmove(this.x-2,this.y))
        	this.x -= 2;
        }
        if(keysPressed[UP_KEY_CODE])
        {
            if(checkmove(this.x, this.y-2))
        	this.y -= 2;
        }
        if(keysPressed[DOWN_KEY_CODE])
        {
            if(checkmove(this.x, this.y+2))
        	this.y += 2;
        }
    };

    this.draw = function()
    {
     this.sprite.update();
     this.sprite.draw(this.x, this.y);
    };

}

function NPC(x,y,width,height,sheet)
{
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.running = false;
    this.alive = true;
    this.sheet = sheet;
    this.sprite = new
    SpriteSheet(this.sheet, this.width, this.height, 4);
    this.sprite.setFrameRange(1,5);
    this.update = function()
    {
        this.sprite.image = this.sheet;
        //console.log(this.sheet);
        // var dx = Math.cos(this.direction) * distance;
        // var dy = Math.sin(this.direction) * distance;
        // if (map.get(this.x + dx, this.y) <= 0) this.x += dx;
        // if (map.get(this.x, this.y + dy) <= 0) this.y += dy;

      if(keysPressed[RIGHT_KEY_CODE])
        {
            // var temp = world1.getTile(this.x, this.y);
            // console.log(temp);
            // console.log(this.x+"," +this.y);
            // if(temp!==1){
            if(checkmove(this.x+2, this.y)) {
                this.x += 2;
            }
        }
        if(keysPressed[LEFT_KEY_CODE])
        {
            if(checkmove(this.x-2,this.y))
        	this.x -= 2;
        }
        if(keysPressed[UP_KEY_CODE])
        {
            if(checkmove(this.x, this.y-2))
        	this.y -= 2;
        }
        if(keysPressed[DOWN_KEY_CODE])
        {
            if(checkmove(this.x, this.y+2))
        	this.y += 2;
        }
    };

    this.draw = function()
    {
     this.sprite.update();
     this.sprite.draw(this.x, this.y);
    };

}

var map1 = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,
            1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,
            1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,
            1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,
            1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
            1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
            1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
            1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
            1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
            1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
            1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
            1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
            1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

var world1 = new World(map1, 15, 15, 30);
var player = new Player(200, canvas.height - 150, 24, 32, player1Sprite);
var dSwitch = new Activator(120,100,30,70);
var door1 = new Door(120,120,30,30,dSwitch);
var cSwitch = new Activator(62,65,32,32);
var clothes1 = new Clothes(62,65,30,30,cSwitch,player,player2Sprite);

var mouseX = 0;
var mouseY =	0;
function update(){
    world1.update();
    player.update();
    door1.update();
    dSwitch.update();
    cSwitch.update();
    clothes1.update();
}

$(document).mousemove(function(event){
    mouseX = event.clientX;
		mouseY = event.clientY;
})

var radius = 50;
function draw() {
    context.font = "30px Verdana";
    canvas.width = canvas.width;
    context.fillStyle = "#add8e6";
    context.fillRect(0, 0, canvas.width, canvas.height);
    world1.draw();
    door1.draw();
    cSwitch.draw();
    clothes1.draw();
    player.draw();
    dSwitch.draw();
		context2.fillStyle = overlay;
		//context2.fillRect( 0, 0, 1280, 800 );
        //draw fake fog map
        context2.drawImage(fogmap, 0,0);
        //clear circle on mouse
		context2.clearRect(mouseX-radius,mouseY-radius,100,100);
}



function game_loop() {

  update();
  draw();

}

setInterval(game_loop, 30);
