var width = canvas.width;
var height = canvas.height;

var wallTile = new Image();
wallTile.src = "./assets/walltile.png";
var doorTile = new Image();
doorTile.src = "./assets/doorwall1.png";
var topTile1 = new Image();
topTile1.src = "./assets/toptile1.png";
var topTile2 = new Image();
topTile2.src = "./assets/toptile2.png";
var topTile3 = new Image();
topTile3.src = "./assets/toptile3.png";
var windowTile1 = new Image();
windowTile1.src = "./assets/windowwall1.png";
var windowTile2 = new Image();
windowTile2.src = "./assets/windowwall2.png";

function World(map, width, height, tileSize){
    this.map = map;
    this.width = width;
    this.height = height;
    this.tileSize = tileSize;
    this.getTile = function(x,y){
        i = x + this.width*y;
        return this.map[i];
    };

    this.update = function(){

    };
    this.draw = function(){
        for(var c = 0; c < this.width; c++){
            for(var r = 0; r < this.height; r++){
                //console.log(c + "," + r)
                var dTile = this.getTile(c,r);
                //console.log(dTile);
                if (dTile == 1){
                    context.drawImage(wallTile, c*tileSize, r*tileSize, 30, 30);
                    }
                if (dTile == 2){
                    context.drawImage(doorTile, c*tileSize, r*tileSize, 30, 30);
                    //console.log("DREW TILE")
                    }
                if (dTile == 2){
                    context.drawImage(doorTile, c*tileSize, r*tileSize, 30, 30);
                        //console.log("DREW TILE")
                    }
                if (dTile == 3){
                    context.drawImage(topTile1, c*tileSize, r*tileSize, 30, 30);
                    //console.log("DREW TILE")
                    }
                if (dTile == 4){
                    context.drawImage(topTile2, c*tileSize, r*tileSize, 30, 30);
                        //console.log("DREW TILE")
                    }
                if (dTile == 5){
                    context.drawImage(topTile3, c*tileSize, r*tileSize, 30, 30);
                            //console.log("DREW TILE")
                    }
                if (dTile == 6){
                    context.drawImage(windowTile1, c*tileSize, r*tileSize, 30, 30);
                                //console.log("DREW TILE")
                        }
                if (dTile == 7){
                    context.drawImage(windowTile2, c*tileSize, r*tileSize, 30, 30);
                                        //console.log("DREW TILE")
                    }
                }
            }
        }
    };
function Activator(x,y,width,height){
    this.condition = false;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.update = function(){
        if(doesCollide(this,player)){
            console.log("standing on switch");
            this.condition = true;
        }
        else{
            this.condition = false;
        }
    }
    this.draw = function(){
        context.rect(this.x,this.y,this.width,this.height);
        context.stroke();

    }
}
function winWin(x,y,width,height,activator)
{
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.activator = activator;
  this.update = function(){
    if(this.activator.condition==true){
      window.alert("Rebel wins!");
    }
  }
  this.draw = function(){
      context.fillStyle= 'yellow';
      context.fillRect(this.x,this.y,this.width,this.height);
      context.stroke();
  }
}


function Door(x,y,width,height,activator)
{
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.activator = activator;
    this.update = function(){

    }
    this.draw = function(){
        if(this.activator.condition == false){
            context.fillStyle = 'black';
            context.fillRect(this.x,this.y,this.width,this.height);
            context.stroke();
        }
    }
}

function Clothes(x,y,width,height,activator,player,sprite)
{
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.activator = activator;
    this.player = player;
    this.sprite = sprite;
    this.update = function(){
        if(this.activator.condition == true){
            player.sheet = this.sprite;
        }
    };
    this.draw = function(){
        context.fillStyle = 'green';
        context.fillRect(this.x,this.y,this.width,this.height);
        context.stroke();
    };
}
