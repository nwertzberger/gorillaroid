SpaceGame.Preload = function(game) {
    "use strict";
    var self = this;

    self.preload = function() {
        game.load.image('ship', 'images/ship.png');
    };
    self.create = function() {
        game.state.start('MainMenu');
    };
    self.update = function() {
    };
    self.render = function() {
        // For debugging
    };
};
