"use strict";
/**
 *
 **************************==== Type Assertions==========**************
Sometimes you will have information about the type of a value that TypeScript can’t know about.

For example, if you’re using document.getElementById, TypeScript only knows that this will return some kind of HTMLElement, but you might know that your page will always have an HTMLCanvasElement with a given ID.

In this situation, you can use a type assertion to specify a more specific type:
 *
 *
 */
const myCanvas = document.getElementById("main_canvas");
const myCanvases = document.getElementById("main_canvas");
///=========== Literal Types
let changingStrings = "Hello World";
changingStrings = "Olá Mundo";
// Because `changingString` can represent any possible string, that
// is how TypeScript describes it in the type system
changingStrings;
let changingString;
const constantString = "Hello World";
let x = "hello";
// OK
x = "hello";
// ...
// x = "howdy";
function printText(s, alignment) {
    // ...
}
printText("Hello, world", "left");
printText("G'day, mate", "center");
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
function configure(x) {
    // ...
}
configure({ width: 100 });
configure("auto");
//   configure("automatic");
const obj = { counter: 0 };
if (3 > 2) {
    obj.counter = 1;
}
const req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method = "GET");
handleRequest(req.url, req.method = "GET");
// Change 1:
const res = { url: "https://example.com", method: "GET" };
// Change 2
handleRequest(req.url, req.method);
//========================== strictNullChecks =========================
function doSomething(x) {
    if (x === null) {
        // do nothing
    }
    else {
        console.log("Hello, " + x.toUpperCase());
    }
}
//====================== Non-null Assertion Operator (Postfix !) ==================
function liveDangerously(x) {
    // No error
    console.log(x.toFixed());
}
