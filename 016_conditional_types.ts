// Understanding Conditional Types in TypeScript

/**
 * Key Concepts
Type-level logic: Perform conditional checks on types
Type inference: Extract and manipulate types using infer
Composition: Combine with other TypeScript features
Utility types: Build powerful type utilities
 * 
 */

/**
 * 
 * Common Use Cases
Type-safe function overloading
API response type transformations
Complex type validations
Building reusable type utilities
Advanced type inference
 * 
 */

/***
 * 
 * Basic Conditional Type Syntax
Conditional types use the form T extends U ? X : Y, which means:

"if type T extends (or is assignable to) type U, use type X, otherwise use type Y".
 * 
 * 
 */

type IsStringType<T> = T extends string ? true : false;
type Test1 = IsStringType<string>; // true
type Test2 = IsStringType<number>; // false
type Test3 = IsStringType<"hello">; // true
type Test4 = IsStringType<string | number>; // boolean (true | false)

// We can use this with variables too
let a: IsStringType<string>; // a has type 'true'
let b: IsStringType<number>; // b has type 'false'

/**
 * 
 * Conditional Types with Unions
Distributive Conditional Types
Conditional types are particularly useful with union types, where they're automatically distributed over union members:
 * 
 * 
 */

type ToArrayType<T> = T extends any ? T[] : never;
type ArrayOfStringOrNumber = ToArrayType<string | number>; // string[] | number[]
type ArrayOfBooleanOrNull = ToArrayType<boolean | null>; // boolean[] | null[][]
// Example usage
let arr1: ArrayOfStringOrNumber; // can be string[] or number[]
let arr2: ArrayOfBooleanOrNull; // can be boolean[] or null[][]

/**
 * 
 * Type Inference with infer
Extracting Types from Complex Structures
The infer keyword allows you to declare a type variable within the condition part of a conditional type and then use it in the true branch of the condition:
 * 
 */

type ReturnTypeInfer<T> = T extends (...args: any[]) => infer R ? R : never;
type FuncType = (x: number, y: number) => string;
type ResultType = ReturnTypeInfer<FuncType>; // string
// Example usage
let returnValue: ResultType; // returnValue has type 'string'

// Examples
function greet() {
  return "Hello, world!";
}
function getNumber() {
  return 42;
}

type GreetReturnType = ReturnType<typeof greet>; // string
type NumberReturnType = ReturnType<typeof getNumber>; // number

// Extract element type from array
type ElementType<T> = T extends (infer U)[] ? U : never;
type NumberArrayElement = ElementType<number[]>; // number
type StringArrayElement = ElementType<string[]>; // string

/**
 * Built-in Conditional Types
    Standard Library Utilities
    TypeScript includes several built-in conditional types in its standard library:
 */
// Extract<T, U> - Extracts types from T that are assignable to U
type OnlyStrings = Extract<string | number | boolean, string>; // string

// Exclude<T, U> - Excludes types from T that are assignable to U
type NoStrings = Exclude<string | number | boolean, string>; // number | boolean

// NonNullable<T> - Removes null and undefined from T
type NotNull = NonNullable<string | null | undefined>; // string

// Parameters<T> - Extracts parameter types from a function type
type Params = Parameters<(a: string, b: number) => void>; // [string, number]

// ReturnType<T> - Extracts the return type from a function type
type Return = ReturnType<() => string>; // string


/**
 * Advanced Patterns and Techniques
Recursive Conditional Types
Conditional types can be used recursively to create complex type transformations:
 * 
 */

//Deeply unwrap Promise types
type UnwrapPromise<T> = T extends Promise<infer U> ? UnwrapPromise<U> : T;

// Examples
type A1 = UnwrapPromise<Promise<string>>; // string
type B1 = UnwrapPromise<Promise<Promise<number>>>; // number
type C1 = UnwrapPromise<boolean>; // boolean