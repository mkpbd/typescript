"use strict";
let stringyBox = {
    inside: "abc",
};
let numberBox = {
    inside: 123,
};
let incorrectBox = {
    inside: 123,
    //inside: false,
    // Error: Type 'boolean' is not assignable to type 'number'.
};
function getLast(node) {
    return node.next ? getLast(node.next) : node.value;
}
// Inferred Value type argument: Date
let lastDate = getLast({
    value: new Date("09-13-1993"),
});
// Inferred Value type argument: string
let lastFruit = getLast({
    next: {
        value: "banana",
    },
    value: "apple",
});
// Inferred Value type argument: number
let lastMismatch = getLast({
    next: {
        value: 123,
    },
    value: 23,
    // value: false,
    // ~~~~~
    // Error: type 'boolean' is not assignable to type 'number'.
});
