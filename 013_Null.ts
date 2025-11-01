//===  TypeScript Null & Undefined
// In TypeScript, `null` and `undefined` are two distinct types that represent the absence of a value. Understanding how to work with these types is crucial for effective TypeScript programming.

// 1. `undefined`
// The `undefined` type represents a variable that has been declared but not assigned a value.
let uninitializedVar: undefined;
console.log(uninitializedVar); // Output: undefined
// You can also explicitly assign `undefined` to a variable.
let explicitlyUndefined: number | undefined = undefined;
console.log(explicitlyUndefined); // Output: undefined

// 2. `null`
// The `null` type represents the intentional absence of any object value.
let nullVar: null = null;
console.log(nullVar); // Output: null
// You can also assign `null` to a variable of a different type using a union type.
let nullableString: string | null = null;
console.log(nullableString); // Output: null
// 3. Strict Null Checks
// TypeScript has a compiler option called `strictNullChecks` that, when enabled, makes `null` and `undefined` distinct types. This means that you cannot assign `null` or `undefined` to a variable of another type unless you explicitly include them in a union type.
let strictVar: string | null | undefined = null; // Valid
strictVar = undefined; // Also valid
// strictVar = 42; // Error: Type 'number' is not assignable to type 'string | null | undefined'
console.log(strictVar); // Output: undefined
// 4. Non-Null Assertion Operator
// TypeScript provides a non-null assertion operator (`!`) that can be used to assert that a value is not `null` or `undefined`.
function getLength(str: string | null | undefined): number {
    return str!.length; // Asserts that str is not null or undefined
}
console.log(getLength("Hello")); // Output: 5
// Note: Use the non-null assertion operator with caution, as it can lead to runtime errors if the value is actually `null` or `undefined`.
// 5. Optional Chaining
// TypeScript also supports optional chaining (`?.`), which allows you to safely access properties or call methods on potentially `null` or `undefined` values.
interface Person222 {
    name: string;
    address?: {
        street: string;
        city: string;
    };
}
let person333: Person222 = { name: "Alice" };
console.log(person333.address?.street); // Output: undefined
// In this example, the optional chaining operator prevents an error when trying to access the `street` property of an undefined `address`.
// Summary
// Understanding how to work with `null` and `undefined` in TypeScript is essential for writing robust and type-safe code. By leveraging union types, strict null checks, non-null assertions, and optional chaining, you can effectively manage the absence of values in your applications.
// Note: Make sure to enable "strict" mode in your tsconfig.json to fully leverage TypeScript's type-checking capabilities.

// tsconfig.json snippet to enable strict mode
/*
{
  "compilerOptions": {
    "strict": true
  }
}
*/
// Example usage of strict null checks
interface User2 {
  id: number;
  name: string;
  email: string;
}
type UserWithoutEmail2 = Omit<User2, "email">;
let userWithoutEmail2: UserWithoutEmail = { id: 1, name: "Alice" };

//===== Nullish Coalescing
// The nullish coalescing operator (`??`) is a logical operator that returns its right-hand side operand when its left-hand side operand is `null` or `undefined`, and otherwise returns its left-hand side operand.
let foo: string | null = null;
let bar: string = "default value";
let baz: string = foo ?? bar;
console.log(baz); // Output: "default value"

foo = "Hello, World!";
baz = foo ?? bar;
console.log(baz); // Output: "Hello, World!"
// This operator is particularly useful for providing default values when dealing with potentially `null` or `undefined` variables, without mistakenly treating other falsy values (like `0` or an empty string) as needing a default.  
// Example with numbers
let num: number | undefined = undefined;
let defaultNum: number = 42;
let resultNum: number = num ?? defaultNum;
console.log(resultNum); // Output: 42
// optional chaining with nullish coalescing
interface Config {
    host?: string;
    port?: number;
}
let config: Config = {};
let host: string = config.host ?? "localhost";
let port: number = config.port ?? 8080;
console.log(`Host: ${host}, Port: ${port}`); // Output: Host: localhost, Port: 8080
// In this example, if `config.host` or `config.port` are `undefined`, the default values "localhost" and 8080 are used instead.
// Summary
// The nullish coalescing operator is a powerful tool in TypeScript for handling `null` and `undefined` values, allowing developers to provide default values in a clear and concise manner.
// Note: Make sure to enable "strict" mode in your tsconfig.json to fully leverage TypeScript's type-checking capabilities.
// tsconfig.json snippet to enable strict mode
/*
{
  "compilerOptions": {
    "strict": true
    }
}
*/
// Keyof T
// The keyof T type operator takes an object type T and produces a string or numeric literal union of its keys.
type UserKeys3 = keyof User2; // Result: "id" | "name" | "email"
let key33: UserKeys = "name"; // Valid
// let invalidKey: UserKeys = "age"; // Error, 'age' is not a key of User2
// This is useful for creating types that depend on the keys of an object type.
// tsconfig.json snippet to enable strict mode
/*
{
  "compilerOptions": {
    "strict": true
  }
}
*/  

// === Null Assertion
function getStringLength(str: string | null): number {
    return str!.length; // Asserts that str is not null
}
console.log(getStringLength("Hello")); // Output: 5
// Note: Use the non-null assertion operator with caution, as it can lead to runtime errors if the value is actually `null` or `undefined`.
// Example usage of strict null checks
interface Person44 {
  name: string;
  age: number;
}
// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person: Person44, property: keyof Person44) {
  console.log(`Printing person property ${property}: "${person[property]}"`);
}
let person552 = { name: "Bob", age: 30 };
printPersonProperty(person552, "name");
printPersonProperty(person552, "age");
// printPersonProperty(person55, "address"); // Error: Argument of type '"address"' is not assignable to parameter of type 'keyof Person'.
// Output:
// Printing person property name: "Bob"
// Printing person property age: "30"