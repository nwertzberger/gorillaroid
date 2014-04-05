window.developingState = "Level";
(function(SpaceGame, Hud, Controls, Asteroid) {
    "use strict";
    SpaceGame.Level = function(game) {
        var self = this;

        self.create = function() {
            self.ship = game.add.sprite(50,50,'ship');
            self.hud = new Hud(game, self.ship);
            self.controls = new Controls(game, self.ship);
            self.asteroid = new Asteroid(game, {x: 40, y: 40}, 2);
        };

        self.update = function() {
            self.hud.update(game);
            self.controls.update(game);
            self.asteroid.update(game);
        };
    };
})(SpaceGame, SpaceGame.Hud, SpaceGame.Controls, SpaceGame.Asteroid);
