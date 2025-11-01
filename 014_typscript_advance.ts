/*

Advanced TypeScript Types
TypeScript's advanced type system allows you to model complex type relationships with precision.

These features are particularly useful for building robust, maintainable applications with excellent type safety.

Key Advanced Type Features
Mapped Types: Transform properties of existing types
Conditional Types: Create types based on conditions
Template Literal Types: Build types using string templates
Utility Types: Built-in type helpers for common transformations
Recursive Types: Self-referential types for tree-like structures
Type Guards & Type Predicates: Runtime type checking
Type Inference: Advanced pattern matching with infer

*/

// =========================  Mapped Types
// Basic Mapped Type
// Convert all properties to boolean
type Flags<T> = {
  [K in keyof T]: boolean;
};

interface User22 {
  id: number;
  name: string;
  email: string;
}

type UserFlags = Flags<User22>;
// Equivalent to:
// {
//   id: boolean;
//   name: boolean;
//   email: boolean;
// }


/**
 * 
 ****************** Mapped Type Modifiers
 * 
 * Add or remove property modifiers like readonly and ? across all keys.
 */
// Make all properties optional
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type OptionalTodo = {
  [K in keyof Todo]?: Todo[K];
};

// Remove 'readonly' and '?' modifiers
type Concrete<T> = {
  -readonly [K in keyof T]-?: T[K];
};

// Add 'readonly' and 'required' to all properties
type ReadonlyRequired<T> = {
  +readonly [K in keyof T]-?: T[K];
};


/**
 * 
 * Key Remapping 
 * Rename or filter keys while mapping using as, string helpers, and conditional checks.
 */


// Add prefix to all property names
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

type UserGetters = Getters<User>;
// {
//   getId: () => number;
//   getName: () => string;
//   getEmail: () => string;
// }

// Filter out properties
type MethodsOnly<T> = {
  [K in keyof T as T[K] extends Function ? K : never]: T[K];
};


/*** 
 * 
 * Conditional Types
 * Conditional types allow you to define types that depend on a condition.
 * 
 * Basic Conditional Types
 * Select between types based on a condition checked at the type level.
 */

type IsString<T> = T extends string ? true : false;

type A = IsString<string>;    // true
type B = IsString<number>;    // false
type C = IsString<'hello'>;    // true
type D = IsString<string | number>; // boolean

// Extract array element type
type ArrayElement<T> = T extends (infer U)[] ? U : never;
type Numbers = ArrayElement<number[]>; // number

/**
 * 
 * Infer Keyword 
 * Capture a part of a type within a conditional type by introducing a new type variable with infer.
 * 
 * 
 */

// Get return type of a function
type ReturnType1<T> = T extends (...args: any[]) => infer R ? R : any;

// Get parameter types as a tuple
type Parameters1<T> = T extends (...args: infer P) => any ? P : never;

// Get constructor parameter types
type ConstructorParameters1<T extends new (...args: any) => any> =
  T extends new (...args: infer P) => any ? P : never;

// Get instance type from a constructor
type InstanceType1<T extends new (...args: any) => any> =
  T extends new (...args: any) => infer R ? R : any;

  /**
   * 
   * Distributed Conditional Types
   * 
   * Understand how conditionals distribute over unions versus when they are wrapped to prevent distribution.
   */

  // Without distribution
type ToArrayNonDist<T> = T extends any ? T[] : never;
type StrOrNumArr = ToArrayNonDist<string | number>; // (string | number)[]

// With distribution
type ToArray<T> = [T] extends [any] ? T[] : never;
type StrOrNumArr2 = ToArray<string | number>; // string[] | number[]

// Filter out non-string types
type FilterStrings<T> = T extends string ? T : never;
type Letters = FilterStrings<'a' | 'b' | 1 | 2 | 'c'>; // 'a' | 'b' | 'c'


/**
 * 
 * Template Literal Types
 * Template literal types allow you to build types using template literal syntax.
 * Basic Template Literal Types
 * Constrain strings to specific patterns using template literals and unions.
 */

type Greeting = `Hello, ${string}`;

const validGreeting: Greeting = 'Hello, World!';
// const invalidGreeting: Greeting = 'Hi there!'; // Error

// With unions
type Color = 'red' | 'green' | 'blue';
type Size = 'small' | 'medium' | 'large';

type Style = `${Color}-${Size}`;
// 'red-small' | 'red-medium' | 'red-large' |
// 'green-small' | 'green-medium' | 'green-large' |
// 'blue-small' | 'blue-medium' | 'blue-large'

/***
 * 
 * String Manipulation Types
 * 
 * Apply built-in helpers to transform string literal types (uppercasing, capitalizing, etc.).
 */

// Built-in string manipulation types
type T11 = Uppercase<'hello'>;  // 'HELLO'
type T21 = Lowercase<'WORLD'>;  // 'world'
type T31 = Capitalize<'typescript'>;  // 'Typescript'
type T41 = Uncapitalize<'TypeScript'>;  // 'typeScript'

// Create an event handler type
type EventType = 'click' | 'change' | 'keydown';
type EventHandler = `on${Capitalize<EventType>}`;
// 'onClick' | 'onChange' | 'onKeydown'


/**
 * 
 * Utility Types
 * TypeScript provides several built-in utility types for common type transformations.
 * Common Utility Types
 * Use built-ins like Partial, Pick, and Omit for common transformations.
 *  */

// Basic types
interface User23 {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

// Make all properties optional
type PartialUser22 = Partial<User>;

// make all properties required
type RequiredUser22 = Required<PartialUser>;

// make all properties read-only
type ReadonlyUser22 = Readonly<User>;

// pick specific properties
type UserPreview = Pick<User, 'id' | 'name'>;

// omit specific properties
type UserWithoutEmail22 = Omit<User, 'email'>;

// extract property types
type UserId = User['id']; // number
type UserKeys22 = keyof User; // 'id' | 'name' | 'email' | 'createdAt'

/***
 * 
 * Recursive Types
 * Recursive types are useful for modeling tree-like data structures where a type can reference itself.
 * Basic Recursive Type
 * Model self-referential structures like trees and nested JSON.
 * 
 * 
 */

// Simple binary tree
type BinaryTree<T> = {
  value: T;
  left?: BinaryTree<T>;
  right?: BinaryTree<T>;
};

// JSON-like data structure
type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | { [key: string]: JSONValue };

// Nested comments
type Comment22 = {
  id: number;
  content: string;
  replies: Comment[];
  createdAt: Date;
};

/***
 * Advanced Recursive Types
 * Express linked lists, directory trees, and recursive state machines.
 */
// Type for a linked list
type LinkedList<T> = {
  value: T;
  next: LinkedList<T> | null;
};

// Type for a directory structure
type File2 = {
  type: 'file';
  name: string;
  size: number;
};

type Directory = {
  type: 'directory';
  name: string;
  children: (File2 | Directory)[];
};

// Type for a state machine
type State = {
  value: string;
  transitions: {
    [event: string]: State;
  };
};

// Type for a recursive function
type RecursiveFunction<T> = (x: T | RecursiveFunction<T>) => void;