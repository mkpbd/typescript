// Type Annotations on Variables


let myName: string = "Alice";


// No type annotation needed -- 'myName' inferred as type 'string'
let myName1 = "Alice";


// Functions


/* Parameter Type Annotations
When you declare a function, you can add type annotations after each parameter to declare what types of parameters the function accepts. Parameter type annotations go after the parameter name:

*/
// Parameter type annotation
function greet5(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}


/**
 * 
 * 
 * Return Type Annotations
You can also add return type annotations. Return type annotations appear after the parameter list:

*/


function getFavoriteNumber(): number {
  return 26;
}



// Anonymous Functions

const names = ["Alice", "Bob", "Eve"];

// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});

// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase());
});


// ============================== Object Types ===========================


// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });


// Optional Properties
// Object types can also specify that some or all of their properties are optional. To do this, add a ? after the property name:

function printName(obj: { first: string; last?: string }) {
  // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });



function printNames(obj: { first: string; last?: string }) {
  // Error - might crash if 'obj.last' wasn't provided!
  console.log(obj?.last?.toUpperCase());
  // 'obj.last' is possibly 'undefined'.
  if (obj.last !== undefined) {
    // OK
    console.log(obj.last?.toUpperCase());
  }

  // A safe alternative using modern JavaScript syntax:
  console.log(obj.last?.toUpperCase());
}


//================================ Union Types ========================

/**
 * 
 * 
 * TypeScript’s type system allows you to build new types out of existing ones using a large variety of operators.
 *  Now that we know how to write a few types, it’s time to start combining them in interesting ways.
 * 
 */

function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");


//-----------------------  TypeScript knows that only a string value will have a typeof value "string": =====================

function printIds(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}

///================= Another example is to use a function like Array.isArray:=====================

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and "));
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
}


// Return type is inferred as number[] | string
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}


//=========================== Type Aliases ======================

/**
 * 
 * We’ve been using object types and union types by writing them directly in type annotations. 
 * This is convenient, but it’s common to want to use the same type more than once and refer to it by a single name.
 * 
 */


type Points = {
  x: number;
  y: number;
};
 
// Exactly the same as the earlier example
function printCoords(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoords({ x: 100, y: 100 });


type ID = number | string;

type UserInputSanitizedString = string;
 
function sanitizeInput(str: string): UserInputSanitizedString {
  return (str.toUpperCase());
}
 
// Create a sanitized input
let userInput = sanitizeInput("Hello bangaldesh");
 
// Can still be re-assigned with a string though
userInput = "new input";


/// ================================================= Interfaces ========================================================================

//===================== An interface declaration is another way to name an object type: ===============
interface Pointes {
  x: number;
  y: number;
}
 
function printCoorded(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoorded({ x: 100, y: 100 });


//============================ Interface ===================
// Extending an interface

interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}



// const bear = new getBear();
// bear.name;
// bear.honey;