// Working with Tuple Types

/*
You are using JavaScript arrays to organize your data. The order is
important, and so are the types at each position. But TypeScript’s type
inference makes it really cumbersome to work with.
*/

// const person: [string, number] = ["Stefan", 40];
// const person: [string, number] = ["Stefan"]; // Error

const personTuple : [namess:string, age:number] = ["Stefan", 40]; // name and age

const [namess, age] = personTuple;
console.log(name); // Stefan
console.log(age); // 40

const [anotherName, anotherAge] = personTuple;
console.log(anotherName); // Stefan
console.log(anotherAge); // 40