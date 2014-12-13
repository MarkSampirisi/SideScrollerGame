// Source Filename: SideScroller
// Author: Mark Sampirisi
// Last Modified By: Mark Sampirisi
// Date last Modified: Dec 12, 2014
// Description: This is a mario-like side scrolling game made with Phaser.
// It has "runner" style gameplay. The player must jump and duck over obstacles,
// and collect coins to add to their highscore. There are 3 difficulty levels
// to choose from.

//This adds all of the game states
// Current Version: v. 2.0
// Version History: https://github.com/MarkSampirisi/SideScrollerGame

var SideScroller = SideScroller || {};

SideScroller.game = new Phaser.Game(746, 420, Phaser.CANVAS, '');

SideScroller.game.state.add('Boot', SideScroller.Boot);
SideScroller.game.state.add('Preload', SideScroller.Preload);
SideScroller.game.state.add('MainMenu', SideScroller.MainMenu);
SideScroller.game.state.add('LevelSelect', SideScroller.LevelSelect);
SideScroller.game.state.add('Level1', SideScroller.Level1);
SideScroller.game.state.add('Level2', SideScroller.Level2);
SideScroller.game.state.add('Level3', SideScroller.Level3);
SideScroller.game.state.add('GameEnd', SideScroller.GameEnd);
SideScroller.game.state.start('Boot');
