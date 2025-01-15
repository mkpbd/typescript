type BoardGame = {
  name: string;
  price: number;
  quantity: number;
  minimumAge: number;
  players: number;
};
type Puzzle = {
  name: string;
  price: number;
  quantity: number;
  minimumAge: number;
  pieces: number;
};
type Doll = {
  name: string;
  price: number;
  quantity: number;
  minimumAge: number;
  material: string;
};

type ToyBase = {
  name: string;
  price: number;
  quantity: number;
  minimumAge: number;
};
function printToy(toy: ToyBase) {
  /* ... */
}
const doll: Doll = {
  name: "Mickey Mouse",
  price: 9.99,
  quantity: 10000,
  minimumAge: 2,
  material: "plush",
};
printToy(doll); // works

// ----------------------------------------------------------------

// Union Toy
type Toy = Doll | BoardGame | Puzzle;
function printToys(toy: Toy) {
  /* ... */
}

// Intersection of ToyBase and { players: number }
type BoardGame1 = ToyBase & {
  players: number;
};
// Intersection of ToyBase and { pieces: number }
type Puzzle1 = ToyBase & {
  pieces: number;
};
// Intersection of ToyBase and { material: string }
type Doll1 = ToyBase & {
  material: string;
};

type Doll3 = ToyBase & {
  material: "plush" | "plastic";
};
function checkDoll(doll: Doll3) {
  if (doll.material === "plush") {
    // do something with plush
  } else {
    // doll.material is "plastic", there are no other options
  }
}

type Circle = {
  radius: number;
};
type Square = {
  x: number;
};
type Triangle = {
  x: number;
  y: number;
};
type Shape = Circle | Triangle | Square;
