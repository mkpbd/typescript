// An Enum is a special "Class " that represents a group of constant (unchangeable variables)
// Enums come in two flavors  string and numeric 

// Enum numeric 

enum CardinalDirection {
    North,
    East,
    South,
    West
}

let currentDirection = CardinalDirection.East;

// numeric enum Initialized 

enum CardinalDirection1 {
    North = 1,
    East,
    South,
    West

}

// Numeric Enums - Fully Initialized
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);

// String Enums

enum CardinalDirections1 {
  North = 'North',
  East = "East",
  South = "South",
  West = "West"
};
// logs "North"
console.log(CardinalDirections1.North);
// logs "West"
console.log(CardinalDirections1.West);