"use strict";
// Type Annotations on Variables
let myName = "Alice";
// No type annotation needed -- 'myName' inferred as type 'string'
let myName1 = "Alice";
// Functions
/* Parameter Type Annotations
When you declare a function, you can add type annotations after each parameter to declare what types of parameters the function accepts. Parameter type annotations go after the parameter name:

*/
// Parameter type annotation
function greet5(name) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}
/**
 *
 *
 * Return Type Annotations
You can also add return type annotations. Return type annotations appear after the parameter list:

*/
function getFavoriteNumber() {
    return 26;
}
// Anonymous Functions
const names = ["Alice", "Bob", "Eve"];
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
// Contextual typing also applies to arrow functions
names.forEach((s) => {
    console.log(s.toUpperCase());
});
// ============================== Object Types ===========================
// The parameter's type annotation is an object type
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
// Optional Properties
// Object types can also specify that some or all of their properties are optional. To do this, add a ? after the property name:
function printName(obj) {
    // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
function printNames(obj) {
    var _a, _b, _c;
    // Error - might crash if 'obj.last' wasn't provided!
    console.log((_a = obj === null || obj === void 0 ? void 0 : obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
    // 'obj.last' is possibly 'undefined'.
    if (obj.last !== undefined) {
        // OK
        console.log((_b = obj.last) === null || _b === void 0 ? void 0 : _b.toUpperCase());
    }
    // A safe alternative using modern JavaScript syntax:
    console.log((_c = obj.last) === null || _c === void 0 ? void 0 : _c.toUpperCase());
}
//================================ Union Types ========================
/**
 *
 *
 * TypeScript’s type system allows you to build new types out of existing ones using a large variety of operators.
 *  Now that we know how to write a few types, it’s time to start combining them in interesting ways.
 *
 */
function printId(id) {
    console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
//-----------------------  TypeScript knows that only a string value will have a typeof value "string": =====================
function printIds(id) {
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    }
    else {
        // Here, id is of type 'number'
        console.log(id);
    }
}
///================= Another example is to use a function like Array.isArray:=====================
function welcomePeople(x) {
    if (Array.isArray(x)) {
        // Here: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
    }
    else {
        // Here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
    }
}
// Return type is inferred as number[] | string
function getFirstThree(x) {
    return x.slice(0, 3);
}
// Exactly the same as the earlier example
function printCoords(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoords({ x: 100, y: 100 });
function sanitizeInput(str) {
    return (str.toUpperCase());
}
// Create a sanitized input
let userInput = sanitizeInput("Hello bangaldesh");
// Can still be re-assigned with a string though
userInput = "new input";
function printCoorded(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoorded({ x: 100, y: 100 });
// const bear = new getBear();
// bear.name;
// bear.honey;
