var SideScroller = SideScroller || {};

SideScroller.Boot = function () { };

//setting game configuration and loading the assets for the loading screen
SideScroller.Boot.prototype = {
    preload: function () {
        //assets for use in the loading screen
        this.load.image('preloadbar', 'assets/images/preloader-bar.png');
    },
    create: function () {
        //loading screen background
        this.game.stage.backgroundColor = '#fff';

        //scaling options
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        //game is centered horizontally
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        //screen size will be set automatically
        this.scale.setScreenSize(true);

        //physics (intergrated within Phaser)
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.state.start('Preload');
    }
};
