class Position {
    constructor(
        private Color: ColorCode,
        private file: Files,
        private rank: Rank,

    ) { }

    distanceFrom(position: Position) {
        return {
            rank: Math.abs(position.rank - this.rank),
            file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
        }
    }
}