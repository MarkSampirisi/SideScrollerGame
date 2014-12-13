// Source Filename: SideScroller
// Author: Mark Sampirisi
// Last Modified By: Mark Sampirisi
// Date last Modified: Dec 12, 2014
// Description: This is a mario-like side scrolling game made with Phaser.
// It has "runner" style gameplay. The player must jump and duck over obstacles,
// and collect coins to add to their highscore. There are 3 difficulty levels
// to choose from.

//This is the boot/loading screen. It displays an image to let the player know that the game is loading.
// Current Version: v. 2.0
// Version History: https://github.com/MarkSampirisi/SideScrollerGame

var SideScroller = SideScroller || {};

SideScroller.Boot = function () { };

//loading game settings and assets for the loading screen
SideScroller.Boot.prototype = {
    preload: function () {
        //loading screen image
        this.load.image('loadingImage', 'assets/images/loadingImage.gif');
    },
    create: function () {
        //loading screen has a black background
        this.game.stage.backgroundColor = '#00000';

        //scaling
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        //game is centered horizontally
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        //screen size (set automatically)
        this.scale.setScreenSize(true);

        //physics (integrated within Phaser)
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.state.start('Preload');
    }
};
