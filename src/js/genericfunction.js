"use strict";
/**
 *
 * Generic Functions
 *
 * It’s common to write a function where the types of the input relate to the type of the output, or where the types of two inputs are related in some way.
 * Let’s consider for a moment a function that returns the first element of an array:
 *
 *
 */
// no generic function 
function firstElement(arr) {
    return arr[0];
}
// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n = firstElement([1, 2, 3]);
// u is of type undefined
const u = firstElement([]);
// generic function 
function firstElementGeneric(arr) {
    return arr[0];
}
const ss = firstElementGeneric(["hello", "one"]);
const nn = firstElementGeneric([22, 33]);
const bb = firstElementGeneric([true, true, false]);
const ob = firstElementGeneric([new Object(), new Object()]);
/**
 *
 * ===================== Inference ==========================
 *
 * Note that we didn’t have to specify Type in this sample.
 * The type was inferred - chosen automatically - by TypeScript.
 * We can use multiple type parameters as well. For example, a standalone version of map would look like this:
 *
 *
 *
 *
 */
function map(arr, func) {
    return arr.map(func);
}
// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
//=================== Constraints= =========================
function longest(a, b) {
    if (a.length >= b.length) {
        return a;
    }
    else {
        return b;
    }
}
// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);
// longerString is of type 'alice' | 'bob'
const longerString = longest("alice", "bob");
// Error! Numbers don't have a 'length' property
//const notOK = longest(10, 100);
//================= Working with Constrained Values ===================
function minimumLength(obj, minimum) {
    if (obj.length >= minimum) {
        return obj;
    }
    else {
        return obj;
        //return { length: minimum };
        //Type '{ length: number; }' is not assignable to type 'Type'.
        // '{ length: number; }' is assignable to the constraint of type 'Type', but 'Type' could be instantiated with a different subtype of constraint '{ length: number; }'.
    }
}
//==================== Specifying Type Arguments ====================
function combine(arr1, arr2) {
    return arr1.concat(arr2);
}
//   const arr = combine([1, 2, 3], ["hello"]);
const arr = combine([1, 2, 3], [33, 44]);
const arre = combine([1, 2, 3], ["hello"]);
/** Push Type Parameters Down
 *
 * Here are two ways of writing a function that appear similar:
 */
function firstElement1(arr) {
    return arr[0];
}
function firstElement2(arr) {
    return arr[0];
}
// a: number (good)
const ab = firstElement1([1, 2, 3]);
// b: any (bad)
const bbc = firstElement2([1, 2, 3]);
//=============== Use Fewer Type Parameters ====================
// Here’s another pair of similar functions:
function filter1(arr, func) {
    return arr.filter(func);
}
function filter2(arr, func) {
    return arr.filter(func);
}
// Type Parameters Should Appear Twice 
// Sometimes we forget that a function might not need to be generic: 
function greet(s) {
    console.log("Hello, " + s);
}
greet("world");
// We could just as easily have written a simpler version:
function greet(s) {
    console.log("Hello, " + s);
}
// Optional Parameters 
// Functions in JavaScript often take a variable number of arguments. For example, the toFixed method of number takes an optional digit count:
function f(n) {
    console.log(n.toFixed()); // 0 arguments
    console.log(n.toFixed(3)); // 1 argument
}
// We can model this in TypeScript by marking the parameter as optional with ?:
function ff(x) {
    // ...
}
ff(); // OK
ff(10); // OK
// cut
// All OK
fff();
fff(10);
fff(undefined);
//========= Optional Parameters in Callbacks ===========
function myForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}
myForEach([1, 2, 3], (a) => console.log(a));
myForEach([1, 2, 3], (a, i) => console.log(a, i));
function myForEaches(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        // I don't feel like providing the index today
        callback(arr[i]);
    }
}
function makeDate(mOrTimestamp, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    }
    else {
        return new Date(mOrTimestamp);
    }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
// const d3 = makeDate(1, 3); // get error
