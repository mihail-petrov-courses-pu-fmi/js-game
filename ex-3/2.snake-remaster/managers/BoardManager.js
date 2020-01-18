var BoardManager = {};

BoardManager.init = function(canvas) {
    
    _this           = this;
    this.canvas     = canvas;
    this.context    = this.canvas.getContext('2d');

    // Reference pointers
    this.snakeReference         = null;

    // 
    this.characterCollection    = [];
    this.gameDirection          = BoardConfig.DIRECTION.RIGHT;

    this.loadLevel();

    setInterval(this.gameLoop, 400);
    this.render();
};

BoardManager.loadLevel = function() {

    // console.log('**');
    // console.log(this);

    // function testWithName() {
    //     console.log('**');
    //     console.log(this);
    // }

    // testWithName();


    // (function() {
    //     console.log('**');
    //     console.log(this);
    // })();

    var loadFood = function() {
        
        // console.log('**');
        // console.log(this);

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
            _this.characterCollection.push(foodReference);
        }
    };

    loadFood();

    var loadSnake = function() {
        
        _this.snakeReference = new Snake({
            row : 3, 
            col : 3
        });

        _this.characterCollection.push(_this.snakeReference);
    };

    loadSnake();
};

BoardManager.gameLoop = function() {

    if(_this.gameDirection == BoardConfig.DIRECTION.LEFT) {
        _this.snakeReference.moveLeft();
    }

    if(_this.gameDirection == BoardConfig.DIRECTION.RIGHT) {
        _this.snakeReference.moveRight();
    }
    
    if(_this.gameDirection == BoardConfig.DIRECTION.UP) {
        _this.snakeReference.moveUp();
    }
    
    if(_this.gameDirection == BoardConfig.DIRECTION.DOWN) {
        _this.snakeReference.moveDown();
    }    
    
    _this.render(_this.context);
};

BoardManager.setDirection = function(direction) {

    var DirectionMap = {
        'ArrowLeft'     : BoardConfig.DIRECTION.LEFT,
        'ArrowRight'    : BoardConfig.DIRECTION.RIGHT,
        'ArrowUp'       : BoardConfig.DIRECTION.UP,
        'ArrowDown'     : BoardConfig.DIRECTION.DOWN,
    };
 
    // this.gameDirection = (DirectionMap[direction])      ? 
    //                         DirectionMap[direction]     :
    //                         this.gameDirection; 

    if(DirectionMap[direction]) {
        this.gameDirection = DirectionMap[direction];
    }
};

BoardManager.render = function() {

    for(var i = 0; i < this.characterCollection.length; i++) {
        this.characterCollection[i].render(this.context);
    }
};