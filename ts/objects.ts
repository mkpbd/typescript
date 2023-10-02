// Using objects
const person1 = ["Stefan", 40]; // name and age

const person2 = {
    name1: "Stefan",
    age: 40
}

const { name1, age } = person2;
console.log(name1); // Stefan
console.log(age); // 40

// const { anotherName1 : string = name1, anotherAge:number = age } = person2;

// Using arrays
const person3 = ["Stefan", 40]; // name and age
const [name2, age2] = person3;
console.log(name2); // Stefan
console.log(age2); // 40
const [anotherName, anotherAge] = person3;
console.log(anotherName); // Stefan
console.log(anotherAge); // 40



const person4: [string, number] = ["Stefan", 40];

// tuple using 
type Person5 = [name: string, age: number];

function hello(name: string, msg: string): void {
    // ...
}

//  Can also be written with tuple types.


function helloTuple(...args: [name: string, msg: string]): void {
    // ...
}

function h(a: string, b: string, c: string): void {
    //...
}
// equal to
function h1(a: string, b: string, ...r: [string]): void {
    //...
}
// equal to
function h2(a: string, ...r: [string, string]): void {
    //...
}
// equal to
function h3(...r: [string, string, string]): void {
    //...
}