"use strict";

var Phaser = Phaser || window.Phaser || null;

var game = (function($, Phaser, screen) {
    var self = this || {};

    self.preload = function() {
        self.game.load.image('ship', 'images/ship.png');
    };

    self.create = function() {
        self.game.stage.backgroundColor= "#111116";
        self.ship = self.game.add.sprite(
            self.game.stage.bounds.width/2 - 100,
            self.game.stage.bounds.height / 2,
            'ship');
        self.game.add.text(10,10,"Space Mayhem", {font:"bold 32px monospace", fill:"#fff"});
        self.cursors = self.game.input.keyboard.createCursorKeys();
    };

    self.update = function() {
        self.wobble(self.ship.body, self.game.stage.bounds.height / 2);
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

    self.wobble = function(body, y) {
        if (body.velocity.y > 0) {
            if (body.y > y + 10) {
                body.acceleration.y = -30;
            }
        } else if (body.y < y - 10) {
            body.acceleration.y = 30;
        } else if (body.acceleration.y == 0) {
            body.acceleration.y = 30;
        }
    };


    self.render = function() {
    };

    self.go = function() {
        var windowTop = $("#game-window").offset().top;
        self.game = new Phaser.Game(
                (screen.width > 700 ? 700 : screen.width),
                (screen.height > 500 + windowTop ? 500 : screen.height - windowTop),
                Phaser.AUTO,
                'game-window', 
                self);
    };

    return self;
})(jQuery, Phaser, screen);

$(function() {
    game.go();
});
