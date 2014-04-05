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
                x: cfg.scale,
                y: cfg.scale
            };
            asteroid.anchor.setTo(.5,.5);
            game.physics.enable(asteroid);
            asteroid.body.allowRotation = true;
            asteroid.body.angularVelocity = cfg.r;
            asteroid.body.inertia = 1.0 * cfg.scale * cfg.scale;
            asteroid.body.bounce = {x: 1.0, y : 1.0};
            asteroid.body.velocity = {
                x: cfg.vx,
                y: cfg.vy
            };
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
            self.processAsteroid(asteroid1, asteroid2);
            self.processAsteroid(asteroid2, asteroid1);
            asteroid1.exists = false;
            asteroid2.exists = false;
        };

        self.processAsteroid = function(asteroid, object) {
            if (asteroid.scale.x <= 0.5) {
                return;
            }
            self.addAsteroid({
                x: asteroid.body.x,
                y: asteroid.body.y,
                vx: -asteroid.body.velocity.y,
                vy: -asteroid.body.velocity.x,
                r: asteroid.body.angularVelocity,
                scale: asteroid.scale.x / 2
            });
            self.addAsteroid({
                x: asteroid.body.x,
                y: asteroid.body.y,
                vx: object.body.velocity.x * 2,
                vy: object.body.velocity.y * 2,
                r: asteroid.body.angularVelocity,
                scale: asteroid.scale.x / 2
            });
        };
        self.init();
    }
})(SpaceGame, Phaser);
