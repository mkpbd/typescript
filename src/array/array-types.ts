let arrayOfNumbers: number[];
arrayOfNumbers = [4, 8, 15, 16, 23, 42];


//========================== Array and Function Types ==========================

// Type is a function that returns an array of strings
let createStrings: () => string[];
// Type is an array of functions that each return a string
let stringCreators: (() => string)[];


//====================== Union-Type Arrays ====================
// Type is either a string or an array of numbers
let stringOrArrayOfNumbers: string | number[];
// Type is an array of elements that are each either a number or a string
let arrayOfStringOrNumbers: (string | number)[];

//================== Evolving Arrays =============================


// Type: any[]
let values = [];
// Type: string[]
values.push("");
// Type: (number | string)[]
values[0] = 0;

//======== Multidimensional Arrays =========
let arrayOfArraysOfNumbers: number[][];
arrayOfArraysOfNumbers = [
    [1, 2, 3],
    [2, 4, 6],
    [3, 6, 9],
];

// Type: number[][]
let arrayOfArraysOfNumberss: number[][];

//================ Array Methods =================
const defenders = ["Clarenza", "Dina"];
const soldiersOrDates = ["Deborah Sampson", new Date(1782, 6, 3)];
// Type: Date | string
const soldierOrDate = soldiersOrDates[0];

function withElements(elements: string[]) {
    console.log(elements[9001].length);
    // No type error
}
withElements(["It's", "over"]);


//================== spreads operators =================
// Type: string[]
const soldiers = ["Harriet Tubman", "Joan of Arc", "Khutulun"];
// Type: number[]
const soldierAges = [90, 19, 45];
// Type: (string | number)[]
const conjoined = [...soldiers, ...soldierAges];

//========= Spreading Rest Parameters =========4
function logWarriors(greeting: string, ...names: string[]) {
    for (const name of names) {
        console.log(`${greeting}, ${name}!`);
    }
}
const warriors = ["Cathay Williams", "Lozen", "Nzinga"];
logWarriors("Hello", ...warriors);
const birthYears = [1844, 1840, 1583];
