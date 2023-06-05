/**
 * 
 * ======================== Property Modifiers ===============================
Each property in an object type can specify a couple of things: the type, whether the property is optional, and whether the property can be written to.

Optional Properties
Much of the time, we’ll find ourselves dealing with objects that might have a property set. In those cases, 
we can mark those properties as optional by adding a question mark (?) to the end of their names.
 * 
 */

type Shape = {
    x: number,
    y: number,

}

interface PaintOptions {
    shape: Shape;
    xPos?: number;
    yPos?: number;
}

function paintShape(opts: PaintOptions) {
    // ...
}

function getShape() {

    let aa: PaintOptions;
    //return aa.shape;
}
const shape = getShape();
//   paintShape({ shape });
//   paintShape({ shape, xPos: 100 });
//   paintShape({ shape, yPos: 100 });
//   paintShape({ shape, xPos: 100, yPos: 100 });




interface SomeType {
    readonly prop: string;
}

function doSomething(obj: SomeType) {
    // We can read from 'obj.prop'.
    console.log(`prop has the value '${obj.prop}'.`);

    // But we can't re-assign it.
    // obj.prop = "hello";
    //Cannot assign to 'prop' because it is a read-only property.
}



/**
 * 
 * Using the readonly modifier doesn’t necessarily imply that a value is totally immutable - or in other words, that its internal contents can’t be changed. 
 * It just means the property itself can’t be re-written to.
 * 
 */



interface Home {
    readonly resident: { name: string; age: number };
}

function visitForBirthday(home: Home) {
    // We can read and update properties from 'home.resident'.
    console.log(`Happy birthday ${home.resident.name}!`);
    home.resident.age++;
}

function evict(home: Home) {
    // But we can't write to the 'resident' property itself on a 'Home'.

    //home.resident = {
    // Cannot assign to 'resident' because it is a read-only property.
    // name: "Victor the Evictor",
    //age: 42,
    // };


}





interface ReadonlyPerson {
    readonly name: string;
    readonly age: number;
}

let writablePerson: Person = {
    name: "Person McPersonface",
    age: 42,
};

// works
let readonlyPerson: ReadonlyPerson = writablePerson;

console.log(readonlyPerson.age); // prints '42'
writablePerson.age++;
console.log(readonlyPerson.age); // prints '43'



/*****
 * 
 * 
 * Index Signatures
 * Sometimes you don’t know all the names of a type’s properties ahead of time, but you do know the shape of the values.
 * In those cases you can use an index signature to describe the types of possible values, for example:
 * 
 */

function getStringArray() {

    return ['a', 'b', 'c', 'd', 'e', 'f'];
}

interface StringArray {
    [index: number]: string;
}

const myArray: StringArray = getStringArray();
const secondItem = myArray[1];



interface NumberDictionary {
    [index: string]: number;


    length: number; // ok
    //  name: string;  // problems
    //Property 'name' of type 'string' is not assignable to 'string' index type 'number'.
}


/**
 * 
 * However, properties of different types are acceptable if the index signature is a union of the property types:
 * 
 * 
 */

interface NumberOrStringDictionary {
    [index: string]: number | string;
    length: number; // ok, length is a number
    name: string; // ok, name is a string
}


// Finally, you can make index signatures readonly in order to prevent assignment to their indices:


interface ReadonlyStringArray {
    readonly [index: number]: string;
}

function getReadOnlyStringArray() {
    return ['abc'];
}

let myArrays: ReadonlyStringArray = getReadOnlyStringArray();
myArray[2] = "Mallory";
  //Index signature in type 'ReadonlyStringArray' only permits reading.



  /***
   * 
   * +++++++++++++++++++++++++++ Excess Property Checks +++++++++++++++++++++++++++++++++++++
   * 
   *   Where and how an object is assigned a type can make a difference in the type system. One of the key examples of this is in excess property checking, which validates the object more thoroughly when it is created and assigned to an object type during creation.
   * 
   */


  interface SquareConfig {
    color?: string;
    width?: number;
  }
   
  function createSquare(config: SquareConfig): { color: string; area: number } {
    return {
      color: config.color || "red",
      area: config.width ? config.width * config.width : 20,
    };
  }
   
//   let mySquare = createSquare({ colour: "red", width: 100 });   // get error 
  let mySquares = createSquare({ color: "red", width: 100 });

  /**
   * Getting around these checks is actually really simple. The easiest method is to just use a type assertion:
   * 
   * 
   */


  let mySquarese = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);



  interface SquareConfigs {
    color?: string;
    width?: number;
    [propName: string]: any;
  }

  let squareOptions = { colour: "red", width: 100 };
let mySquare = createSquare(squareOptions);


let squareOptionss = { colour: "red" };
let mySquaress = createSquare(squareOptions);
//Type '{ colour: string; }' has no properties in common with type 'SquareConfig'.




//============================================ Extending Types =====================================================


/**
 * 
 * It’s pretty common to have types that might be more specific versions of other types. For example,
 *  we might have a BasicAddress type that describes the fields necessary for sending letters and packages in the U.S.
 * 
 */

interface BasicAddress {
    name?: string;
    street: string;
    city: string;
    country: string;
    postalCode: string;
  }




  interface AddressWithUnit {
    name?: string;
    unit: string;
    street: string;
    city: string;
    country: string;
    postalCode: string;
  }



   
  interface AddressWithUnit extends BasicAddress {
    unit: string;
  }


  //===================== interfaces can also extend from multiple types. =======================

  interface Colorful {
    color: string;
  }
   
  interface Circle {
    radius: number;
  }
   
  interface ColorfulCircle extends Colorful, Circle {}
   
  const cc: ColorfulCircle = {
    color: "red",
    radius: 42,
  };


  //=========================== Intersection Types =========================

  /**
   * interfaces allowed us to build up new types from other types by extending them. 
   * TypeScript provides another construct called intersection types that is mainly used to combine existing object types.
   * An intersection type is defined using the & operator.
   */


   
  type ColorfulCircles = Colorful & Circle;


  //=============== ere, we’ve intersected Colorful and Circle to produce a new type that has all the members of Colorful and Circle. ===========

  function draw(circle: Colorful & Circle) {
    console.log(`Color was ${circle.color}`);
    console.log(`Radius was ${circle.radius}`);
  }


  // okay
draw({ color: "blue", radius: 42 });
 
// oops
// draw({ color: "red", raidus: 42 });


/**
 * 
 * 
 * 
 * =============================== Interfaces vs. Intersections =============================================
 * 
 * 
We just looked at two ways to combine types which are similar, but are actually subtly different. 
With interfaces, we could use an extends clause to extend from other types, and we were able to do something similar with intersections and name the result with a type alias.
 The principal difference between the two is how conflicts are handled, and that difference is typically one of the main reasons why you’d pick one over the other between an interface and a type alias of an intersection type.
 * 
 */