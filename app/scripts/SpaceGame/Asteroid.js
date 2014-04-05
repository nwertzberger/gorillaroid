(function (SpaceGame, Phaser) {
    "use strict";
    SpaceGame.Asteroid = function(game, asteroids, initialPosition, initialVelocity, initialSize) {
        var self = this;
        self.asteroid = asteroids.create(
            initialPosition.x,
            initialPosition.y,
            'asteroid'
        );

        self.asteroid.scale = {
            x: initialSize,
            y: initialSize
        };

        self.initialSize = initialSize;

        self.asteroid.anchor.setTo(.5,.5);

        game.physics.enable(self.asteroid);
        self.asteroid.body.allowRotation = true;
        self.asteroid.body.angularVelocity = 100;
        self.asteroid.body.inertia = 1.0;
        self.asteroid.body.bounce = {x: 1.0, y : 1.0};

        self.asteroid.body.velocity = initialVelocity;

        self.update = function() {
            if (self.asteroid) {
                self.wrapAtBounds();
            }
            if (self.childAsteroid1)
                self.childAsteroid1.update();
            if (self.childAsteroid2)
                self.childAsteroid2.update();

        };
        self.wrapAtBounds = function() {
            var roidBody = self.asteroid.body;
            var left = -self.asteroid.width / 2;
            var right = game.width + self.asteroid.width / 2;
            var top = -self.asteroid.height / 2;
            var bottom = game.height + self.asteroid.height / 2;
            if(roidBody.x > right) {
                roidBody.x = left;
            }
            else if(roidBody.x < left) {
                roidBody.x = right;
            }
            else if (roidBody.y > bottom) {
                roidBody.y = top;
            }
            if (roidBody.y < top) {
                roidBody.y = bottom;
            }
        };
    };

    SpaceGame.Asteroid.processAsteroid = function(asteroid, object) {
        if (asteroid.initialSize < 0.25) {
            asteroid.destroy();
            return;
        }

        new SpaceGame.Asteroid(
            game,
            asteroids,
            asteroid, {
                x: object.body.velocity.x * 2,
                y: object.body.velocity.y * 2
            },
            initialSize / 2
        );
        new SpaceGame.Asteroid(
            asteroids,
            asteroid, {
                x: object.body.velocity.x * 2,
                y: object.body.velocity.y * 2
            },
            initialSize / 2
        );
        asteroid.destroy();
    };

    SpaceGame.Asteroid.split = function(asteroid1, asteroid2) {
        SpaceGame.Asteroid.processAsteroid(asteroid1, asteroid2);
        SpaceGame.Asteroid.processAsteroid(asteroid2, asteroid1);
    };
})(SpaceGame, Phaser);
