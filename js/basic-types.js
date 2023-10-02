"use strict";
// string 
let userName = 'mostofa kamal';
// number 
let userId = 10;
// boolean 
let isUser = false;
// undefined
let userValue = undefined;
// null 
let userIsNull = null;
// any 
let userAnyValue;
// unknown
let unknownUserValue = undefined;
// union 
let userUnionValue;
// never 
let neverValue;
// tuple
let tupleValue = ['kamal', 33, false];
function createPerson() {
    return {
        name: 'Student', age: 23, semester: 25, id: "XPA"
    };
}
function printPersion(person) {
    console.log(person.age + " " + person.name);
}
function studyForAnotherSemester(student) {
    student.semester++;
}
function isLongTimeStudent(student) {
    return student.age - student.semester / 2 > 30 && student.semester > 20;
}
const me = createPerson();
// all workers
printPersion(me);
studyForAnotherSemester(me);
isLongTimeStudent(me);
function printPerson1(person) {
    for (let key in person) {
        console.log(`${key}: ${person[key]}`);
    }
}
function printPerson(person) {
    for (let key in person) {
        console.log(`${key}: ${person[key]}`);
    }
}
function doSomething(value) {
    if (typeof value === "string") {
        // value: string
        console.log("It's a string", value.toUpperCase());
    }
    else if (typeof value === "number") {
        // value: number
        console.log("it's a number", value * 2);
    }
}
let obj; // Similar to Object
obj = 32;
obj = "Hello";
obj = true;
obj = () => { console.log("Hello"); };
//obj = undefined; // Error
//obj = null; // Error
obj = { name: "Stefan", age: 40 };
obj = [];
obj = /.*/;
let okObj = {
    toString() {
        return false;
    }
}; // OK
let obje1;
obje1 = () => { console.log("Hello"); };
obje1 = { name: "Stefan", age: 40 };
obje1 = [];
obje1 = /.*/;
