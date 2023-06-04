"use strict";
//Function Type Expressions
// The simplest way to describe a function is with a function type expression. These types are syntactically similar to arrow functions:
function greeter(fn) {
    fn("Hello, World");
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole);
function doSomething(fn) {
    console.log(fn.description + " returned " + fn(6));
}
function myFunc(someArg) {
    return someArg > 3;
}
myFunc.description = "default description";
doSomething(myFunc);
function fn(ctor) {
    return new ctor("hello");
}
//=========================== Generic Functions ===============================
/**
 *
 * It’s common to write a function where the types of the input relate to the type of the output, or where the types of two inputs are related in some way.
 * Let’s consider for a moment a function that returns the first element of an array:
 *
 */
function firstElement(arr) {
    return arr[0];
}
/***
 *
 * This function does its job, but unfortunately has the return type any.
 *  It’d be better if the function returned the type of the array element.
 * In TypeScript, generics are used when we want to describe a correspondence between two values. We do this by declaring a type parameter in the function signature:


 *
 */
function firstElementGeneric(arr) {
    return arr[0];
}
// s is of type 'string'
const s = firstElementGeneric(["a", "b", "c"]);
// n is of type 'number'
const n = firstElementGeneric([1, 2, 3]);
// u is of type undefined
const u = firstElementGeneric([]);
//============================= Inference =======================
// Note that we didn’t have to specify Type in this sample. The type was inferred - chosen automatically - by TypeScript.
// We can use multiple type parameters as well. For example, a standalone version of map would look like this:
function map(arr, func) {
    return arr.map(func);
}
// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
///  ===============  Constraints ==========================
