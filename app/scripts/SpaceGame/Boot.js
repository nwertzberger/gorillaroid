SpaceGame.Boot = function(game) {
    "use strict";
    var self = this;

    self.preload = function() {
    };
    self.create = function() {
        game.add.text(10,10,"Space Mayhem: Loading...", {font:"bold 32px monospace", fill:"#fff"});
        game.state.start('Preload');
    };
    self.update = function() {
    };
    self.render = function() {
        // For debugging
    };
};
