"use strict";

var Phaser = Phaser || window.Phaser || null;
window.onload = function() {
    "use strict";
    // Create game
    var game = new Phaser.Game(
        800, 480,
        Phaser.AUTO,
        'game-window', 
        self
    );

    // Add all game states
    game.state.add('Boot', SpaceGame.Boot);
    game.state.add('Preload', SpaceGame.Preload);
    game.state.add('MainMenu', SpaceGame.MainMenu);
    game.state.add('GameOver', SpaceGame.GameOver);

    // Start this game
    game.state.start('Boot');
};
