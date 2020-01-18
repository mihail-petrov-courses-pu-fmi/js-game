var Food = function(constructorObject) {

    this.row    = constructorObject.row;
    this.col    = constructorObject.col;
    this.color  = "#00ff00";

    this.tileReferance = new Tile({
        row     : this.row,
        col     : this.col,
        color   : this.color
    }) 
};

Food.prototype.render = function(context) {
    this.tileReferance.render(context);
};