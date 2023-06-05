/**
 * 
 * Class Members
 * 
 * Here’s the most basic class - an empty one:
 * 
 */

class Point { }


/**
 * 
 * This class isn’t very useful yet, so let’s start adding some members.
 * 
 * Fields
 * 
 * A field declaration creates a public writeable property on a class:
 * 
 * 
 * 
 */


class Points {
    x: number;
    y: number;
}

const pt = new Points();
pt.x = 0;
pt.y = 0;



/**
 * 
 * 
 * As with other locations, the type annotation is optional, but will be an implicit any if not specified.
 * Fields can also have initializers; these will run automatically when the class is instantiated:
 * 
 * 
 */

class Pointes {
    x = 0;
    y = 0;
}

const ptt = new Pointes();
// Prints 0, 0
console.log(`${ptt.x}, ${ptt.y}`);


class BadGreeter {
    name: string;
    //Property 'name' has no initializer and is not definitely assigned in the constructor.
}



class GoodGreeter {
    name: string;

    constructor() {
        this.name = "hello";
    }
}


class OKGreeter {
    // Not initialized, but no error
    name!: string;
}


/**
 * 
 * Fields may be prefixed with the readonly modifier. This prevents assignments to the field outside of the constructor.
 * 
 */

class Greeter {
    readonly name: string = "world";

    constructor(otherName?: string) {
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }

    err() {
        // this.name = "not ok";
        //Cannot assign to 'name' because it is a read-only property.
    }
}
const g = new Greeter();
//g.name = "also not ok";
//Cannot assign to 'name' because it is a read-only property.




/***
 * 
 * 
 * Constructors
 * Background Reading: Constructor (MDN)
 * Class constructors are very similar to functions. You can add parameters with type annotations, default values, and overloads:
 * 
 * 
 */

class Point1 {
    x: number;
    y: number;

    // Normal signature with defaults
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}


class Point2 {
    // Overloads
    constructor(x: number, y: string);
    constructor(s: string);
    constructor(xs: any, y?: any) {
        // TBD
    }
}


//Just as in JavaScript, if you have a base class, you’ll need to call super(); in your constructor body before using any this. members:

class Base {
    k = 4;
}

class Derived extends Base {
    constructor() {
        // Prints a wrong value in ES5; throws exception in ES6
        //console.log(this.k);
        ///'super' must be called before accessing 'this' in the constructor of a derived class.
        super();
    }
}


// ========================= Methods =========================================


class Point5 {
    x = 10;
    y = 10;

    scale(n: number): void {
        this.x *= n;
        this.y *= n;
    }
}




//================== Getters / Setters ==========================


class GetterSetter {
    _length = 0;
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
}




/**
 * 
 * 
 * TypeScript has some special inference rules for accessors:
 * If get exists but no set, the property is automatically readonly
 * If the type of the setter parameter is not specified, it is inferred from the return type of the getter
 * 
 */




class Thing {
    _size = 0;

    get size(): number {
        return this._size;
    }

    set size(value: string | number | boolean) {
        let num = Number(value);

        // Don't allow NaN, Infinity, etc

        if (!Number.isFinite(num)) {
            this._size = 0;
            return;
        }

        this._size = num;
    }
}



//======================= Index Signatures ===========================


class MyClass {
    [s: string]: boolean | ((s: string) => boolean);

    check(s: string) {
        return this[s] as boolean;
    }
}


//========================= implements  Clauses ======================


interface Pingable {
    ping(): void;
}

class Sonar implements Pingable {
    ping() {
        console.log("ping!");
    }
}

class Ball implements Pingable {
    //Class 'Ball' incorrectly implements interface 'Pingable'.
    // Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.

    // pong() {
    //   console.log("pong!");
    // }

    ping() {
        console.log("ping!");
    }

}



interface Checkable {
    check(name: string): boolean;
}

class NameChecker implements Checkable {

    // check(s)
    check(name: string) {
        //Parameter 's' implicitly has an 'any' type.
        // Notice no error here
        return s.toLowercse() === "ok";

        //any
    }
}



interface A {
    x: number;
    y?: number;
}
class C implements A {
    x = 0;
}
const ccc = new C();
//   ccc.y = 10;



//============================== extends Clauses ==============================================

class Animals {
    move() {
        console.log("Moving along!");
    }
}

class Dog extends Animals {
    woof(times: number) {
        for (let i = 0; i < times; i++) {
            console.log("woof!");
        }
    }
}

const d = new Dog();
// Base class method
d.move();
// Derived class method
d.woof(3);



//==================================== Overriding Methods =======================

class Bases {
    greet() {
      console.log("Hello, world!");
    }
  }
   
  class Derivedd extends Bases {
    greet(name?: string) {
      if (name === undefined) {
        super.greet();
      } else {
        console.log(`Hello, ${name.toUpperCase()}`);
      }
    }
  }
   
  const dc = new Derivedd();
  dc.greet();
  dc.greet("reader");


  //=================== Type-only Field Declarations ====================


  interface Animal {
    dateOfBirth: any;
  }
   
  interface Dog extends Animal {
    breed: any;
  }
   
  class AnimalHouse {
    resident: Animal;
    constructor(animal: Animal) {
      this.resident = animal;
    }
  }
   
  class DogHouse extends AnimalHouse {
    // Does not emit JavaScript code,
    // only ensures the types are correct
    declare resident: Dog;
    constructor(dog: Dog) {
      super(dog);
    }
  }


  //======================== Initialization Order =========================

  class Basese {
    name = "base";
    constructor() {
      console.log("My name is " + this.name);
    }
  }
   
  class Deriveded extends Base {
    name = "derived";
  }
   
  // Prints "base", not "derived"
  const ddc = new Deriveded();


  //============================ Inheriting Built-in Types ======================


  class MsgError extends Error {
    constructor(m: string) {
      super(m);
    }
    sayHello() {
      return "hello " + this.message;
    }
  }



  class MsgError1 extends Error {
    constructor(m: string) {
      super(m);
   
      // Set the prototype explicitly.
      Object.setPrototypeOf(this, MsgError.prototype);
    }
   
    sayHello() {
      return "hello " + this.message;
    }
  }



  //===================== Member Visibility ====================

  class Greete1 {
    public greet() {
      console.log("hi!");
    }
  }
  const g1 = new Greete1();
  g1.greet();



  class Base1 {
    private x = 0;
  }
  const bbcd = new Base1();


  class A {
    private x = 10;
   
    public sameAs(other: A) {
      // No error
      return other.x === this.x;
    }
  }


  class MySafe {
    private secretKey = 12345;
  }


  class MyClass1 {
    static x = 0;
    static printX() {
      console.log(MyClass1.x);
    }
  }
  console.log(MyClass1.x);
  MyClass1.printX();


  // satatic method also inherited 

  class Base3 {
    static getGreeting() {
      return "Hello world";
    }
  }
  class Derived3 extends Base3 {
    myGreeting = Derived3.getGreeting();
  }


  function loadLastInstances(){
    return [3,4,5,65];
  }

  class Foo {
    static #count = 0;
 
    get count() {
        return Foo.#count;
    }
 
    static {
        try {
            const lastInstances = loadLastInstances();
            Foo.#count += lastInstances.length;
        }
        catch {}
    }
}