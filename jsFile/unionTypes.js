"use strict";
let age = 55;
let driver = {
    name: 'James May',
    age: age
};
//type Color = 'blue' // Error TS2300: Duplicate identifier 'Color'.
/**
 * And like let and const, type aliases are block-scoped. Every block and every function
 * has its own scope, and inner type alias declarations shadow outer ones:
 */
let x = Math.random() < .5;
if (x) {
    let b = 'blue';
}
else {
    let c = 'red';
}
// Cat
let aCatDog = {
    name: 'Bonkers',
    purrs: true
};
// Dog
aCatDog = {
    name: 'Domino',
    barks: true,
    wags: true
};
// Both
aCatDog = {
    name: 'Donkers',
    barks: true,
    purrs: true,
    wags: true
};
let bCatDog = {
    name: 'Domino',
    barks: true,
    purrs: true,
    wags: true
};
function trueOrNull(isTrue) {
    if (isTrue) {
        return 'true';
    }
    return null;
}
function returnAOrB(a, b) {
    return a || b;
}
/// Arrays
let ar = [1, 2, 3]; // number[]
var br = ['a', 'b']; // string[]
let cr = ['a']; // string[]
let dr = [1, 'a']; // (string | number)[]
const er = [2, 'b']; // (string | number)[]
let fr = ['red'];
fr.push('blue');
//fr.push(true) // Error TS2345: Argument of type 'true' is not assignable to parameter of type 'string'.
let gr = []; // any[]
gr.push(1); // number[]
gr.push('red'); // (string | number)[]
let hr = []; // number[]
hr.push(1); // number[]
// hr.push('red') // Error TS2345: Argument of type '"red"' is not assignable to parameter of type 'number'.
function buildArray() {
    let a = []; // any[]
    a.push(1); // number[]
    a.push('x'); // (string | number)[]
    return a;
}
let myArray = buildArray(); // (string | number)[]
//myArray.push(true) // Error 2345: Argument of type 'true' is not
// assignable to parameter of type 'string | number'.
//============== Tuples =============================
let at = [1];
// A tuple of [first name, last name, birth year]
let bt = ['malcolm', 'gladwell', 1963];
//bt = ['queen', 'elizabeth', 'ii', 1926] // Error TS2322: Type 'string' is no assignable to type 'number'.// An array of train fares, which sometimes vary depending on direction
let trainFares = [
    [3.75],
    [8.25, 7.70],
    [10.50]
];
// Equivalently:
let moreTrainFares = [
// ...
];
// A list of strings with at least 1 element
let friends = ['Sara', 'Tali', 'Chloe', 'Claire'];
// A heterogeneous list
let list = [1, false, 'a', 'b', 'c'];
// ======================= Read-only arrays and tuples ===========
let as = [1, 2, 3]; // readonly number[]
let bs = as.concat(4); // readonly number[]
let three = bs[2]; // number
//============= null, undefined, void, and never ==============
// (a) A function that returns a number or null
function af(x) {
    if (x < 10) {
        return x;
    }
    return null;
}
// (b) A function that returns undefined
function bf() {
    return undefined;
}
// (c) A function that returns void
function c() {
    let a = 2 + 2;
    let b = a * a;
}
// (d) A function that returns never
function df() {
    throw TypeError('I always error');
}
// (e) Another function that returns never
function ef() {
    while (true) {
        doSomething();
    }
}
function doSomething() {
    console.log('hello world');
}
