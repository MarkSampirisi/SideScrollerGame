// Source Filename: SideScroller/js/Preload.js
// Author: Mark Sampirisi
// Last Modified By: Mark Sampirisi
// Date last Modified: Nov 14, 2014
// Description: This is a mario-like side scrolling game made with Phaser.
// It has "runner" style gameplay. The player must jump and duck over obstacles,
// and collect coins to add to their highscore.

// This preloads all game assets for quicker loading when playing.
// Current Version: v. 1.0
// Version History: https://github.com/MarkSampirisi/SideScrollerGame

var SideScroller = SideScroller || {};

//loading the game assets
SideScroller.Preload = function () { };

SideScroller.Preload.prototype = {
    preload: function () {
        //show loading screen
        this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loadingImage');
        this.preloadBar.anchor.setTo(0.5);

        //load game assets
        this.load.tilemap('level1', 'assets/tilemaps/level1.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('mainMenuBackground', 'assets/images/MainMenu.png');
        this.load.image('gameTiles', 'assets/images/tiles_spritesheet.png');
        this.load.image('player', 'assets/images/player.png');
        this.load.image('playerDuck', 'assets/images/player_duck.png');
        this.load.image('playerDead', 'assets/images/player_dead.gif');
        this.load.image('goldCoin', 'assets/images/goldCoin.png');
        this.load.audio('coin', ['assets/audio/coin.wav', 'assets/audio/coin.wav']);
        this.load.audio('jumpSound', ['assets/audio/jump.wav', 'assets/audio/jump.wav']); //jump sound effect courtesy of http://themushroomkingdom.net/ User: Deezer
        this.load.audio('playerDied', ['assets/audio/dead.wav', 'assets/audio/dead.wav']); //death sound effect courtesy of http://themushroomkingdom.net/ User: Deezer
        this.load.audio('playerWon', ['assets/audio/win.wav', 'assets/audio/win.wav']); //win sound effect courtesy of http://soundbible.com/
        this.load.audio('level1Music', ['assets/audio/level1Music.mp3', 'assets/audio/level1Music.mp3']); //music is Super Mario World World 1 property of Nintendo Corp. I do not own this music.

    },
    //start the main menu
    create: function () {
        this.state.start('MainMenu');
    }
};