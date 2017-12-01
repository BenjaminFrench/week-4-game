var gemGame = {
    score: 0,
    target: null,
    wins: 0,
    losses: 0,
    
    // inits the first game and subsequent games
    initGame: function() {
        // generate a random taget number 
        this.target = 19 + Math.floor(Math.random() * 101);;
        // generate 4 gems, each with random point value
        var randomPointVal = Math.floor(Math.random() * 12);
        
        // create redGem
        var redGem = new gemGame.Gem("red", "./assets/images/gem.png", randomPointVal);
        
        // use jQuery to put the gems on the screen
        $("#gem-container").append('<img src=' + redGem.imgSrc + ' height="100px">');
        
        // create blueGem
        var blueGem = new gemGame.Gem("blue", "./assets/images/gem.png", randomPointVal);
        
        // use jQuery to put the gems on the screen
        $("#gem-container").append('<img src=' + blueGem.imgSrc + ' height="100px">');

        // create greenGem
        var greenGem = new gemGame.Gem("green", "./assets/images/gem.png", randomPointVal);
        
        // use jQuery to put the gems on the screen
        $("#gem-container").append('<img src=' + greenGem.imgSrc + ' height="100px">');
        
        // create yellowGem
        var yellowGem = new gemGame.Gem("yellow", "./assets/images/gem.png", randomPointVal);
        
        // use jQuery to put the gems on the screen
        $("#gem-container").append('<img src=' + yellowGem.imgSrc + ' height="100px">');
    },
    
    handleWin: function() {
        this.wins++;
    },
    
    handleLoss: function() {
        this.losses++;
    },
    
    updateDOM: function() {
        
    },
    
    Gem: function(color, imgSrc, points) {
        this.color = color;
        this.imgSrc = imgSrc;
        this.points = points
        
    }
}