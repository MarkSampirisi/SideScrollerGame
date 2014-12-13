// Source Filename: SideScroller
// Author: Mark Sampirisi
// Last Modified By: Mark Sampirisi
// Date last Modified: Dec 12, 2014
// Description: This is a mario-like side scrolling game made with Phaser.
// It has "runner" style gameplay. The player must jump and duck over obstacles,
// and collect coins to add to their highscore. There are 3 difficulty levels
// to choose from.
//
// This is the level select screen. It has 3 buttons which lead to 3 different levels when clicked.
// Current Version: v. 2.0
// Version History: https://github.com/MarkSampirisi/SideScrollerGame

SideScroller.LevelSelect = function () { };
var level1Button, level2Button, level3Button;

SideScroller.LevelSelect.prototype = {
    create: function () {
        //background color is black
        this.game.backgroundColor = '#00000';

        level1Button = this.game.add.button(this.game.world - 0, 0, 'level1Button', this.level1Start);
        //level1Button.anchor.setTo(0.5, 0.5);
        level2Button = this.game.add.button(this.game.world.centerX - 0, 0, 'level2Button', this.level2Start);
        //level2Button.anchor.setTo(0.5, 0.5);
        level3Button = this.game.add.button(this.game.world.centerY - 0, 0, 'level3Button', this.level3Start);
        //level3Button.anchor.setTo(0.5, 0.5);
    },

    level1Start: function () {

        SideScroller.game.state.start('Level1');

    },

    level2Start: function () {

    SideScroller.game.state.start('Level2');

    },

    level3Start: function () {

    SideScroller.game.state.start('Level3');

}

   
};