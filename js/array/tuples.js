"use strict";
// Tuples
let yearAndWarrior;
yearAndWarrior = [530, "Tomyris"];
// year type: number
// warrior type: string
let [year, warrior] = Math.random() > 0.5 ? [340, "Archidamia"] : [1828, "Rani of Jhansi"];
const tupleThree = [false, 1583, "Nzinga"];
const tupleTwoExact = [tupleThree[0], tupleThree[1]];
function logPair(name, value) {
    console.log(`${name} has ${value}`);
}
const pairArray = ["Amage", 1];
const trios = [
    ["Amanitore", [1, true]],
    ["Æthelflæd", [2, false]],
    ["Ann E. Dunwoody", [3, false]],
];
function logTrio(name, value) {
    console.log(`${name} has ${value[0]} (${value[1]}`);
}
trios.forEach((trio) => logTrio(...trio));
// Ok
// Return type: (string | number)[]
function firstCharAndSize(input) {
    return [input[0], input.length];
}
// firstChar type: string | number
// size type: string | number
const [firstChar, size] = firstCharAndSize("Gudit");
const pairMutable = [1157, "Tomoe"];
pairMutable[0] = 1247;
// Ok
// Type: (string | number)[]
const unionArray = [1157, "Tomoe"];
// Type: readonly [1157, "Tomoe"]
const readonlyTuple = [1157, "Tomoe"];
// Return type: readonly [string, number]
function firstCharAndSizeAsConst(input) {
    return [input[0], input.length];
}
// firstChar type: string
// size type: number
const [firstChar1, size1] = firstCharAndSizeAsConst("Ching Shih");
