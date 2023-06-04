"use strict";
// string  Type Annotations on Variables
let firstName;
firstName = "mostofa kamal passa";
// number  Type Annotations on Variables
let integerNumber;
integerNumber = 40;
// integerNumber = '';
// boolean  Type Annotations on Variables
let booleans;
booleans = true;
booleans = false;
// booleans = 1;
// null  Type Annotations on Variables
let nullbles;
// nullbles = "abc"
// undefined Type Annotations on Variables
let undefinedbles;
undefinedbles = undefined;
// undefinedbles = '';
// symbole Type Annotations on Variables
let symbols;
symbols = Symbol();
// symbols = 'hello';
// Any   Type Annotations on Variables
let anything;
anything = "jamal";
anything = 55;
anything = null;
anything = [];
anything = Symbol();
anything = { name: 'a', age: 44 };
// we should avoid any type becuse we need a strongly type for our use
// ---------------- Array  Type Annotations on Variables  ---------------------
let stringArrayes;
stringArrayes = ["hello", "bangla", "desh"];
let numberArrayes;
numberArrayes = [4, 5, 6, 7, 8, 9];
let mixedArray;
mixedArray = ["hello", 1, 3, 4, 5, null, undefined, Symbol()];
//  ------------- Object Types -------------------
let pp;
pp = new Object({ name: 33, bb: "kamal" });
function greet(person) {
    return person;
}
let person; // decalre type with object name and type
person = { name: "kamal", age: 55 };
greet(person);
function greet1(persons) {
    return persons;
}
greet1(person);
function greet3(person) {
    return "Hello " + person.name;
}
