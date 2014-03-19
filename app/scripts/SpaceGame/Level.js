developingState = "Level";
(function(SpaceGame, Hud) {
    "use strict";
    SpaceGame.Level = function(game) {
        var self = this;

        self.preload = function() {
        };

        self.create = function() {
            self.ship = game.add.sprite(50,50,'ship');
            Hud.create(game, self.ship);
        };

        self.update = function() {
            Hud.update(game);
        };
    };
})(SpaceGame, SpaceGame.Hud);
