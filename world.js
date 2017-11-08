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
    function dooropener(x,y,linkX,linkY){
        this.doorLinkx = linkX;
        this.doorLinky = y;
    }
}
