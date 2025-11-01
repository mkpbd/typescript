// TypeScript Functions
// Functions in TypeScript can have types defined for their parameters and return values

// This helps ensure that functions are called with the correct types and return the expected types

function add(a: number, b: number): number {
    return a + b;
}

add(5, 10); // Valid
// add(5, '10'); // Error: Argument of type 'string' is not assignable to parameter of type 'number'
// void return type
function logMessage(message: string): void {
    console.log(message);
}
logMessage("Hello, TypeScript!"); // Output: Hello, TypeScript!

// Optional and Default Parameters
function greet(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}!`;
}
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet("Bob", "Hi")); // Output: Hi, Bob!
// Rest Parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
// Function Types
type MathOperation = (x: number, y: number) => number;
const multiply: MathOperation = (x, y) => x * y;
console.log(multiply(3, 4)); // Output: 12
const divide: MathOperation = (x, y) => x / y;
console.log(divide(10, 2)); // Output: 5

// Function Overloading
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
    if (typeof a === "string" && typeof b === "string") {
        return "a "+a + "b "+ b;
    } else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    throw new Error("Invalid arguments");
}
console.log(combine("Hello, ", "World!")); // Output: Hello, World!
console.log(combine(10, 20)); // Output: 30
// console.log(combine("Hello", 10)); // Error: No overload matches this call.
