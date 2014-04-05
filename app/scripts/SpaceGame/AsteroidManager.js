(function (SpaceGame, Phaser) {
    "use strict";
    SpaceGame.AsteroidManager = function(game, asteroids, initialAsteroids) {
        var self = this;
        self.init = function() {
            for (var i=0; i < initialAsteroids.length; i++) {
                var cfg = initialAsteroids[i];
                self.addAsteroid(cfg);
            }
        };

        self.addAsteroid = function(cfg) {
            var asteroid = asteroids.create(
                cfg.x,
                cfg.y,
                'asteroid'
            );
            asteroid.scale = {
                x: cfg.inertia * .707,
                y: cfg.inertia * .707
            };
            asteroid.anchor.setTo(.5,.5);
            game.physics.enable(asteroid);
            asteroid.body.allowRotation = true;
            asteroid.body.angularVelocity = cfg.r;
            asteroid.body.inertia = cfg.inertia;
            asteroid.body.velocity = {
                x: cfg.vx,
                y: cfg.vy
            };
            asteroid.body.collideWorldBounds = true;
            asteroid.body.bounce = {x: 1.0, y : 1.0};
            asteroid.body.setSize(
                asteroid.width / 3,
                asteroid.height / 3,
                asteroid.width / 3,
                asteroid.height / 3
            );
        };
        self.update = function() {
            asteroids.forEach(self.wrapAtBounds);
            game.physics.arcade.collide(asteroids, asteroids, self.split, null, self);
            asteroids.forEach(function(asteroid) {
                if (asteroid && !asteroid.exists){
                    asteroid.destroy();
                }
            });
        };
        self.wrapAtBounds = function(asteroid) {
            var roidBody = asteroid.body;
            var left   = -asteroid.width / 2;
            var right  = game.width + asteroid.width / 2;
            var top    = -asteroid.height / 2;
            var bottom = game.height + asteroid.height / 2;
            if(roidBody.x > right) {
                roidBody.x = left;
            } else if(roidBody.x < left) {
                roidBody.x = right;
            }
            if (roidBody.y > bottom) {
                roidBody.y = top;
            } else if (roidBody.y < top) {
                roidBody.y = bottom;
            }
        };

        self.split = function(asteroid1, asteroid2) {
            var destroyAsteroid = Math.random() > 0.6;
            if (destroyAsteroid) {
                self.processAsteroid(asteroid1, asteroid2);
                asteroid1.exists = false;
            }
            var destroyAsteroid = Math.random() > 0.6;
            if (destroyAsteroid) {
                self.processAsteroid(asteroid2, asteroid1);
                asteroid2.exists = false;
            }
            return true;
        };

        self.processAsteroid = function(asteroid, object) {
            if (asteroid.body.inertia <= 0.5) {
                return;
            }
            self.addAsteroid({
                x: asteroid.body.x + asteroid.body.halfWidth - 1,
                y: asteroid.body.y - 1,
                vx: asteroid.body.velocity.x - 15,
                vy: asteroid.body.velocity.y - 15,
                r: asteroid.body.angularVelocity,
                inertia: asteroid.body.inertia / 2
            });
            self.addAsteroid({
                x: asteroid.body.x + asteroid.body.halfWidth + 1,
                y: asteroid.body.y + asteroid.body.height + 1,
                vx: asteroid.body.velocity.x + 15,
                vy: asteroid.body.velocity.y + 15,
                r: asteroid.body.angularVelocity,
                inertia: asteroid.body.inertia / 2
            });
        };
        self.init();
    }
})(SpaceGame, Phaser);
