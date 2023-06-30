function logOnCall(target: any, key: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    console.log("[logOnCall] I am decorating", target.constructor.name);
    descriptor.value = function (...args: unknown[]) {
        console.log(`[descriptor.value] Calling '${key}' with:`, ...args);
        return original.call(this, ...args);
    };
}

class Greeter1 {
    @logOnCall
    greet(message: string) {
        console.log(`[greet] Hello, ${message}!`);
    }
}
new Greeter1().greet("you");
// Output log:
// "[logOnCall] I am decorating", "Greeter"
// "[descriptor.value] Calling 'greet' with:", "you"
// "[greet] Hello, you!"




function first() {
    console.log("first(): factory evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("first(): called");
    };
}

function second() {
    console.log("second(): factory evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("second(): called");
    };
}

class ExampleClassDecorator {
    @first()
    @second()
    method() { }
}


// let decoratorRe = new ExampleClassDecorator();

function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

//========= Class Decorator =================================
@sealed
class BugReport {
    type = "report";
    title: string;

    constructor(t: string) {
        this.title = t;
    }
}

//================ Methods decorators =================================

function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}
class Greeter3 {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable(false)
    greet() {
        return "Hello, " + this.greeting;
    }
}

//================= Accessor Decorators 
function configurable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = value;
    };
}
class Point {
    private _x: number;
    private _y: number;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    @configurable(false)
    get x() {
        return this._x;
    }

    @configurable(false)
    get y() {
        return this._y;
    }
}

//==================== Property Decorators ==================

import "reflect-metadata";
const formatMetadataKey = Symbol("format");
function format(formatString: string) {
    //return Reflect.metadata(formatMetadataKey, formatString);
    return formatString.trim();
}
function getFormat(target: any, propertyKey: string) {
    //return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
    return target;
}

class Greeter5 {
    // @format("Hello, %s")
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        let formatString = getFormat(this, "greeting");
        return formatString.replace("%s", this.greeting);
    }
}