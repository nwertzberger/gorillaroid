(function (SpaceGame) {
    "use strict";
    SpaceGame.Asteroid = function(game, initialVelocity, initialSize) {
        var self = this;
        self.asteroid = game.add.sprite(
            game.width / 2,
            game.height / 2,
            'asteroid');

        self.asteroid.scale = {
            x: initialSize,
            y: initialSize
        };

        self.asteroid.anchor.setTo(.5,.5);

        game.physics.enable(self.asteroid, Phaser.Physics.ARCADE);
        self.asteroid.body.allowRotation = true;
        self.asteroid.body.angularVelocity = 100;
        self.asteroid.body.collideWorldBounds = true;

        self.asteroid.body.velocity = initialVelocity;

        self.update = function() {
            game.physics.collide(self.asteroid, function() {
                new SpaceGame.Asteroid(game, {
                    x: -self.asteroid.velocity.x,
                    y: -self.asteroid.velocity.y
                },
                initialSize / 2);
            }, null, this);
        };
    };
})(SpaceGame);
