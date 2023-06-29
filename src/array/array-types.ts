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


