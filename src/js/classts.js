"use strict";
/**
 *
 * Class Members
 *
 * Here’s the most basic class - an empty one:
 *
 */
class Point {
}
/**
 *
 * This class isn’t very useful yet, so let’s start adding some members.
 *
 * Fields
 *
 * A field declaration creates a public writeable property on a class:
 *
 *
 *
 */
class Points {
}
const pt = new Points();
pt.x = 0;
pt.y = 0;
/**
 *
 *
 * As with other locations, the type annotation is optional, but will be an implicit any if not specified.
 * Fields can also have initializers; these will run automatically when the class is instantiated:
 *
 *
 */
class Pointes {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
const ptt = new Pointes();
// Prints 0, 0
console.log(`${ptt.x}, ${ptt.y}`);
class BadGreeter {
}
class GoodGreeter {
    constructor() {
        this.name = "hello";
    }
}
class OKGreeter {
}
/**
 *
 * Fields may be prefixed with the readonly modifier. This prevents assignments to the field outside of the constructor.
 *
 */
class Greeter {
    constructor(otherName) {
        this.name = "world";
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }
    err() {
        // this.name = "not ok";
        //Cannot assign to 'name' because it is a read-only property.
    }
}
const g = new Greeter();
//g.name = "also not ok";
//Cannot assign to 'name' because it is a read-only property.
/***
 *
 *
 * Constructors
 * Background Reading: Constructor (MDN)
 * Class constructors are very similar to functions. You can add parameters with type annotations, default values, and overloads:
 *
 *
 */
class Point1 {
    // Normal signature with defaults
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}
class Point2 {
    constructor(xs, y) {
        // TBD
    }
}
//Just as in JavaScript, if you have a base class, you’ll need to call super(); in your constructor body before using any this. members:
class Base {
    constructor() {
        this.k = 4;
    }
}
class Derived extends Base {
    constructor() {
        // Prints a wrong value in ES5; throws exception in ES6
        //console.log(this.k);
        ///'super' must be called before accessing 'this' in the constructor of a derived class.
        super();
    }
}
// ========================= Methods =========================================
class Point5 {
    constructor() {
        this.x = 10;
        this.y = 10;
    }
    scale(n) {
        this.x *= n;
        this.y *= n;
    }
}
//================== Getters / Setters ==========================
class GetterSetter {
    constructor() {
        this._length = 0;
    }
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
}
/**
 *
 *
 * TypeScript has some special inference rules for accessors:
 * If get exists but no set, the property is automatically readonly
 * If the type of the setter parameter is not specified, it is inferred from the return type of the getter
 *
 */
class Thing {
    constructor() {
        this._size = 0;
    }
    get size() {
        return this._size;
    }
    set size(value) {
        let num = Number(value);
        // Don't allow NaN, Infinity, etc
        if (!Number.isFinite(num)) {
            this._size = 0;
            return;
        }
        this._size = num;
    }
}
//======================= Index Signatures ===========================
class MyClass {
    check(s) {
        return this[s];
    }
}
class Sonar {
    ping() {
        console.log("ping!");
    }
}
class Ball {
    //Class 'Ball' incorrectly implements interface 'Pingable'.
    // Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.
    // pong() {
    //   console.log("pong!");
    // }
    ping() {
        console.log("ping!");
    }
}
class NameChecker {
    // check(s)
    check(name) {
        //Parameter 's' implicitly has an 'any' type.
        // Notice no error here
        return s.toLowercse() === "ok";
        //any
    }
}
class C {
    constructor() {
        this.x = 0;
    }
}
const ccc = new C();
//   ccc.y = 10;
//============================== extends Clauses ==============================================
class Animals {
    move() {
        console.log("Moving along!");
    }
}
class Dog extends Animals {
    woof(times) {
        for (let i = 0; i < times; i++) {
            console.log("woof!");
        }
    }
}
const d = new Dog();
// Base class method
d.move();
// Derived class method
d.woof(3);
//==================================== Overriding Methods =======================
class Bases {
    greet() {
        console.log("Hello, world!");
    }
}
class Derivedd extends Bases {
    greet(name) {
        if (name === undefined) {
            super.greet();
        }
        else {
            console.log(`Hello, ${name.toUpperCase()}`);
        }
    }
}
const dc = new Derivedd();
dc.greet();
dc.greet("reader");
class AnimalHouse {
    constructor(animal) {
        this.resident = animal;
    }
}
class DogHouse extends AnimalHouse {
    constructor(dog) {
        super(dog);
    }
}
//======================== Initialization Order =========================
class Basese {
    constructor() {
        this.name = "base";
        console.log("My name is " + this.name);
    }
}
class Deriveded extends Base {
    constructor() {
        super(...arguments);
        this.name = "derived";
    }
}
// Prints "base", not "derived"
const ddc = new Deriveded();
//============================ Inheriting Built-in Types ======================
class MsgError extends Error {
    constructor(m) {
        super(m);
    }
    sayHello() {
        return "hello " + this.message;
    }
}
class MsgError1 extends Error {
    constructor(m) {
        super(m);
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, MsgError.prototype);
    }
    sayHello() {
        return "hello " + this.message;
    }
}
//===================== Member Visibility ====================
class Greete1 {
    greet() {
        console.log("hi!");
    }
}
const g1 = new Greete1();
g1.greet();
