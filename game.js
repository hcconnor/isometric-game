var player1Sprite = new Image();
player1Sprite.src = "./assets/player.png";
var player2Sprite = new Image();
player2Sprite.src = "./assets/player2.png";
var npc1Sprite = new Image();
npc1Sprite.src = "./assets/npc1.png";
var npc2Sprite = new Image();
npc2Sprite.src = "./assets/npc2.png";
var npc3Sprite = new Image();
npc3Sprite.src = "./assets/npc3.png";
var npc4Sprite = new Image();
npc4Sprite.src = "./assets/npc4.png";
var npc5Sprite = new Image();
npc5Sprite.src = "./assets/npc5.png";
var npc6Sprite = new Image();
npc6Sprite.src = "./assets/npc6.png";
var npc7Sprite = new Image();
npc7Sprite.src = "./assets/npc7.png";
var npc8Sprite = new Image();
npc8Sprite.src = "./assets/npc8.png";
var npc9Sprite = new Image();
npc9Sprite.src = "./assets/npc9.png";
var npc10Sprite = new Image();
npc10Sprite.src = "./assets/npc10.png";
var fogmap = new Image();
fogmap.src = "./assets/map.png";
var camButImg = new Image();
camButImg = "./assets/walltile"
gui = new UI(0,450,);
camButton = new Button(0,450,30)

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

function NPC(x,y,width,height,sheet,dir)
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
    this.dir = dir;
    this.update = function()
    {
        this.sprite.image = this.sheet;
        //console.log(this.sheet);
        // var dx = Math.cos(this.direction) * distance;
        // var dy = Math.sin(this.direction) * distance;
        // if (map.get(this.x + dx, this.y) <= 0) this.x += dx;
        // if (map.get(this.x, this.y + dy) <= 0) this.y += dy;

      // if(keysPressed[RIGHT_KEY_CODE])
      //   {
      //       // var temp = world1.getTile(this.x, this.y);
      //       // console.log(temp);
      //       // console.log(this.x+"," +this.y);
      //       // if(temp!==1){
      //       if(checkmove(this.x+2, this.y)) {
      //           this.x += 2;
      //       }
      //   }
      //   if(keysPressed[LEFT_KEY_CODE])
      //   {
      //       if(checkmove(this.x-2,this.y))
      //   	this.x -= 2;
      //   }
      //   if(keysPressed[UP_KEY_CODE])
      //   {
      //       if(checkmove(this.x, this.y-2))
      //   	this.y -= 2;
      //   }
      //   if(keysPressed[DOWN_KEY_CODE])
      //   {
      //       if(checkmove(this.x, this.y+2))
      //   	this.y += 2;
      //   }
      if(this.dir == 0){
          this.x += 2;
      }
      else if (this.dir == 1){
          this.x -=2
      }
      else if (this.dir == 2){
          this.y +=2
      }
      else if (this.dir == 3){
          this.y -=2
      }

      if(this.dir == 0  && this.x > canvas.width){
          console.log("reset npc")
          this.x = 0;
      }
      else if(this.dir == 1  && this.x < 0){
          console.log("reset npc")
          this.x = canvas.width;
      }
      else if(this.dir == 2  && this.y > canvas.height){
          console.log("reset npc")
          this.y = -30;
      }
      else if(this.dir == 3  && this.y < 0){
          console.log("reset npc")
          this.y = canvas.height;
      }
    };

    this.draw = function()
    {
     this.sprite.update();
     this.sprite.draw(this.x, this.y);
    };

}

var map1 = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,
            1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,
            1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,
            1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
            1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,
            1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,
            1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,
            1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,
            1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,
            1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,
            1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,
            1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,
            1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

var world1 = new World(map1, 30, 15, 30);
var player = new Player(200, canvas.height - 150, 24, 32, player1Sprite);
var npc1 = new NPC(200, canvas.height - 250, 24, 32, npc1Sprite,0);
var npc2 = new NPC(200, canvas.height - 300, 24, 32, npc2Sprite,1);
var npc3 = new NPC(100, 200, 24, 32, npc3Sprite,0);
var npc4 = new NPC(200, canvas.height - 300, 24, 32, npc4Sprite,4);
var npc5 = new NPC(800, canvas.height - 300, 24, 32, npc5Sprite,2);
var npc6 = new NPC(850, canvas.height-400, 24, 32, npc6Sprite,3);
var npc7 = new NPC(300, 300, 24, 32, npc7Sprite,4);
var npc8 = new NPC(300, 300, 24, 32, npc8Sprite,2);
var npc9 = new NPC(100, 100, 24, 32, npc9Sprite,0);
var npc10 = new NPC(200, 200, 24, 32, npc10Sprite,1);

var dSwitch = new Activator(120,100,30,70);
var door1 = new Door(120,120,30,30,dSwitch);
var cSwitch = new Activator(62,65,32,32);
var clothes1 = new Clothes(62,65,30,30,cSwitch,player,player2Sprite);

var winSwitch = new Activator(660,390,30,30);
var winBox = new winWin(660,390,30,30,winSwitch);

var mouseX = 0;
var mouseY =	0;
function update(){
    world1.update();
    player.update();
    door1.update();
    dSwitch.update();
    cSwitch.update();
    clothes1.update();
	winBox.update();
	winSwitch.update();
    npc1.update();
    npc2.update();
    npc3.update();
    npc4.update();
    npc5.update();
    npc6.update();
    npc7.update();
    npc8.update();
    npc9.update();
    npc10.update();
    if(timer > 0){
        timer --;
    }
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
    npc1.draw();
    npc2.draw();
    npc3.draw();
    npc4.draw();
    npc5.draw();
    npc6.draw();
    npc7.draw();
    npc8.draw();
    npc9.draw();
    npc10.draw();
    dSwitch.draw();
		winSwitch.draw();
		winBox.draw();
		context2.fillStyle = overlay;
		context2.fillRect( 0, 0, 1280, 800 );
        //draw fake fog map
        context2.drawImage(fogmap, 0,0);
        //clear circle on mouse
        for(let v of camArray){
            v.draw();
        }
		context2.clearRect(mouseX-radius,mouseY-radius,100,100);
        gui.draw();
		camButton.draw();
        context2.fillText(timer,mouseX,mouseY);

        if (camMode == true){
            context.fillRect(mouseX-5,mouseY-5,10,10);
        }

}



function game_loop() {

  update();
  draw();

}

setInterval(game_loop, 30);
