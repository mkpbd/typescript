// TypeScript Basic Generics
function identity<T>(arg: T): T {
    return arg;
}
let output1 = identity<string>("Hello, Generics!");
let output2 = identity<number>(42);
console.log(output1); // Output: Hello, Generics!
console.log(output2); // Output: 42

// creating  a generic createPair function
function createPair<K, V>(key: K, value: V): [K, V] {
    return [key, value];
}
let pair = createPair<string, number>("age", 30);
console.log(pair); // Output: ['age', 30]
// Generic Interface
interface GenericIdentityFn<T> {
    (arg: T): T;
}
let myIdentity: GenericIdentityFn<number> = identity;
console.log(myIdentity(100)); // Output: 100

// Generic Class
class Pair<K, V> {
    constructor(public key: K, public value: V) {}
}
let pair2 = new Pair<string, number>("age", 30);
console.log(pair2); // Output: Pair { key: 'age', value: 30 }
// Generic Constraints
interface Lengthwise {
    length: number;
}   
function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}
loggingIdentity("Hello, World!"); // Output: 13
loggingIdentity([1, 2, 3, 4]); // Output: 4
// loggingIdentity(42); // Error: Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.
// Generic Function with Default Type
function defaultGeneric<T = string>(arg: T): T {
    return arg;
}   
console.log(defaultGeneric("Default Type")); // Output: Default Type
console.log(defaultGeneric<number>(123)); // Output: 123
// Generic Utility Types
interface Person {
    name: string;
    age: number;
    location: string;
}
type PersonPartial = Partial<Person>;
let partialPerson: PersonPartial = { name: "Alice" };
console.log(partialPerson); // Output: { name: 'Alice' }
type PersonReadonly = Readonly<Person>;
// let readonlyPersons: PersonReadonly = { name: "Bob", age: 25, location: "NY" };
// readonlyPerson.age = 30; // Error: Cannot assign to 'age' because it is a read-only property.


// Generic Tuple Type
type GenericTuple<T, U> = [T, U];
let tuple: GenericTuple<string, number> = ["Age", 25];
console.log(tuple); // Output: ['Age', 25]
// Generic Function with Multiple Types
function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}
let merged = mergeObjects({ name: "Alice" }, { age: 30 });
console.log(merged); // Output: { name: 'Alice', age: 30 }
// Generic Function with Array Type
function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}
console.log(getFirstElement<number>([1, 2, 3])); // Output: 1
console.log(getFirstElement<string>(["a", "b", "c"])); // Output: 'a'
// Generic Function with keyof Constraint
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}
let person5 = { name: "Alice", age: 30 };
console.log(getProperty(person5, "name")); // Output: Alice
console.log(getProperty(person5, "age")); // Output: 30
// Generic Function with Default Type Parameter
function createArray<T = number>(length: number, value: T): T[] {
    return Array.from({ length }, () => value);
}
console.log(createArray(3, 5)); // Output: [5, 5, 5]
console.log(createArray<string>(2, "hello")); // Output: ['hello', 'hello']
// Generic Function with Rest Parameters
function concatenateArrays<T>(...arrays: T[][]): T[] {
  
    return arrays.reduce((acc, curr) => acc.concat(curr), []);
}
console.log(concatenateArrays<number>([1, 2], [3, 4], [5])); // Output: [1, 2, 3, 4, 5]
console.log(concatenateArrays<string>(["a", "b"], ["c"], ["d", "e"])); // Output: ['a', 'b', 'c', 'd', 'e']


// type alias for a generic function
type GenericFunction<T> = (arg: T) => T;
let echo: GenericFunction<string> = function(arg: string): string {
    return arg;
};
console.log(echo("Hello Type Alias")); // Output: Hello Type Alias
// Generic Namespace
namespace GenericUtilities {
    export function reverseArray<T>(arr: T[]): T[] {
        return arr.reverse();
    }
}
let reversed = GenericUtilities.reverseArray<number>([1, 2, 3, 4]);
console.log(reversed); // Output: [4, 3, 2, 1]
// Generic Function with Conditional Types
function wrapInArray<T>(value: T): T extends any[] ? T : T[] {
    if (Array.isArray(value)) {
        return value as any;
    } else {
        return [value] as any;
    }
}
console.log(wrapInArray(5)); // Output: [5]
console.log(wrapInArray([1, 2, 3])); // Output: [1, 2, 3]
// Generic Mapped Type
type ReadonlyProperties<T> = {
    readonly [P in keyof T]: T[P];
};  

// Generic extends with multiple constraints
function mergeWithLength<T extends object, U extends Lengthwise>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}   
let merged2 = mergeWithLength({ name: "Alice" }, { length: 10, value: "Hello" });
console.log(merged2); // Output: { name: 'Alice', length: 10, value: 'Hello' }
// Generic Function with Type Inference
function inferType<T>(arg: T): T {
    return arg;
}   
console.log(inferType("Inferred Type")); // Output: Inferred Type
console.log(inferType(12345)); // Output: 12345

// Generic Function with Symbol Type
function createSymbolKeyedObject<T>(key: symbol, value: T): { [key: symbol]: T } {
    return { [key]: value };
}
let sym = Symbol("mySymbol");
let symbolObj = createSymbolKeyedObject<number>(sym, 100);
console.log(symbolObj[sym]); // Output: 100
// Generic Function with bigint Type
function multiplyBigInt(a: bigint, b: bigint): bigint {
    return a * b;
}

// console.log(multiplyBigInt(10n, 20n)); // 200n

