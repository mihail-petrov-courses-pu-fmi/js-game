var BoardManager = {};

BoardManager.init = function(canvas) {
    
    _this           = this;
    this.canvas     = canvas;
    this.context    = this.canvas.getContext('2d');

    this.characterCollection = [];

    this.loadLevel();

    setInterval(this.gameLoop, 1000);
    this.render();
};

BoardManager.loadLevel = function() {

    // init food 
    var FoodMap = [
        { row: 5    , col: 5  },
        { row: 10   , col: 5  },
        { row: 9    , col: 2  },
        { row: 17   , col: 6  },
        { row: 25   , col: 25 },
    ];

    for(var i = 0; i < FoodMap.length; i++) {
        
        var foodCoordinate  = FoodMap[i];
        var foodReference   = new Food(foodCoordinate); 
        this.characterCollection.push(foodReference);
    }
};

BoardManager.gameLoop = function() {
    
    // console.log("*");
    // console.log(BoardManager)
    // console.log(_this);
    // console.log(this);
    
    _this.render(_this.context);
    // BoardManager.render(BoardManager.context);
};

BoardManager.render = function() {

    for(var i = 0; i < this.characterCollection.length; i++) {
        this.characterCollection[i].render(this.context);
    }
};