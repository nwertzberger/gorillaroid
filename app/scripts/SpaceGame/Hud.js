SpaceGame.Hud = function(game, ship) {
    "use strict";
    var self = this;

    self.update = function(game) {
    };

    var addPointBar = function(x, y, numPoints) {
        var points = [];
        var start = x;
        for (var i = 0; i < numPoints; i++ ) {
            points.push(
                addPoint(
                    start,
                    y,
                    graphics
                )
            );
            start += 9;
        }
        return points;
    };

    var addPoint = function(x, y) {
        return graphics.drawPolygon(
            new Phaser.Polygon(
                x + 0, y + 3,
                x + 3, y + 0,
                x + 6, y + 0,
                x + 6,  y + 14,
                x + 3,  y + 17,
                x + 0,  y + 17
            )
        );
    };

    var graphics = game.add.graphics(0,0);
    graphics.lineStyle(2, 0x99ff99, 1);
    self.lives = [];
    var bottom = game.height - 22;
    var spacer = 3;
    var width = game.width;
    var style = {
        font: "bold 15px monospace",
        fill: "#fff"
    };

    var shields = game.add.text(10, bottom, "Shields:", style);
    var start = shields.width + shields.x + spacer;
    addPointBar(start, bottom, 3);

    var engine = game.add.text(10 + width / 3, bottom, "Engine:", style);
    start = engine.width + engine.x + spacer;
    addPointBar(start, bottom, 3);

    var phaser = game.add.text(10 + 2*width / 3, bottom, "Phasers:", style);
    start = phaser.width + phaser.x + spacer;
    addPointBar(start, bottom, 3);

    // var score =
    game.add.text( 10 + 2*width / 3, 5, "Score: 0", style);
};
