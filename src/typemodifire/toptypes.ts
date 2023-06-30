// top types

// any and again types
let anyValue: any;
anyValue = "Lucille Ball";
// Ok
anyValue = 123;
// Ok
console.log(anyValue);
// Ok


function greetComedian(name: any) {
    // No type error...
    console.log(`Announcing ${name.toUpperCase()}!`);
}
greetComedian({
    name: "Bea Arthur",
});
// Runtime error: name.toUpperCase is not a function


// unkown types 

function greetComedianSafety(name: unknown) {
    if (typeof name === "string") {
        console.log(`Announcing ${name.toUpperCase()}!`);
        // Ok
    } else {
        console.log("Well, I'm off.");
    }
}
greetComedianSafety("Betty White");
// Logs: 4
greetComedianSafety({});
// Does not log


//=================== Type Predicates =========

function isNumberOrString(value: unknown) {
    return ["number", "string"].includes(typeof value);
}
function logValueIfExists(value: number | string | null | undefined) {
    if (isNumberOrString(value)) {
        // Type of value: number | string | null | undefined
        value?.toString();
        // value.toString();
        // Error: Object is possibly undefined.
    } else {
        console.log("Value does not exist:", value);
    }
}


// Type predicate’s return types can be declared as the name of a parameter, the is keyword, and some type:

function isNumberOrString1(value: unknown): value is number | string {
    return ["number", "string"].includes(typeof value);
}
function logValueIfExists1(value: number | string | null | undefined) {
    if (isNumberOrString(value)) {
        // Type of value: number | string
        value?.toString();
        // Ok
    } else {
        // Type of value: null | undefined
        console.log("value does not exist:", value);
    }
}


interface Comedian {
    funny: boolean;
}
interface StandupComedian extends Comedian {
    routine: string;
}


function isStandupComedian(value: Comedian): value is StandupComedian {
    return 'routine' in value;
}

function workWithComedian(value: Comedian) {
    if (isStandupComedian(value)) {
        // Type of value: StandupComedian
        console.log(value.routine);
    }
}

function isLongString(input: string | undefined): input is string {
    return !!(input && input.length >= 7);
}
function workWithText(text: string | undefined) {
    if
        (isLongString(text)) {
        // Type of text: string
        console.log("Long text:",
            text.length);
    }
}