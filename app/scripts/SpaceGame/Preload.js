SpaceGame.Preload = function(game) {
    'use strict';
    var self = this;

    self.preload = function() {
        game.load.image('ship', 'images/ship.png');
        game.load.image('asteroid', 'images/asteroid.png');
    };
    self.create = function() {
        game.state.start(window.developingState || 'MainMenu');
    };
    self.update = function() {
        //  If you don't have any music in your game then put the game.state.start line into the create function and delete
        //  the update function completely.
        /*
           if (this.cache.isSoundDecoded('titleMusic') && this.ready == false)
           {
           this.ready = true;
           this.game.state.start('MainMenu');
           }
         */
    };
    self.render = function() {
        // For debugging
    };
};
