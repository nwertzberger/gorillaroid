SpaceGame.GameOver = function(game) {
    "use strict";
    var self = this;

    self.preload = function() {
    };

    self.create = function() {
        game.stage.backgroundColor= "#111116";
        game.add.text(10,10,"Space Mayhem: Game Over", {font:"bold 32px monospace", fill:"#fff"});

        self.cursors = self.game.input.keyboard.createCursorKeys();
    };

    self.update = function() {
        if (self.cursors.up.isDown) {
        } else if (self.cursors.down.isDown) {
        } else {
        }
        if (self.cursors.left.isDown) {
        } else if (self.cursors.right.isDown) {
        } else {
        }
    };

    self.render = function() {
        // For debugging
    };
};
