// TypeScript Type Aliases and Interfaces

// TypeScript allow Types to be defined separately  the variables that use them

// Aliases and interfaces  allows types to be easily  shared between  different variables / objects

// Type Aliases 

// type aliases  allow defining types with a custom name an alias

// Type Aliases can be used for primitive like string or more complex types such as objects and arrays


type  CarYear = number;
type CarType = string ;
type CarModel = string ;


type Car ={
    year: CarYear,
    carType: CarType,
    model: CarModel
}


const  carw : Car = {
    year : 199,
    carType : 'CarType',
    model : 'CarModel'
}


// Unioin Types with Type Aliases

type ID = string | number;
const userId : ID = 1234;
const productId : ID = "abcd-1234";
const orderId : ID = 5678;

// Intersection Types with Type Aliases

type Timestamps = {
    createdAt: Date;
    updatedAt: Date;
};
type User = {
    id: ID;
    name: string;
} & Timestamps;
const user: User = {
    id: "user-1",
    name: "John Doe",
    createdAt: new Date(),
    updatedAt: new Date(),
};

// Type Aliases for Function Types
type GreetFunction = (name: string) => string;

const greets: GreetFunction = (name) => {
    return `Hello, ${name}!`;
};
console.log(greets("Alice")); // Output: Hello, Alice!

// Type Aliases for Arrays
type StringArray = string[];
const fruits: StringArray = ["Apple", "Banana", "Cherry"];
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]


// interfaces

// interfaces  allow defining custom types for objects
// Interfaces are similar to type aliases, except they only apply to object types.

interface Person {
    name: string;
    age: number;
    greet(): string;
}
const person: Person = {
    name: "Alice",
    age: 30,    
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
};
console.log(person.greet()); // Output: Hello, my name is Alice and I am 30 years old.

// Extending Interfaces
interface Employee extends Person {
    employeeId: ID;
    department: string;
}
const employee: Employee = {
    name: "Bob",
    age: 25,
    employeeId: "emp-123",
    department: "Engineering",
    greet() {
        return `Hello, my name is ${this.name}, I work in ${this.department} department.`;
    }
};
console.log(employee.greet()); // Output: Hello, my name is Bob, I work in Engineering department.
// Optional Properties in Interfaces
interface Product {
    id: ID;
    name: string;
    description?: string; // Optional property
}
const product: Product = {
    id: "prod-456",
    name: "Laptop"
    // description is optional
};
console.log(product); // Output: { id: 'prod-456', name: 'Laptop' }
// Readonly Properties in Interfaces
interface Book {
    readonly isbn: string;
    title: string;
    author: string;
    publishedYear: number;
}
const book: Book = {
    isbn: "978-3-16-148410-0",
    title: "TypeScript Basics",
    author: "John Doe",
    publishedYear: 2020
};
console.log(book); // Output: { isbn: '978-3-16-148410-0', title: 'TypeScript Basics', author: 'John Doe', publishedYear: 2020 }
// book.isbn = "123-4-56-789012-3"; // Error: Cannot assign to 'isbn' because it is a read-only property.
// Conclusion
// Type Aliases and Interfaces are powerful features in TypeScript that help define custom types for variables and objects.
// They enhance code readability, maintainability, and type safety in TypeScript applications.


// Type vs Interface: Key Differences
// 1. Type Aliases can represent primitive types, union types, intersection types, and more, while Interfaces are primarily used for defining object shapes.
// 2. Interfaces can be extended using the extends keyword, allowing for easy inheritance of properties, while Type Aliases use intersection types (&) for similar functionality.
// 3. Interfaces can be merged if declared multiple times with the same name, while Type Aliases cannot be re-declared. 
// 4. Type Aliases can define function types and tuple types, while Interfaces are generally used for object types.



/**
 * Extending: Both can be extended, but interfaces support declaration merging.
Unions/Intersections: Only type aliases support union and intersection types.
Implements: Classes can implement either.
Recommendation: Use interface for objects, type for everything else.
Best Practices:

Use interface for defining object shapes and public APIs.
Use type for unions, intersections, and primitives.
Favor composition over inheritance for types.
Document your types and interfaces for clarity.
Common Pitfalls:

Using type when you need declaration merging (use interface).
Overcomplicating types—keep them simple and focused.
Forgetting to update types/interfaces as code evolves.

 * 
 */

interface Rectangle {
  height: number,
  width: number
}

interface ColoredRectangle extends Rectangle {
  color: string
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red"
};