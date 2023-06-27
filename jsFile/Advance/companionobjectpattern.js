"use strict";
// let Currency = {
//     DEFAULT: 'USD',
//     from(value: number, unit = Currency.DEFAULT): Currency {
//         return { unit, value }
//     }
// }
let amountDue = {
    unit: 'JPY',
    value: 83733.10
};
// let otherAmountDue = Currencies.from(330, 'EUR')s
//===== User-Defined Type Guards =========
function isString(a) {
    return typeof a === 'string';
}
// function isString(a: unknown): a is string {
//     return typeof a === 'string'
// }
isString('a'); // evaluates to true
isString([7]); // evaluates to false
function parseInput(input) {
    let formattedInput;
    if (isString(input)) {
        // formattedInput = input.toUpperCase() // Error TS2339: Property 'toUpperCase'
    } // does not exist on type 'number'.
}
