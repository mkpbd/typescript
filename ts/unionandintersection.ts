/**
 * Use union and intersection types to model your data. 
 * Use literal types to define concrete variants.
 */

type BoardGame = {
    name: string,
    price: number,
    quantity: number,
    minimumAge: number,
    players: number,
};
type Puzzle = {
    name: string,
    price: number,
    quantity: number,
    minimumAge: number,
    pieces: number,
};
type Doll = {
    name: string,
    price: number,
    quantity: number,
    minimumAge: number,
    material: string,
};


type ToyBase = {
    name: string,
    price: number,
    quantity: number,
    minimumAge: number,
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

// Union Toy
type Toy = Doll | BoardGame | Puzzle;
function printToy1(toy: Toy) {
    /* ... */
}


function takesNumberOrString(value: number | string) {
    /* ... */
}

takesNumberOrString(2); // ok
takesNumberOrString("Hello"); // ok


type ToyBase1 = {
    name: string,
    price: number,
    quantity: number,
    minimumAge: number,
};
// Intersection of ToyBase and { players: number }
type BoardGame1 = ToyBase1 & {
    players: number,
};
// Intersection of ToyBase and { pieces: number }
type Puzzle1 = ToyBase1 & {
    pieces1: number,
};
// Intersection of ToyBase and { material: string }
type Doll1 = ToyBase1 & {
    material: string,
};

type One = 1;
const one: One = 1; // nothing else can be assigned.

type Doll2 = ToyBase & {
    material: "plush" | "plastic",
};
function checkDoll(doll: Doll2) {
    if (doll.material === "plush") {
        // do something with plush
    } else {
        // doll.material is "plastic", there are no other options
    }
}


type Circle = {
    radius: number,
};
type Square = {
    x: number,
};
type Triangle = {
    x: number,
    y: number,
};
type Shape = Circle | Triangle | Square;


function area(shape: Shape) {
    if ("radius" in shape) { // shape is Circle
        return Math.PI * shape.radius * shape.radius;
    } else if ("y" in shape) { // shape is Triangle
        return (shape.x * shape.y) / 2;
    } else { // shape is Square
        return shape.x * shape.x;
    }
}


type Rectangle = {
    x: number,
    y: number,
};

type Shapes = Circle | Triangle | Square | Rectangle;


type Circle1 = {
    radius: number,
    kind: "circle",
};
type Square1 = {
    x: number,
    kind: "square",
};
type Triangle1 = {
    x: number,
    y: number,
    kind: "triangle",
};
type Shape2 = Circle1 | Triangle1 | Square1;

function area1(shape: Shape2) {
    switch (shape.kind) {
        case "circle": // shape is Circle
            return Math.PI * shape.radius * shape.radius;
        case "triangle": // shape is Triangle
            return (shape.x * shape.y) / 2;
        case "square": // shape is Square
            return shape.x * shape.x;
        default:
            throw Error("not possible");
    }
}