"use strict";
function add(a, b) {
    return a + b;
}
function addWithReturnNumber(a, b) {
    return a + b;
}
// Named function
function greet(name) {
    return 'hello ' + name;
}
// Function expression
let greet2 = function (name) {
    return 'hello ' + name;
};
// Arrow function expression
let greet3 = (name) => {
    return 'hello ' + name;
};
// Shorthand arrow function expression
let greet4 = (name) => 'hello ' + name;
// Function constructor
let greet5 = new Function('name', 'return "hello " + name');
add(1, 2); // evaluates to 3
greet('Crystal'); // evaluates to 'hello Crystal'
