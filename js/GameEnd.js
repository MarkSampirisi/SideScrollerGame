// Source Filename: SideScoller
// Author: Mark Sampirisi
// Last Modified By: Mark Sampirisi
// Date last Modified: Nov 14, 2014
// Description: This is a mario-like side scrolling game made with Phaser.
// It has "runner" style gameplay. The player must jump and duck over obstacles,
// and collect coins to add to their highscore.

// This is the game end screen, it triggers when the player dies or beats the level. This screen keeps track of the player's high score.
// Current Version: v. 1.0
// Version History: https://github.com/MarkSampirisi/SideScrollerGame

SideScroller.GameEnd = function () { };

SideScroller.GameEnd.prototype = {
    init: function (score) {
        var score = score || 0;
        this.highestScore = this.highestScore || 0;

        this.highestScore = Math.max(score, this.highestScore);
    },
    create: function () {

        //game end screen has a black background
        this.game.stage.backgroundColor = '#00000';

        //start game text
        var text = "Click to Return to Level Select";
        var style = { font: "30px Arial", fill: "#fff", align: "center" };
        var t = this.game.add.text(this.game.width / 2, this.game.height / 2, text, style);
        t.anchor.set(0.5);

        //highest score
        text = "Highest score: " + this.highestScore;
        style = { font: "15px Arial", fill: "#fff", align: "center" };

        var h = this.game.add.text(this.game.width / 2, this.game.height / 2 + 50, text, style);
        h.anchor.set(0.5);
    },


    //check if user clicks the mouse
    update: function () {

        if (this.game.input.activePointer.justPressed()) {
            this.game.state.start('LevelSelect');
        }
    }
};