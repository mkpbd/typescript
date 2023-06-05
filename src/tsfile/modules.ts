// javscript Moudles     imports and exports 


/****
 * 
 * 
 * There are three main things to consider when writing module-based code in TypeScript:
 * 
 * Syntax: What syntax do I want to use to import and export things?
 * 
 * Module Resolution: What is the relationship between module names (or paths) and files on disk?
 * 
 * Module Output Target: What should my emitted JavaScript module look like?
 * 
 * 
 * A file can declare a main export via export default:
 * 
 * 
 * 
 * 
 */

// @filename: hello.ts
export default function helloWorld() {
    console.log("Hello, world!");
}

// This is then imported via: 



// import helloWorld from "./hello.js";
helloWorld();


//====    In addition to the default export, you can have more than one export of variables and functions via the export by omitting default: ====

// @filename: maths.ts
export var pi = 3.14;
export let squareTwo = 1.41;
export const phi = 1.61;

export class RandomNumberGenerator { }

export function absolute(num: number) {
    if (num < 0) return num * -1;
    return num;
}


//================== These can be used in another file via the import syntax: ==============

//import { pi, phi, absolute } from "./maths.js";
 
console.log(pi);
const absPhi = absolute(phi);



/**
 * 
 * 
 * Additional Import Syntax
 * An import can be renamed using a format like import {old as new}:
 * import { pi as π } from "./maths.js";
 * console.log(π);
 * 
 * 
 */



/**
 * 
 * // @filename: maths.ts
export const pi = 3.14;
export default class RandomNumberGenerator {}
 
// @filename: app.ts
import RandomNumberGenerator, { pi as π } from "./maths.js";
 * 
 * 
 */


//==================== TypeScript Specific ES Module Syntax ================

// @filename: animal.ts
export type Cat = { breed: string; yearOfBirth: number };
 
export interface Dog {
  breeds: string[];
  yearOfBirth: number;
}
 
// @filename: app.ts
//import { Cat, Dog } from "./animal.js";
type Animals = Cat | Dog;



// @filename: animal.ts
export type Cat = { breed: string; yearOfBirth: number };
//'createCatName' cannot be used as a value because it was imported using 'import type'.
export type Dog = { breeds: string[]; yearOfBirth: number };
export const createCatName1 = () => "fluffy";
 
// @filename: valid.ts
//import type { Cat, Dog } from "./animal.js";
export type Animals2 = Cat | Dog;
 
// @filename: app.ts
//import type { createCatName } from "./animal.js";
const name = createCatName1();


//===================== CommonJS Syntax ================

function absolutes(num: number) {
    if (num < 0) return num * -1;
    return num;
  }
   
//   module.exports = {
//     pi: 3.14,
//     squareTwo: 1.41,
//     phi: 1.61,
//     absolute,
//   };

/**
 * 
 * 
 * Then these files can be imported via a require statement:

const maths = require("./maths");
 * 
 */