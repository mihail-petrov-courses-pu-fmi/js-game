var Tile = function(constructorObject) {

    this.row    = constructorObject.row;
    this.col    = constructorObject.col;
    this.color  = constructorObject.color;
    
    this.x      = (this.row * BoardConfig.TILE_SIZE);
    this.y      = (this.col * BoardConfig.TILE_SIZE);
    this.side   =  BoardConfig.TILE_SIZE;
};

Tile.prototype.render = function(context) {
    
    context.beginPath();
    context.rect(this.x, this.y, this.side, this.side)
    context.fillStyle = this.color;
    context.fill();
    context.closePath();
};