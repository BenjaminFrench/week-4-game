var gemGame = {
    score: 0,
    target: null,
    wins: 0,
    losses: 0,
    
    // inits the first game and subsequent games
    initGame: function() {
        // generate a random taget number set label with jQuery
        this.target = 19 + Math.floor(Math.random() * 101);
        $("#target-label").html(this.target);
        
        // set score label to 0
        $("#score-label").html("0");
        
        // set win and losses label
        $('#wins-label').html(this.wins);
        $('#losses-label').html(this.losses);
        
        // generate 4 gems, each with random point value
        // create redGem and use jQuery to place it on screen
        var randomPointVal = Math.floor(Math.random() * 12);
        var redGem = new gemGame.Gem("red", "./assets/images/gem.png", randomPointVal);
        $("#gem-container").append(redGem.btn);
        redGem.btn.append(redGem.img);
    
        // create blueGem and use jQuery to place it on screen
        randomPointVal = Math.floor(Math.random() * 12);
        var blueGem = new gemGame.Gem("blue", "./assets/images/gem.png", randomPointVal);
        $("#gem-container").append(blueGem.img);
        
        // create greenGem and use jQuery to place it on screen
        randomPointVal = Math.floor(Math.random() * 12);
        var greenGem = new gemGame.Gem("green", "./assets/images/gem.png", randomPointVal);
        $("#gem-container").append(greenGem.img);
        
        // create yellowGem and use jQuery to place it on screen
        randomPointVal = Math.floor(Math.random() * 12);
        var yellowGem = new gemGame.Gem("yellow", "./assets/images/gem.png", randomPointVal);
        $("#gem-container").append(yellowGem.img);
        
        
    },
    
    // pass in the gem selected with jQuery
    pickGem: function(gem) {
        console.log("picked", gem.getAttribute('points'));
        this.score += parseInt(gem.getAttribute('points'));

        this.updateDOM();
        
    },

    checkForWin: function () {
        if (this.score === this.target) {
            this.wins++;
        
            return true;
        }
        return false;
    },

    checkForLoss: function () {
        if (this.score > this.target) {
            this.losses++;
            return true;
        }
        return false;
    },
    
    updateDOM: function() {
        $("#target-label").html(this.target);
        $("#score-label").html(this.score);
        $('#wins-label').html(this.wins);
        $('#losses-label').html(this.losses);
    },
    
    Gem: function(color, imgSrc, points) {
        this.color = color;
        this.imgSrc = imgSrc;
        this.points = points
        this.btn = $('<button>');
        this.btn.attr('class', "btn btn-default");
        this.img = $('<img>');
        this.img.attr('id', color + "-gem");
        this.img.attr('src', imgSrc);
        this.img.attr('height', "100px");
        this.img.attr('width', "100px");
        this.img.attr('points', points);
        this.img.click(function() {
            gemGame.pickGem(this);
        });
    }
}

window.onload = function() {
    gemGame.initGame();
}