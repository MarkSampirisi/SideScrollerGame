// Source Filename: SideScroller/js/Game.js
// Author: Mark Sampirisi
// Last Modified By: Mark Sampirisi
// Date last Modified: Nov 14, 2014
// Description: This is a mario-like side scrolling game made with Phaser.
// It has "runner" style gameplay. The player must jump and duck over obstacles,
// and collect coins to add to their highscore.

// This is the code to play the second level game. It loads a custom game world made with Tiled and places all the game assets and allows player control.
// Update function checks constantly for game changes (like player death, hitting a collision layer, etc.)
// Current Version: v. 1.0
// Version History: https://github.com/MarkSampirisi/SideScrollerGame

var SideScroller = SideScroller || {};

SideScroller.Level1 = function () { };

SideScroller.Level1.prototype = {

    preload: function () {
        this.game.time.advancedTiming = true;
    },
    create: function () {
        this.map = this.game.add.tilemap('level1');

        //add tileset
        this.map.addTilesetImage('tiles_spritesheet', 'gameTiles');

        //create layers
        this.backgroundlayer = this.map.createLayer('backgroundLayer');
        this.blockedLayer = this.map.createLayer('blockedLayer');

        //collision on blockedLayer
        this.map.setCollisionBetween(1, 100000, true, 'blockedLayer');

        //resizes the game world to match the layer dimensions
        this.backgroundlayer.resizeWorld();

        //create coins
        this.createCoins();

        //create player
        this.player = this.game.add.sprite(100, 300, 'player');

        //player initial score of zero
        this.playerScore = 0;

        //enable physics on the player
        this.game.physics.arcade.enable(this.player);

        //player gravity
        this.player.body.gravity.y = 1000;

        //properties when the player is ducked and standing, to be used in update()
        var playerDuckImg = this.game.cache.getImage('playerDuck');
        this.player.duckedDimensions = { width: playerDuckImg.width, height: playerDuckImg.height };
        this.player.standDimensions = { width: this.player.width, height: this.player.height };
        this.player.anchor.setTo(0.5, 1);

        //the camera will follow the player in the world
        this.game.camera.follow(this.player);

        //move player with cursor keys
        this.cursors = this.game.input.keyboard.createCursorKeys();

        //show score
        this.showLabels();

        //add music
        music = this.game.add.audio('level1Music');

        //play music
        music.play();

        //sounds
        this.coinSound = this.game.add.audio('coin');
    },

    //code to load my custom Tiled map. Code obtained from http://examples.phaser.io/
    findObjectsByType: function (type, map, layerName) {
        var result = new Array();
        this.map.objects[layerName].forEach(function (element) {
            if (element.properties.type === type) {
                //Phaser uses top left, Tiled bottom left so we have to adjust
                //also keep in mind that some images could be of different size as the tile size
                //so they might not be placed in the exact position as in Tiled
                element.y -= map.tileHeight;
                result.push(element);
            }
        });
        return result;
    },
    //create a sprite from an object
    createFromTiledObject: function (element, group) {
        var sprite = group.create(element.x, element.y, element.properties.sprite);

        //copy all properties to the sprite
        Object.keys(element.properties).forEach(function (key) {
            sprite[key] = element.properties[key];
        });
    },
    update: function () {
        //collision
        this.game.physics.arcade.collide(this.player, this.blockedLayer, this.playerHit, null, this);
        this.game.physics.arcade.overlap(this.player, this.coins, this.collect, null, this);

        //only respond to keys and keep the speed if the player is alive
        if (this.player.alive) {
            this.player.body.velocity.x = 300;

            if (this.cursors.up.isDown) {
                this.playerJump();
            }
            else if (this.cursors.down.isDown) {
                this.playerDuck();
            }

            if (!this.cursors.down.isDown && this.player.isDucked && !this.pressingDown) {
                //change image and update the body size 
                this.player.loadTexture('player');
                this.player.body.setSize(this.player.standDimensions.width, this.player.standDimensions.height);
                this.player.isDucked = false;
            }

            //End the game if reaching the edge
            if (this.player.x >= this.game.world.width) {

                //stop the music
                music.stop();

                //play the win sound
                this.sound.play('playerWon');

                //end the game, send their score to the game end screen
                this.game.state.start('GameEnd', true, false, this.playerScore);
            }
        }

    },

    playerHit: function (player, blockedLayer) {
        //if the player hits a block from the right or above
        if (player.body.blocked.right || player.body.blocked.top) {

            music.stop();

            //play the playerDied sound
            this.sound.play('playerDied');

            //set to dead 
            this.player.alive = false;

            //stop moving to the right
            this.player.body.velocity.x = 0;

            //change sprite image
            this.player.loadTexture('playerDead');

            //go to gameover after a delay
            this.game.time.events.add(1500, this.gameOver, this);
        }
    },

    showLabels: function () {
        //score text
        var text = "0";
        var style = { font: "20px Arial", fill: "#fff", align: "center" };
        this.scoreLabel = this.game.add.text(this.game.width - 50, this.game.height - 50, text, style);
        this.scoreLabel.fixedToCamera = true;
    },
    collect: function (player, collectable) {
        //play audio
        this.coinSound.play();
        //update score
        this.playerScore++;
        this.scoreLabel.text = this.playerScore;

        //remove sprite
        collectable.destroy();
    },

    //create coins
    createCoins: function () {
        this.coins = this.game.add.group();
        this.coins.enableBody = true;
        var result = this.findObjectsByType('coin', this.map, 'objectsLayer');
        result.forEach(function (element) {
            this.createFromTiledObject(element, this.coins);
        }, this);
    },

    //game over
    gameOver: function () {
        this.game.state.start('GameEnd', true, false, this.playerScore);
    },

    //player jump speed
    playerJump: function () {
        if (this.player.body.blocked.down) {
            //play jump sound
            this.sound.play('jumpSound');
            this.player.body.velocity.y -= 700;
        }
    },

    playerDuck: function () {
        //change image and update the body size
        this.player.loadTexture('playerDuck');
        this.player.body.setSize(this.player.duckedDimensions.width, this.player.duckedDimensions.height);

        //Keep track of whether the player is ducked or not
        this.player.isDucked = true;
    },


};