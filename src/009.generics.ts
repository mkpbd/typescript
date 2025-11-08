// Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.

// Generics make it easier to write reusable code.KC

function CreatePair<T, U>(v1:T, v2:U):[T,U] {
    return [v1, v2];
}

let pair1 = CreatePair<number, string>(1, "apple");
let pair2 = CreatePair<boolean, number>(true, 42);
console.log(pair1); // Output: [1, "apple"]
console.log(pair2); // Output: [true, 42]
// Generic Classes

class GenericBox<T> {
    private _value: T;
    constructor(value: T) {
        this._value = value;
    }

    public getValue(): T {
        return this._value;
    }   
    public setValue(value: T): void {
        this._value = value;
    }
}
let stringBox = new GenericBox<string>("Hello, Generics!");
console.log(stringBox.getValue()); // Output: Hello, Generics!

let numberBox = new GenericBox<number>(100);
console.log(numberBox.getValue()); // Output: 100
// Generic Interfaces
interface KeyValuePair<K, V> {
    key: K;
    value: V;
}
let kvp: KeyValuePair<string, number> = { key: "age", value: 30 };
console.log(kvp); // Output: { key: "age", value: 30 }
// Generic Constraints
function getLength<T extends { length: number }>(arg: T): number {
    return arg.length;
}
console.log(getLength("Hello")); // Output: 5
console.log(getLength([1, 2, 3, 4])); // Output: 4
// console.log(getLength(123)); // Error: Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.
// Generic Type Aliases
type Wrapper<T> = {
    value: T;
    timestamp: Date;
};

let wrappedString: Wrapper<string> = {
    value: "Hello, World!",
    timestamp: new Date()
};
console.log(wrappedString); // Output: { value: "Hello, World!", timestamp: ... }
let wrappedNumber: Wrapper<number> = {
    value: 42,
    timestamp: new Date()
};
console.log(wrappedNumber); // Output: { value: 42, timestamp: ... }
// Using Multiple Generic Types
function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}
let merged = mergeObjects({ name: "Alice" }, { age: 25 });
console.log(merged); // Output: { name: "Alice", age: 25 }
// Generic Functions with Default Types
function identity<T = string>(arg: T): T {
    return arg; 
}
console.log(identity("Hello")); // Output: Hello
console.log(identity<number>(42)); // Output: 42
// Conclusion: Generics in TypeScript provide a powerful way to create reusable and flexible components while maintaining strong type safety.
