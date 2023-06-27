"use strict";
function map(array, f) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result[i] = f(array[i]);
    }
    return result;
}
function mapp(array, f) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result[i] = f(array[i]);
    }
    return result;
}
function map1(array, f) {
    return Array();
}
map(['a', 'b', 'c'], // An array of T
// An array of T
_ => _ === 'a' // A function that returns a U
);
let myEvent = {
    target: document.querySelector('#myButton'),
    type: 'click'
};
function triggerEvent(event) {
    // ...
}
triggerEvent({
    target: document.querySelector('#myButton'),
    type: 'mouseover'
});
function mapNode(node, f) {
    return {
        ...node,
        value: f(node.value)
    };
}
let att = { value: 'a' };
let btnt = { value: 'b', isLeaf: true };
let ct = { value: 'c', children: [btnt] };
let atn = mapNode(att, _ => _.toUpperCase()); // TreeNode
let btn = mapNode(btnt, _ => _.toUpperCase()); // LeafNode
let c1 = mapNode(ct, _ => _.toUpperCase()); // InnerNode
function logPerimeter(s) {
    console.log(s.numberOfSides * s.sideLength);
    return s;
}
let square = { numberOfSides: 4, sideLength: 3 };
logPerimeter(square); // Square, logs "12"
//========= Using bounded polymorphism to model arity ===============
function call(f, ...args) {
    return f(...args);
}
function fill(length, value) {
    return Array.from({ length }, () => value);
}
// call(fill, 10, 'a') // evaluates to an array of 10 'a's
