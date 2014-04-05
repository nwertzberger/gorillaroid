window.developingState = "Level";
(function(SpaceGame, Hud, Controls, Asteroid) {
    "use strict";
    SpaceGame.Level = function(game) {
        var self = this;

        self.create = function() {
            self.ship = game.add.sprite(50,50,'ship');
            self.hud = new Hud(game, self.ship);
            self.controls = new Controls(game, self.ship);
            self.asteroids = game.add.group();
            self.asteroid1 = new Asteroid(game, self.asteroids, {x:10, y : 10}, {x: 40, y: 40}, 2);
            self.asteroid2 = new Asteroid(game, self.asteroids, {x:200, y: 10}, {x: -40, y: 40}, 2);
        };

        self.update = function() {
            self.hud.update(game);
            self.controls.update(game);
            self.asteroid1.update(game);
            self.asteroid2.update(game);
            game.physics.arcade.collide(self.asteroids, self.asteroids);
            
        };
    };
})(SpaceGame, SpaceGame.Hud, SpaceGame.Controls, SpaceGame.Asteroid);
