developingState = "Level";
(function(SpaceGame, Hud, Controls) {
    "use strict";
    SpaceGame.Level = function(game) {
        var self = this;

        self.preload = function() {
        }

        self.create = function() {
            self.ship = game.add.sprite(50,50,'ship');
            self.hud = new Hud(game, self.ship);
            self.controls = new Controls(game, self.ship);
        };

        self.update = function() {
            self.hud.update(game);
            self.controls.update(game);
        };
    };
})(SpaceGame, SpaceGame.Hud, SpaceGame.Controls);
