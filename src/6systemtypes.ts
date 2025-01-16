// Modeling Data with Union and Intersection Types

type BoardGame2 = {
  name: string;
  price: number;
  quantity: number;
  minimumAge: number;
  players: number;
};
type Puzzle2 = {
  name: string;
  price: number;
  quantity: number;
  minimumAge: number;
  pieces: number;
};
type Doll2 = {
  name: string;
  price: number;
  quantity: number;
  minimumAge: number;
  material: string;
};

/*

For the functions you create, you need a type that is representative of all toys,
a supertype that contains just the basic properties common to all toys:
*/

type ToyBase2 = {
  name: string;
  price: number;
  quantity: number;
  minimumAge: number;
};
function printToy(toy: ToyBase) {
  /* ... */
}
const doll2: Doll2 = {
  name: "Mickey Mouse",
  price: 9.99,
  quantity: 10000,
  minimumAge: 2,
  material: "plush",
};
printToy(doll); // works

// ----------------------------------------------------------------

// Union Toy
type Toy2 = Doll2 | BoardGame2 | Puzzle2;
function printToy(toy: Toy) {
  /* ... */
}

function takesNumberOrString(value: number | string) {
  /* ... */
}
takesNumberOrString(2); // ok
takesNumberOrString("Hello"); // ok
