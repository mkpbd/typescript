"use strict";
//A generic class has a similar shape to a generic interface. Generic classes have a generic type parameter list in angle brackets (<>) following the name of the class.
class GenericNumber {
}
let myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
// ============== Generic Constraints =====================
function loggingIdentity(arg) {
    //console.log(arg.length);
    // Property 'length' does not exist on type 'Type'.
    return arg;
}
function loggingIdentity(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
// Using Type Parameters in Generic Constraints 
function getProperty(obj, key) {
    return obj[key];
}
let xxx = { a: 1, b: 2, c: 3, d: 4 };
//getProperty(x, "a");
//getProperty(x, "m");
//;=================== Using Class Types in Generics =======================
// When creating factories in TypeScript using generics, it is necessary to refer to class types by their constructor functions. For example,
function create(c) {
    return new c();
}
class BeeKeeper {
    constructor() {
        this.hasMask = true;
    }
}
class ZooKeeper {
    constructor() {
        this.nametag = "Mikle";
    }
}
class Animal {
    constructor() {
        this.numLegs = 4;
    }
}
class Bee extends Animal {
    constructor() {
        super(...arguments);
        this.numLegs = 6;
        this.keeper = new BeeKeeper();
    }
}
class Lion extends Animal {
    constructor() {
        super(...arguments);
        this.keeper = new ZooKeeper();
    }
}
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;
// ================================== Generic Parameter Defaults ============================
/**
 *
 *
 * Consider a function that creates a new HTMLElement. Calling the function with no arguments generates a Div; calling it with an element as the first argument generates an element of the argument’s type.
 * You can optionally pass a list of children as well. Previously you would have to define it as:
 *
 *
 */
// declare function create(): Container<HTMLDivElement, HTMLDivElement[]>;
//Cannot find name 'Container'.
//declare function create<T extends HTMLElement>(element: T): Container<T, T[]>;
////Cannot find name 'Container'.
//declare function create<T extends HTMLElement, U extends HTMLElement>(
// element: T,
// children: U[]
//): Container<T, U[]>;
//Cannot find name 'Container'.
