"use strict";
/**
 * Use type aliases for types within your project’s boundary, and
 * use interfacesfor contracts that are meant to be consumed by others.
 */
// A function that sends this data to a back-end
function send(data) {
    console.log(data.entries()); // this compiles!
    // but crashes horrendously in runtime
}
// The actual implementation
function task(name, param2, param3) {
    //...
}
task('kamal', ['b', 'cv'], () => { console.log('hello we are ready'); });
function fn(input) {
    if (typeof input === "number") {
        return "this also works";
    }
    return 1337;
}
const typeSaysNumberButItsAString = fn(12);
const typeSaysStringButItsANumber = fn("Hello world");
const author = {
    name: "Stefan",
};
function hi() {
    // console.log(this.name);
}
const pet = {
    name: "Finni",
    kind: "Cat",
};
hi.apply(pet); // prints "Finni"
hi.call(author); // prints "Stefan"
const boundHi = hi.bind(author);
boundHi(); // prints "Stefan"
class Persons {
    constructor(names) {
        this.names = names;
    }
    hi() {
        console.log(this.names);
    }
    hi_timeout() {
        let self = this;
        setTimeout(function () {
            console.log(self.names);
        }, 0);
    }
    hi_timeout_arrow() {
        setTimeout(() => {
            console.log(this.names);
        }, 0);
    }
}
const persons = new Persons("Stefan");
persons.hi(); // prints "Stefan"
persons.hi_timeout(); // prints "undefined"
persons.hi_timeout_arrow(); // prints "Stefan"
