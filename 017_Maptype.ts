//TypeScript Mapped Types
/**
 * Mapped types in TypeScript allow you to create new types by transforming properties of existing types.
 * Mapped types = transform every property of a type
 * Common ones: Partial, Readonly, Pick, Omit, Record
 * 
 */

// Small example
// Small example
type Person5 = { name: string; age: number };
type PartialPerson = { [P in keyof Person5]?: Person5[P] };
type ReadonlyPerson7 = { readonly [P in keyof Person5]: Person5[P] };
// Example usage
const partialPerson1: PartialPerson = { name: "Alice" };
const readonlyPerson1: ReadonlyPerson7 = { name: "Bob", age: 30 };
// readonlyPerson.age = 31; // Error: Cannot assign to 'age' because it is a read-only property.

/**
 * 
 * Basic Mapped Type Syntax
Core Syntax
Mapped types use the syntax { [P in K]: T } where:

P is the property name being iterated
K is a union of property names to iterate over
T is the resulting type for each property
 * 
 */

type Readonly2<T> = { readonly [P in keyof T]: T[P] };
type Partial2<T> = { [P in keyof T]?: T[P] };
type Nullable<T> = { [P in keyof T]: T[P] | null };


// Define an object type
interface Person {
  name: string;
  age: number;
  email: string;
}

// Create a mapped type that makes all properties optional
type PartialPerson6 = {
  [P in keyof Person]?: Person[P];
};

// Usage
const partialPerson4: PartialPerson = {
  name: "John"
  // age and email are optional
};

// Create a mapped type that makes all properties readonly
type ReadonlyPerson5 = {
  readonly [P in keyof Person5]: Person5[P];
};

// Usage
const readonlyPerson51: ReadonlyPerson5 = {
  name: "Alice",
  age: 30,
 
};

// readonlyPerson.age = 31; // Error: Cannot assign to 'age' because it is a read-only property