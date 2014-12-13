// Source Filename: SideScroller
// Author: Mark Sampirisi
// Last Modified By: Mark Sampirisi
// Date last Modified: Dec 12, 2014
// Description: This is a mario-like side scrolling game made with Phaser.
// It has "runner" style gameplay. The player must jump and duck over obstacles,
// and collect coins to add to their highscore. There are 3 difficulty levels
// to choose from.
//
// This is the main menu. It cointains an image with information on how to play and how to start the game.
// Current Version: v. 2.0
// Version History: https://github.com/MarkSampirisi/SideScrollerGame

SideScroller.MainMenu = function () { };

SideScroller.MainMenu.prototype = {
    create: function () {
        //background image contains instructions on how to play the game
        this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'mainMenuBackground');
        this.background.scale.setTo(1);
    },
    //check if mouse was clicked. If clicked, start the level select screen.
    update: function () {
        if (this.game.input.activePointer.justPressed()) {
            this.game.state.start('LevelSelect');
        }
    }
};