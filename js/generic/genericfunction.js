"use strict";
function identity(input) {
    return input;
}
const numeric = identity("me");
// Type: "me"
const stringy = identity(123);
// Type: 123
// generic arrow function
const identityArrow = (input) => input;
identityArrow("hello world");
identityArrow(10);
//===== Explicit Generic Call Types =========
function logWrapper(callback) {
    return;
    (input) => {
        console.log("Input:", input);
        callback(input);
    };
}
// Type: (input: string) => void
logWrapper((input) => {
    console.log(input.length);
});
// Type: (input: unknown) => void
logWrapper((input) => {
    console.log(input);
    // console.log(input.length);
    // ~~~~~~
    // Error: Property 'length' does not exist on type 'unknown'.
});
//=============== multiple parameters 
function makeTuple(first, second) {
    return [first, second];
}
let tuple = makeTuple(true, "abc");
// Type of value: readonly [boolean, string]
//=================== key value pairs =================
function makePair(key, value) {
    return {
        key, value
    };
}
// Ok: neither type argument provided
makePair("abc", 123);
// Type: { key: string; value: number }
// Ok: both type arguments provided
makePair("abc", 123);
// Type: { key: string; value: number }
makePair("abc", 123);
// Type: { key: "abc"; value: 123 }
// makePair<string>("abc", 123);
// ~~~~~~
// Error: Expected 2 type arguments, but got 1.TIP;
