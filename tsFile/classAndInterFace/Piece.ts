abstract class Piece {
    protected position: Position
    constructor(
        private readonly color: ColorCode,
        file: Files,
        rank: Rank
    ) {
        this.position = new Position(color, file, rank)
    }

    moveTo(position: Position) {
        this.position = position
    }
    abstract canMoveTo(position: Position): boolean
}
