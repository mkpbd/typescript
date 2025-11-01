// TypeScript adds types and visibility modifiers to JavaScript classes.
class Person {
    // Public property (default)
    public name: string;
    // Private property
    private age1: number
    // Protected property
    protected gender: string;

    // Constructor to initialize properties
    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age1 = age;
        this.gender = gender;
    }
    // Public method
    public greet(): string {
        return `Hello, my name is ${this.name}.`;
    }
    // Private method
    private getAge(): number {
        return this.age1;
    }
    // Protected method
    protected getGender(): string {
        return this.gender;
    }

}

// Example usage
const person2 = new Person("Alice", 30, "Female");
console.log(person2.greet()); // Accessible
// console.log(person.getAge()); // Error: Property 'getAge' is private
// console.log(person.gender); // Error: Property 'gender' is protected
// console.log(person.getGender()); // Error: Property 'getGender' is protected

class Employee extends Person {
    private employeeId1: number;

    constructor(name: string, age: number, gender: string, employeeId: number) {
        super(name, age, gender);
        this.employeeId1 = employeeId;
    }
    public getAge1(): number {
        return 50; // Accessible through inheritance
    }
    public getEmployeeInfo(): string {
        return `Employee ID: ${this.employeeId}, Name: ${this.name}, Age: ${this.getAge1()}, Gender: ${this.getGender()}`;
    }
}
const employee1 = new Employee("Bob", 25, "Male", 12345);
console.log(employee.getEmployeeInfo()); // Accessible


// Readonly property
class OurCar {
    public readonly make: string;
    public readonly model: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }
}
const car2 = new OurCar("Toyota", "Corolla");
console.log(car2.make); // Accessible
// car2.make = "Honda"; // Error: Cannot assign to 'make' because it is a read-only property
console.log(car2.model); // Accessible
// car2.model = "Civic"; // Error: Cannot assign to 'model' because it is a read-only property
// Parameter properties
class Book {
    constructor(public title: string, public author: string, private isbn1 : string) {}
    public getIsbn(): string {
        return this.isbn1;
    }
}
const book1 = new Book("1984", "George Orwell", "123-4567890123");
console.log(book1.title); // Accessible
console.log(book1.author);


// Inheritance: Implements
// Interfaces (covered here) can be used to define the type a class must follow through the implements keyword.

interface Shape {
  getArea: () => number;
}

interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(protected readonly widths: number, protected readonly heights: number) {}

  public getArea(): number {
    return this.widths * this.heights;
  }
}

/**
 * A class can implement multiple interfaces by listing each one after implements, separated by a comma like so: class Rectangle implements Shape, Colored {
 */

interface Shape1 {
  getArea: () => number;
}

class Rectangle1 implements Shape1 {
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

class Square extends Rectangle1 {
  public constructor(width: number) {
    super(width, width);
  }

  // getArea gets inherited from Rectangle
}


// ================== Override =================
//When a class extends another class, it can replace the members of the parent class with the same name.

// Newer versions of TypeScript allow explicitly marking this with the override keyword.

class Rectangle2 implements Shape {
  // using protected for these members allows access from classes that extend from this class, such as Square
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }

  public toString(): string {
    return `Rectangle[width=${this.width}, height=${this.height}]`;
  }
}

class Square2 extends Rectangle2 {
  public constructor(width: number) {
    super(width, width);
  }

  // this toString replaces the toString from Rectangle
  public override toString(): string {
    return `Square[width=${this.width}]`;
  }
}


//=================== Abstract Classes ==================
// Abstract classes cannot be instantiated directly. They are meant to be extended by other classes.

abstract class Animal {
  public constructor(protected readonly name: string) {}

  public abstract makeSound(): string;
}   
class Dog extends Animal {
  public makeSound(): string {
    return "Woof!";
  }
}

const dog1 = new Dog("Buddy");
console.log(dog1.makeSound()); // Outputs: Woof!
// const animal1 = new Animal("Generic Animal"); // Error: Cannot create an instance of an abstract class.

abstract class Polygon {
  public abstract getArea(): number;

  public toString(): string {
    return `Polygon[area=${this.getArea()}]`;
  }
}

class Rectangle4 extends Polygon {
  public constructor(protected readonly width: number, protected readonly height: number) {
    super();
  }

  public getArea(): number {
    return this.width * this.height;
  }
}

//=================== Static Members ==================
// Static members belong to the class itself rather than to any specific instance of the class.
class MathUtils {
  public static readonly PI: number = 3.14159;
    public static calculateCircumference(radius: number): number {
    return 2 * MathUtils.PI * radius;
    }
}

console.log(MathUtils.PI);
console.log(MathUtils.calculateCircumference(5));
