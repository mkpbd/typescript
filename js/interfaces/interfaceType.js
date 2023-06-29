"use strict";
let valueLater;
// Ok
valueLater = {
    born: 1935,
    name: "Sara Teasdale",
};
// valueLater = "Emily Dickinson";
// Error: Type 'string' is not assignable to 'Poet'.
valueLater = {
    // born: true,
    // Error: Type 'boolean' is not assignable to type 'number'.
    name: "Sappho",
    born: 123
};
// Ok
const ok = {
    author: "Rita Dove",
    pages: 80,
};
function read(page) {
    // Ok: reading the text property doesn't attempt to modify it
    console.log(page.text);
}
const pageIsh = {
    text: "Hello, world!",
};
const hasBoth11 = {
    property: () => "",
    method() {
        return ("");
    },
};
hasBoth11.property();
// Ok
hasBoth11.method();
// Type: (input: string) => number
const typedFunctionAlias = (input) => input.length;
// Ok
// Type: (input: string) => number
const typedCallSignature = (input) => input.length;
let hasCallCount;
function keepsTrackOfCalls() {
    keepsTrackOfCalls.count += 1;
    console.log(`I've been called ${keepsTrackOfCalls.count} times!`);
}
keepsTrackOfCalls.count = 0;
hasCallCount = keepsTrackOfCalls;
// Ok
function doesNotHaveCount() {
    console.log("No idea!");
}
const counts = {};
counts.apple = 0;
// Ok
counts.banana = 1;
const publishDates = {
    Frankenstein: new Date("1 January 1818"),
};
publishDates.Frankenstein;
// Type: Date
console.log(publishDates.Frankenstein.toString());
// Ok
publishDates.Beloved;
// Ok
const novels = {
    Outlander: 1991,
    Oroonoko: 1688,
};
