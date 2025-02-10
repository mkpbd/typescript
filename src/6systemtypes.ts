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

/*
Explicitly Defining Models with Discriminated Union Types

*/
// ----------------------------------------------------------------
type Circle1 = {
  radius: number;
};
type Square1 = {
  x: number;
};
type Triangle1 = {
  x: number;
  y: number;
};
type Shape1 = Circle1 | Triangle1 | Square1;

function area(shape: Shape1) {
  if ("radius" in shape) {
    // shape is Circle
    return Math.PI * shape.radius * shape.radius;
  } else if ("y" in shape) {
    // shape is Triangle
    return (shape.x * shape.y) / 2;
  } else {
    // shape is Square
    return shape.x * shape.x;
  }
}

type Rectangle = {
  x: number;
  y: number;
};
type Shape2 = Circle1 | Triangle1 | Square1 | Rectangle;

type Circle2 = {
  radius: number;
  kind: "circle";
};
type Square2 = {
  x: number;
  kind: "square";
};
type Triangle2 = {
  x: number;
  y: number;
  kind: "triangle";
};
type Shape3 = Circle2 | Triangle2 | Square2;

function areas(shape: Shape3) {
  switch (shape.kind) {
    case "circle": // shape is Circle
      return Math.PI * shape.radius * shape.radius;
    case "triangle": // shape is Triangle
      return (shape.x * shape.y) / 2;
    case "square": // shape is Square
      return shape.x * shape.x;
    default:
      console.error("Shape not defined:", shape); // shape is never
      throw Error("not possible");
  }
}

type Rectangle3 = {
  x: number;
  y: number;
  kind: "rectangle";
};
type Shape4 = Circle2 | Triangle2 | Square2 | Rectangle3;
function areass(shape: Shape4) {
  switch (shape.kind) {
    case "circle": // shape is Circle
      return Math.PI * shape.radius * shape.radius;
    case "triangle": // shape is Triangle
      return (shape.x * shape.y) / 2;
    case "square": // shape is Square
      return shape.x * shape.x;
    default:
      console.error("Shape not defined:", shape); // shape is Rectangle
      throw Error("not possible");
  }
}

function assertNever(value: never) {
  console.error("Unknown value", value);
  throw Error("Not possible");
}
