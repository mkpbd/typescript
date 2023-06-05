"use strict";
/**
 *
 * ======================== Property Modifiers ===============================
Each property in an object type can specify a couple of things: the type, whether the property is optional, and whether the property can be written to.

Optional Properties
Much of the time, we’ll find ourselves dealing with objects that might have a property set. In those cases,
we can mark those properties as optional by adding a question mark (?) to the end of their names.
 *
 */
function paintShape(opts) {
    // ...
}
function getShape() {
    let aa;
    //return aa.shape;
}
const shape = getShape();
function doSomething(obj) {
    // We can read from 'obj.prop'.
    console.log(`prop has the value '${obj.prop}'.`);
    // But we can't re-assign it.
    // obj.prop = "hello";
    //Cannot assign to 'prop' because it is a read-only property.
}
function visitForBirthday(home) {
    // We can read and update properties from 'home.resident'.
    console.log(`Happy birthday ${home.resident.name}!`);
    home.resident.age++;
}
function evict(home) {
    // But we can't write to the 'resident' property itself on a 'Home'.
    //home.resident = {
    // Cannot assign to 'resident' because it is a read-only property.
    // name: "Victor the Evictor",
    //age: 42,
    // };
}
let writablePerson = {
    name: "Person McPersonface",
    age: 42,
};
// works
let readonlyPerson = writablePerson;
console.log(readonlyPerson.age); // prints '42'
writablePerson.age++;
console.log(readonlyPerson.age); // prints '43'
/*****
 *
 *
 * Index Signatures
 * Sometimes you don’t know all the names of a type’s properties ahead of time, but you do know the shape of the values.
 * In those cases you can use an index signature to describe the types of possible values, for example:
 *
 */
function getStringArray() {
    return ['a', 'b', 'c', 'd', 'e', 'f'];
}
const myArray = getStringArray();
const secondItem = myArray[1];
function getReadOnlyStringArray() {
    return ['abc'];
}
let myArrays = getReadOnlyStringArray();
myArray[2] = "Mallory";
function createSquare(config) {
    return {
        color: config.color || "red",
        area: config.width ? config.width * config.width : 20,
    };
}
//   let mySquare = createSquare({ colour: "red", width: 100 });   // get error 
let mySquares = createSquare({ color: "red", width: 100 });
/**
 * Getting around these checks is actually really simple. The easiest method is to just use a type assertion:
 *
 *
 */
let mySquarese = createSquare({ width: 100, opacity: 0.5 });
let squareOptions = { colour: "red", width: 100 };
let mySquare = createSquare(squareOptions);
let squareOptionss = { colour: "red" };
let mySquaress = createSquare(squareOptions);
const cc = {
    color: "red",
    radius: 42,
};
//=============== ere, we’ve intersected Colorful and Circle to produce a new type that has all the members of Colorful and Circle. ===========
function draw(circle) {
    console.log(`Color was ${circle.color}`);
    console.log(`Radius was ${circle.radius}`);
}
// okay
draw({ color: "blue", radius: 42 });
// oops
// draw({ color: "red", raidus: 42 });
/**
 *
 *
 *
 * =============================== Interfaces vs. Intersections =============================================
 *
 *
We just looked at two ways to combine types which are similar, but are actually subtly different.
With interfaces, we could use an extends clause to extend from other types, and we were able to do something similar with intersections and name the result with a type alias.
 The principal difference between the two is how conflicts are handled, and that difference is typically one of the main reasons why you’d pick one over the other between an interface and a type alias of an intersection type.
 *
 */ 
