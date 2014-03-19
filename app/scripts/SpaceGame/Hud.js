SpaceGame.Hud = (function(Phaser) {
    "use strict";
    var self = {};
    self.create = function(game, ship) {
        var graphics = game.add.graphics(0,0);
        self.lives = [];
        var bottom = game.height - 22;
        var width = game.width;
        var style = {
            font: "bold 15px monospace",
            fill: "#fff"
        };

        var shields = game.add.text(10, bottom, 
                                    "Shields:", style);
        var spacer = 3;
        var start = shields.width + shields.x + spacer;
        graphics.lineStyle(2, 0x99ff99, 1);
        self.addPointBar(start, bottom, 3, graphics);

        var engine = game.add.text(10 + width / 3, bottom,
                                   "Engine:", style);
        start = engine.width + engine.x + spacer;
        self.addPointBar(start, bottom, 3, graphics);

        var phaser = game.add.text(10 + 2*width / 3, bottom,
                                   "Phasers:", style);
        start = phaser.width + phaser.x + spacer;
        self.addPointBar(start, bottom, 3, graphics);
        
        var score = game.add.text( 10 + 2*width / 3, 5,
                                  "Score: 0", style);

    };

    self.update = function(game) {
    };

    self.addPointBar = function(x, y, numPoints, graphics) {
        var points = [];
        var start = x;
        for (var i = 0; i < numPoints; i++ ) {
            points.push(
                self.addPoint(
                    start,
                    y,
                    graphics
                )
            );
            start += 9;
        }
        return points;
    };

    self.addPoint = function(x, y, graphics) {
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

    return self;
})(Phaser);
