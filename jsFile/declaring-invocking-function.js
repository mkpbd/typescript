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
function log1(message, userId) {
    let time = new Date().toLocaleTimeString();
    console.log(time, message, userId || 'Not signed in');
}
log1('Page loaded'); // Logs "12:38:31 PM Page loaded Not signed in"
log1('User signed in', 'da763be'); // Logs "12:38:31 PM User signed in da763be"
function log2(message, userId = 'Not signed in') {
    let time = new Date().toISOString();
    console.log(time, message, userId);
}
log2('User clicked on a button', 'da763be');
log2('User signed out');
function log3(message, context = {}) {
    let time = new Date().toISOString();
    console.log(time, message, context.userId);
}
//========================= Rest Parameters =========================
function sum(numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
sum([1, 2, 3]); // evaluates to 6
function sumVariadicSafe(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
sumVariadicSafe(1, 2, 3); // evaluates to 6
//====================== call, apply, and bind =================================
function add3(a, b) {
    return a + b;
}
add3(10, 20); // evaluates to 30
add3.apply(null, [10, 20]); // evaluates to 30
add3.call(null, 10, 20); // evaluates to 30
add3.bind(null, 10, 20)(); // evaluates to 30
