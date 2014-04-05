SpaceGame.MainMenu = function(game) {
    'use strict';
    var self = this;

    self.preload = function() {
    };
    self.create = function() {
        game.stage.backgroundColor= '#111116';
        self.ship = game.add.sprite(
            game.stage.bounds.width/2 - 100,
            game.stage.bounds.height / 2,
            'ship'
        );

        game.physics.enable(self.ship, Phaser.Physics.ARCADE);
        game.add.text(10,10,'Space Mayhem', {font:'bold 32px monospace', fill:'#fff'});
        self.cursors = game.input.keyboard.createCursorKeys();
    };
    self.update = function() {
        if (self.cursors.up.isDown) {
        } else if (self.cursors.down.isDown) {
        }
        if (self.cursors.left.isDown) {
            self.ship.body.acceleration.x = -20;
        } else if (self.cursors.right.isDown) {
            self.ship.body.acceleration.x = 20;
        } else {
            self.ship.body.acceleration.x = 0;
        }
    };
    self.render = function() {
        // For debugging
    };
};
