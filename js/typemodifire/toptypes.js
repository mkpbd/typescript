"use strict";
// top types
// any and again types
let anyValue;
anyValue = "Lucille Ball";
// Ok
anyValue = 123;
// Ok
console.log(anyValue);
// Ok
function greetComedian(name) {
    // No type error...
    console.log(`Announcing ${name.toUpperCase()}!`);
}
greetComedian({
    name: "Bea Arthur",
});
// Runtime error: name.toUpperCase is not a function
// unkown types 
function greetComedianSafety(name) {
    if (typeof name === "string") {
        console.log(`Announcing ${name.toUpperCase()}!`);
        // Ok
    }
    else {
        console.log("Well, I'm off.");
    }
}
greetComedianSafety("Betty White");
// Logs: 4
greetComedianSafety({});
// Does not log
//=================== Type Predicates =========
function isNumberOrString(value) {
    return ["number", "string"].includes(typeof value);
}
function logValueIfExists(value) {
    if (isNumberOrString(value)) {
        // Type of value: number | string | null | undefined
        value?.toString();
        // value.toString();
        // Error: Object is possibly undefined.
    }
    else {
        console.log("Value does not exist:", value);
    }
}
// Type predicate’s return types can be declared as the name of a parameter, the is keyword, and some type:
function isNumberOrString1(value) {
    return ["number", "string"].includes(typeof value);
}
function logValueIfExists1(value) {
    if (isNumberOrString(value)) {
        // Type of value: number | string
        value?.toString();
        // Ok
    }
    else {
        // Type of value: null | undefined
        console.log("value does not exist:", value);
    }
}
function isStandupComedian(value) {
    return 'routine' in value;
}
function workWithComedian(value) {
    if (isStandupComedian(value)) {
        // Type of value: StandupComedian
        console.log(value.routine);
    }
}
function isLongString(input) {
    return !!(input && input.length >= 7);
}
function workWithText(text) {
    if (isLongString(text)) {
        // Type of text: string
        console.log("Long text:", text.length);
    }
}
