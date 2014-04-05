window.developingState = "Level";
(function(SpaceGame, Hud, Controls, AsteroidManager) {
    "use strict";
    SpaceGame.Level = function(game) {
        var self = this;

        self.create = function() {
            self.ship = game.add.sprite(50,50,'ship');
            self.hud = new Hud(game, self.ship);
            self.controls = new Controls(game, self.ship);
            self.asteroids = game.add.group();
            self.asteroidManager = new AsteroidManager(game, self.asteroids, [
                { x : 10, y: 10, vx: 200, vy: 100, r: 100, inertia: 2},
                { x : 600, y: 10, vx: 300, vy: -100, r: 100, inertia: 2},
                { x : 600, y: 400, vx: -300, vy: -100, r: 100, inertia: 2},
                { x : 10, y: 400, vx: -300, vy: 100, r: 100, inertia: 2}
            ]);
        };

        self.update = function() {
            self.hud.update(game);
            self.controls.update(game);
            self.asteroidManager.update();
        };
    };
})(SpaceGame, SpaceGame.Hud, SpaceGame.Controls, SpaceGame.AsteroidManager);
