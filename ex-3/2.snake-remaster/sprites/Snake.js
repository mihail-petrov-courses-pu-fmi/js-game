var Snake = function(constructorObject) {

    this.row            = constructorObject.row;
    this.col            = constructorObject.col;
    this.headColor      = "#ff0000";
    this.bodyColor      = "#000000"; 
    
    this.tileCollection = [];
    this.tileCollection.push(new Tile({
        row     : this.row,
        col     : this.col,
        color   : this.headColor 
    }));
};

Snake.prototype.moveLeft = function() {

    for(var i = 0; i < this.tileCollection.length; i++) {
        this.tileCollection[i].col = this.tileCollection[i].col - 1; 
    }
};

Snake.prototype.moveRight = function() {

    for(var i = 0; i < this.tileCollection.length; i++) {
        this.tileCollection[i].col = this.tileCollection[i].col + 1;
    }
};

Snake.prototype.moveUp = function() {

    for(var i = 0; i < this.tileCollection.length; i++) {
        this.tileCollection[i].row = this.tileCollection[i].row - 1;
    }
};

Snake.prototype.moveDown = function() {

    for(var i = 0; i < this.tileCollection.length; i++) {
        this.tileCollection[i].row = this.tileCollection[i].row + 1;
    }
};

Snake.prototype.render = function(context) {

    for(var i = 0; i < this.tileCollection.length; i++) {
        this.tileCollection[i].render(context);
    }
};