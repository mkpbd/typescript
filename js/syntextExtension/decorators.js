"use strict";
/**
 *
 * Class declaration itself
 * Properties
 * Accessors
 * Methods
 * Parameters
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function logOnCall(target, key, descriptor) {
    const original = descriptor.value;
    console.log("[logOnCall] I am decorating", target.constructor.name);
    descriptor.value = function (...args) {
        console.log(`[descriptor.value] Calling '${key}' with:`, ...args);
        return original.call(this, ...args);
    };
}
class Greeter1 {
    greet(message) {
        console.log(`[greet] Hello, ${message}!`);
    }
}
__decorate([
    logOnCall
], Greeter1.prototype, "greet", null);
new Greeter1().greet("you");
// Output log:
// "[logOnCall] I am decorating", "Greeter"
// "[descriptor.value] Calling 'greet' with:", "you"
// "[greet] Hello, you!"
function first() {
    console.log("first(): factory evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("first(): called");
    };
}
function second() {
    console.log("second(): factory evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("second(): called");
    };
}
class ExampleClassDecorator {
    method() { }
}
__decorate([
    first(),
    second()
], ExampleClassDecorator.prototype, "method", null);
// let decoratorRe = new ExampleClassDecorator();
function sealed(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
//========= Class Decorator =================================
let BugReport = class BugReport {
    constructor(t) {
        this.type = "report";
        this.title = t;
    }
};
BugReport = __decorate([
    sealed
], BugReport);
//================ Methods decorators =================================
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Greeter3 {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
__decorate([
    enumerable(false)
], Greeter3.prototype, "greet", null);
//================= Accessor Decorators 
function configurable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.configurable = value;
    };
}
class Point {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
}
__decorate([
    configurable(false)
], Point.prototype, "x", null);
__decorate([
    configurable(false)
], Point.prototype, "y", null);
//==================== Property Decorators ==================
require("reflect-metadata");
const formatMetadataKey = Symbol("format");
function format(formatString) {
    //return Reflect.metadata(formatMetadataKey, formatString);
    return formatString.trim();
}
function getFormat(target, propertyKey) {
    //return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
    return target;
}
class Greeter5 {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        let formatString = getFormat(this, "greeting");
        return formatString.replace("%s", this.greeting);
    }
}
