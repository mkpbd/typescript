"use strict";
// printCollection is in JavaScript land! --> value
function printCollection(coll) {
    console.log(...coll);
}
printCollection([{ name: 'kamal passa', age: 55 }]);
// a value
const person6 = {
    name: "Stefan"
};
// declaration
class PersonClass {
    constructor(n) {
        this.name = n;
    }
}
// used as a value
const personClass = new PersonClass("Stefan");
function printPersons(coll) {
    //...
}
function Person({ name }) {
    // ...
}
class Person2 {
    constructor(n) {
        this.name = n;
    }
}
function printPerson(person) {
    console.log(person.name);
}
printPerson(new Person2("Stefan")); // ok
printPerson({ name: "Stefan" }); // also ok
function checkPerson(person) {
    return person instanceof Person2;
}
checkPerson(new Person2("Stefan")); // true
checkPerson({ name: "Stefan" }); // false
