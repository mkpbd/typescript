"use strict";
function add(a, b) {
    return a + b;
}
function addNumberReturn(a, b) {
    return a + b;
}
// Named functions
function greet(name) {
    return 'Hello' + name;
}
// function expression 
let greet2 = function (name) {
    return 'Hello' + name;
};
// Arrow function expression
let greet3 = (names) => {
    return 'Hello' + names;
};
// Shorthand arrow function expression
let greet5 = (names) => 'hello' + names;
// Optional  and Default  parameter
function log(message, userId) {
    let time = new Date().toLocaleString();
    console.log(time + message + userId || 'Not Signed In');
}
log('Page Laded');
log('User signed in', 'da763beef');
function log2(message, context = {}) {
    let time = new Date().toISOString();
    console.log(time, message, context.appId, context.userId);
}
// Rest Parameters
function sum(numbers) {
    return numbers.reduce((sum, number) => sum + number);
}
sum([1, 2, 3]); // evaluates 6
function sumVariadicSafe(...numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}
sumVariadicSafe(3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14);
add(10, 20);
add.apply(null, [10, 20]);
add.call(null, 30, 50);
const bind = add.bind(null, 30, 50);
let x = {
    a() {
        return this;
    }
};
x.a();
function fancyDate() {
    return `${this.getDate()}/${this.getMonth()}/${this.getFullYear()}`;
}
fancyDate.call(new Date);
