// TypeScript Utility Types
// TypeScript comes with a large number of types that can help with some common type manipulation, usually referred to as utility types.

// This chapter covers the most popular utility types.
// For a complete list, see the official documentation: https://www.typescriptlang.org/docs/handbook/utility-types.html

// Partial<T>
// The Partial<T> type constructs a type with all properties of T set to optional.
interface User2 {
    id: number;
    name: string;
    email: string;
}
type PartialUser = Partial<User2>;
let user5: PartialUser = { name: "Alice" }; // Valid, as all properties are optional

// Required<T>
// The Required<T> type constructs a type with all properties of T set to required.
type RequiredUser = Required<PartialUser>;
let completeUser: RequiredUser = { id: 1, name: "Alice",  email: "alice@example.com" }; // Valid, all properties are required
// let incompleteUser: RequiredUser = { name: "Alice" }; // Error, 'id' and 'email' are missing

// Readonly<T>
// The Readonly<T> type constructs a type with all properties of T set to readonly.
type ReadonlyUser = Readonly<User2>;
let readonlyUser: ReadonlyUser = { id: 1, name: "Alice", email: "alice@example.com" };
// readonlyUser.email = "bob@example.com"; // Error, email is readonly
// Pick<T, K>
// The Pick<T, K> type constructs a type by picking a set of properties K from T.
type UserNameAndEmail = Pick<User2, "name" | "email">;
let userInfo: UserNameAndEmail = { name: "Alice", email: "alice@example.com" };
// Omit<T, K>
// The Omit<T, K> type constructs a type by omitting a set of properties K from T.
type UserWithoutEmail = Omit<User2, "email">;
let userWithoutEmail: UserWithoutEmail = { id: 1, name: "Alice" };
// Exclude<T, U>
// The Exclude<T, U> type constructs a type by excluding from T all union members that are assignable to U.
type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // Result: "c"
// Extract<T, U>
// The Extract<T, U> type constructs a type by extracting from T all union members that are assignable to U.
type T2 = Extract<"a" | "b" | "c", "a" | "b">; // Result: "a" | "b"
// NonNullable<T>
// The NonNullable<T> type constructs a type by excluding null and undefined from T.
type T3 = NonNullable<string | number | null | undefined>; // Result: string | number
// ReturnType<T>    
// The ReturnType<T> type constructs a type consisting of the return type of function T.
type Func = (a: number, b: number) => string;
type FuncReturnType = ReturnType<Func>; // Result: string
// InstanceType<T>
// The InstanceType<T> type constructs a type consisting of the instance type of a constructor function T.
type InstanceTypes<T> = T extends new (...args: any[]) => infer R ? R : never;

// record utility type
// The Record<K, T> type constructs an object type whose property keys are K and whose property values are T.
type PageInfo = {
    title: string;
    content: string;
    author: string;
    published: boolean;
};
type Page = Record<string, PageInfo>;
const pages: Page = {
    home: { title: "Home", content: "Welcome to the homepage.", author: "Admin", published: true },
    about: { title: "About", content: "About us page.", author: "Admin", published: false },
};
// This creates a type Page where each property is a string key and the value is of type PageInfo.
console.log(pages);
// This is useful for creating dictionaries or maps where the keys are known and the values share a common structure.
// Example usage of InstanceType
class Person6 {
    name: string
    constructor(name: string) {
        this.name = name;
    }
}
type PersonInstance = InstanceType<typeof Person6>;
let person33: PersonInstance = new Person6("John");

// This concludes the overview of some of the most commonly used TypeScript utility types.
// For more advanced usage and additional utility types, refer to the official TypeScript documentation.
// Note: Make sure to enable "strict" mode in your tsconfig.json to fully leverage TypeScript's type-checking capabilities.
// tsconfig.json snippet to enable strict mode


// Keyof T
// The keyof T type operator takes an object type T and produces a string or numeric literal union of its keys.
type UserKeys = keyof User2; // Result: "id" | "name" | "email"
let key: UserKeys = "name"; // Valid
// let invalidKey: UserKeys = "age"; // Error, 'age' is not a key of User2
// This is useful for creating types that depend on the keys of an object type.
// tsconfig.json snippet to enable strict mode

interface Person {
  name: string;
  age: number;
}
// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person: Person, property: keyof Person) {
  console.log(`Printing person property ${property}: "${person[property]}"`);
}
let person55 = {
  name: "Max",
  age: 27
};
printPersonProperty(person, "name"); // Printing person property name: "Max"