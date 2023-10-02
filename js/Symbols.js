"use strict";
const TITLE = Symbol('title');
const ACADEMIC_TITLE = Symbol('title');
const ARTICLE_TITLE = Symbol('title');
if (typeof ACADEMIC_TITLE === typeof ARTICLE_TITLE) {
    // This is never true
}
console.log(ACADEMIC_TITLE.valueOf()); // title
console.log(ACADEMIC_TITLE.toString()); // Symbol(title)
// A really bad logging framework
const LEVEL_INFO = Symbol('INFO');
const LEVEL_DEBUG = Symbol('DEBUG');
const LEVEL_WARN = Symbol('WARN');
const LEVEL_ERROR = Symbol('ERROR');
function log(msg, level) {
    switch (level) {
        case LEVEL_WARN:
            console.warn(msg);
            break;
        case LEVEL_ERROR:
            console.error(msg);
            break;
        case LEVEL_DEBUG:
            console.log(msg);
            debugger;
            break;
        case LEVEL_INFO:
            console.log(msg);
    }
}
const print1 = Symbol('print');
const user1 = {
    name: 'Stefan',
    age: 40,
    [print1]: function () {
        console.log(`${this.name} is ${this.age} years old`);
    }
};
JSON.stringify(user1); // { name: 'Stefan', age: 40 }
user1[print1](); // Stefan is 40 years old
/**
 *
 * There’s a global symbols registry that allows you to access tokens across your whole application.
 *
 *
 */
Symbol.for('print2'); // creates a global symbol
const user2 = {
    name: 'Stefan',
    age: 37,
    // uses the global symbol
    [Symbol.for('print2')]: function () {
        console.log(`${this.name} is ${this.age} years old`);
    }
};
const usedSymbolKeys = [];
function extendObject(obj, symbol, value) {
    //Oh, what symbol is this?
    const key = Symbol.keyFor(symbol);
    //Alright, let's better store this
    if (!usedSymbolKeys.includes(key)) {
        usedSymbolKeys.push(key);
    }
    obj[symbol] = value;
}
// now it's time to retreive them all
function printAllValues(obj) {
    usedSymbolKeys.forEach((key) => {
        console.log(obj[Symbol.for(key)]);
    });
}
// To get to the type of `unique symbol`s, you need to use the typeof operator.
const PROD = Symbol('Production mode');
const DEV = Symbol('Development mode');
function showWarning(msg, mode) {
    // ...
}
