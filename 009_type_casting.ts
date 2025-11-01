// There are times when working with types where it's necessary to override the type of a variable, such as when incorrect types are provided by a library.

// Casting is the process of overriding a type.

// =============== type Casting  with "as" keyword ==================
let someValue: unknown = "This is a string";
let strLength: number = (someValue as string).length;
console.log(`String length: ${strLength}`); // Output: String length: 16
// In this example, someValue is of type unknown. We use the as keyword to cast it to a string, allowing us to access the length property.

// =============== type Casting with Angle Bracket Syntax ==================
let anotherValue: unknown = "Another string";
let anotherStrLength: number = (<string>anotherValue).length;
console.log(`Another string length: ${anotherStrLength}`); // Output: Another string length: 14
// Here, we use angle bracket syntax to cast anotherValue to a string.
// Note: When using JSX (e.g., in React), the as syntax is preferred to avoid conflicts with JSX syntax.

// =============== Type Assertions ==================
function getLength(value: string | number): number {
    if ((value as string).length !== undefined) {
        return (value as string).length;
    } else {
        return value.toString().length;
    }
}
console.log(getLength("Hello")); // Output: 5
console.log(getLength(12345)); // Output: 5
// In this function, we use type assertions to determine if the value is a string or a number and return its length accordingly.

// =============== Non-Null Assertion Operator ==================
function processValue(value: string | null) {
    console.log(`Value length: ${value!.length}`);
}
processValue("Non-null string"); // Output: Value length: 16
// processValue(null); // This would throw a runtime error
// The non-null assertion operator (!) tells TypeScript that we are sure value is not null at that point.
// Conclusion
// Type casting and assertions are powerful tools in TypeScript that allow developers to override types when necessary.
// However, they should be used judiciously to avoid runtime errors and maintain type safety.
// It's generally better to rely on TypeScript's type inference and type checking whenever possible.
// =============== Comparison with Type Aliases and Interfaces ==================
// Type Aliases
type ID1 = string | number;
type Person1    = {
    name: string;
    age: number;
    greet(): string;
};
