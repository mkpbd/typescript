"use strict";
class Piece {
    constructor(color, file, rank) {
        this.color = color;
        this.position = new Position(color, file, rank);
    }
    moveTo(position) {
        this.position = position;
    }
}
