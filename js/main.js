// Source Filename: SideScroller
// Author: Mark Sampirisi
// Last Modified By: Mark Sampirisi
// Date last Modified: Nov 14, 2014
// Description: This is a mario-like side scrolling game made with Phaser.
// It has "runner" style gameplay. The player must jump and duck over obstacles,
// and collect coins to add to their highscore.

//This adds all of the game states
// Current Version: v. 1.0
// Version History: https://github.com/MarkSampirisi/SideScrollerGame

var SideScroller = SideScroller || {};

SideScroller.game = new Phaser.Game(746, 420, Phaser.CANVAS, '');

SideScroller.game.state.add('Boot', SideScroller.Boot);
SideScroller.game.state.add('Preload', SideScroller.Preload);
SideScroller.game.state.add('MainMenu', SideScroller.MainMenu);
SideScroller.game.state.add('Game', SideScroller.Game);
SideScroller.game.state.add('GameEnd', SideScroller.GameEnd);

SideScroller.game.state.start('Boot');
