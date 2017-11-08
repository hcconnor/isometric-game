var width = canvas.width;
var height = canvas.height;

var stoneTile = new Image();
stoneTile.src = "./assets/stonetile.png";


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
                if (dTile !== 0){
                    context.drawImage(stoneTile, c*tileSize, r*tileSize, 30, 30);
                    //console.log("DREW TILE")
                }
            }
        }
    };
}
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
