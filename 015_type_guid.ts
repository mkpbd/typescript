/***
 * Understanding Type Guards in TypeScript
 * TypeScript Type Guards are powerful constructs that allow you to narrow down the type of a variable within a specific scope. 
 * They help TypeScript understand and enforce type safety by providing explicit checks that determine the specific type of a variable at runtime.
 */

/****
 * 
 * Why Use Type Guards?
 * Type Safety: Ensure operations are only performed on appropriate types
 * Code Clarity: Make type checking explicit and self-documenting
 * Better Tooling: Get accurate IntelliSense and code completion
 * Error Prevention: Catch type-related errors at compile time
 * Runtime Safety: Add an extra layer of type checking at runtime
 * Type Guard Patterns
 * typeof type guards
 * instanceof type guards
 * User-defined type guards with type predicates
 * Discriminated unions with literal types
 * in operator type guards
 * Type assertion functions
 * typeof Type Guards
 * The typeof operator is a built-in type guard that checks the type of a primitive value at runtime.
 * It's particularly useful for narrowing primitive types like strings, numbers, booleans, etc.
 * 
 * 
 * Basic Usage
 * Use typeof checks to narrow primitive unions inside conditional branches.
 *
 * 
 */
// Simple type guard with typeof
function formatValue(value: string | number): string {
  if (typeof value === 'string') {
    // TypeScript knows value is string here
    return value.trim().toUpperCase();
  } else {
    // TypeScript knows value is number here
    return value.toFixed(2);
  }
}

// Example usage
const result1 = formatValue('  hello  ');  // "HELLO"
const result2 = formatValue(42.1234);      // "42.12"
/***
 * 
 * 
 * instanceof Type Guards
The instanceof operator checks if an object is an instance of a specific class or constructor function.

It's useful for narrowing types with custom classes or built-in objects.

Class-based Type Guarding
Narrow unions of class instances by checking the constructor with instanceof.
 * 
 */
class Bird {
  fly() {
    console.log("Flying...");
   }
}

class Fish {
  swim() {
    console.log("Swimming...");
   }
}

function move(animal: Bird | Fish) {
  if (animal instanceof Bird) {
    // TypeScript knows animal is Bird here
    animal.fly();
  } else {
    // TypeScript knows animal is Fish here
    animal.swim();
  }
}
 //****** User-Defined Type Guards */
//****** User-Defined Type Guards */
function isBird(animal: Bird | Fish): animal is Bird {
  return (animal as Bird).fly !== undefined;
}

function move(animal: Bird | Fish) {
  if (isBird(animal)) {
    // TypeScript knows animal is Bird here
    animal.fly();
  } else {
    // TypeScript knows animal is Fish here
    animal.swim();
  }
}