"use strict";
class Game {
    constructor() {
        this.pieces = Game.makePieces();
    }
    static makePieces() {
        return [
            // Kings
            new King('White', 'E', 1),
            new King('Black', 'E', 8),
            // Queens
            //new Queen('White', 'D', 1),
            // new Queen('Black', 'D', 8),
            // Bishops
            // new Bishop('White', 'C', 1),
            // new Bishop('White', 'F', 1),
            // new Bishop('Black', 'C', 8),
            // new Bishop('Black', 'F', 8),
            // ...
        ];
    }
}
