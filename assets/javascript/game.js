var gemGame = {
    score: 0,
    target: null,
    wins: 0,
    losses: 0,
    
    // inits the first game and subsequent games
    initGame: function() {
        // set score to 0
        this.score = 0;

        // clear gem container
        $("#gem-container").empty();
        
        // generate a random taget number set label with jQuery
        this.target = 20 + Math.floor(Math.random() * 101);
        console.log("Chose target:", this.target);
        $("#target-label").html(this.target);
        
        // set score label to 0
        $("#score-label").html("0");
        
        // set win and losses label
        $('#wins-label').html(this.wins);
        $('#losses-label').html(this.losses);
        
        // generate 4 gems, each with random point value
        // create redGem and use jQuery to place it on screen
        var randomPointVal = Math.floor((Math.random() * 12) + 1);
        console.log("Red Gem value:", randomPointVal);
        var redGem = new gemGame.Gem("red", "./assets/images/gem.png", randomPointVal);
        $("#gem-container").append(redGem.btn);
        redGem.btn.append(redGem.img);
        
        // create blueGem and use jQuery to place it on screen
        randomPointVal = Math.floor((Math.random() * 12) + 1);
        console.log("Blue Gem value:", randomPointVal);
        var blueGem = new gemGame.Gem("blue", "./assets/images/gem.png", randomPointVal);
        $("#gem-container").append(blueGem.btn);
        blueGem.btn.append(blueGem.img);
        
        // create greenGem and use jQuery to place it on screen
        randomPointVal = Math.floor((Math.random() * 12) + 1);
        console.log("Green Gem value:", randomPointVal);
        var greenGem = new gemGame.Gem("green", "./assets/images/gem.png", randomPointVal);
        $("#gem-container").append(greenGem.btn);
        greenGem.btn.append(greenGem.img);
        
        // create yellowGem and use jQuery to place it on screen
        randomPointVal = Math.floor((Math.random() * 12) + 1);
        console.log("Yellow Gem value:", randomPointVal);
        var yellowGem = new gemGame.Gem("yellow", "./assets/images/gem.png", randomPointVal);
        $("#gem-container").append(yellowGem.btn);
        yellowGem.btn.append(yellowGem.img);
        
        
    },
    
    // pass in the gem selected with jQuery
    pickGem: function(gem) {
        console.log("Picked gem of value", gem.getAttribute('points'));
        this.score += parseInt(gem.getAttribute('points'));

        if (this.checkForWin()) {
            this.initGame();
        }
        else if (this.checkForLoss()) {
            this.initGame();
        }

        this.updateDOM();
        
    },

    checkForWin: function () {
        if (this.score === this.target) {
            this.wins++;
            alert("You won! Press ok start again.\n" + "Total: " + this.score + "\nTarget: " + this.target);
            return true;
        }
        return false;
    },

    checkForLoss: function () {
        if (this.score > this.target) {
            this.losses++;
            alert("You lost! Press ok start again.\n" + "Total: " + this.score + "\nTarget: " + this.target);
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
        this.btn.attr('class', "gem-button btn btn-default");
        this.btn.attr('id', color + "-gem");
        this.btn.attr('height', "100px");
        this.btn.attr('width', "100px");
        this.btn.attr('points', points);
        this.btn.click(function() {
            gemGame.pickGem(this);
        });

        this.img = $('<img>');
        this.img.attr('src', imgSrc);
        this.img.attr('height', "74px");
        switch (color) {
            case "red":
                this.img.css({"filter": "hue-rotate(140deg)"});
                break;
        
            case "blue":
                break;

            case "green":
                this.img.css({"filter": "hue-rotate(250deg)"});
                break;

            case "yellow":
                this.img.css({"filter": "hue-rotate(200deg)"});
                break;
            default:
                break;
        }
        
    }
}

window.onload = function() {
    gemGame.initGame();
}