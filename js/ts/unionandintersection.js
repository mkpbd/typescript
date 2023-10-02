"use strict";
/**
 * Use union and intersection types to model your data.
 * Use literal types to define concrete variants.
 */
function printToy(toy) {
    /* ... */
}
const doll = {
    name: "Mickey Mouse",
    price: 9.99,
    quantity: 10000,
    minimumAge: 2,
    material: "plush",
};
printToy(doll); // works
function printToy1(toy) {
    /* ... */
}
function takesNumberOrString(value) {
    /* ... */
}
takesNumberOrString(2); // ok
takesNumberOrString("Hello"); // ok
const one = 1; // nothing else can be assigned.
function checkDoll(doll) {
    if (doll.material === "plush") {
        // do something with plush
    }
    else {
        // doll.material is "plastic", there are no other options
    }
}
function area(shape) {
    if ("radius" in shape) { // shape is Circle
        return Math.PI * shape.radius * shape.radius;
    }
    else if ("y" in shape) { // shape is Triangle
        return (shape.x * shape.y) / 2;
    }
    else { // shape is Square
        return shape.x * shape.x;
    }
}
function area1(shape) {
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
