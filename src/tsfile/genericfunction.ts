/**
 * 
 * Generic Functions
 * 
 * It’s common to write a function where the types of the input relate to the type of the output, or where the types of two inputs are related in some way. 
 * Let’s consider for a moment a function that returns the first element of an array:
 * 
 * 
 */

// no generic function 
function firstElement(arr: any[]) {
    return arr[0];
}


// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n = firstElement([1, 2, 3]);
// u is of type undefined
const u = firstElement([]);



// generic function 

function firstElementGeneric<Type>(arr: Type[]): Type | undefined {
    return arr[0];
}


const ss = firstElementGeneric<string>(["hello", "one"]);
const nn = firstElementGeneric<number>([22, 33]);
const bb = firstElementGeneric<boolean>([true, true, false]);
const ob = firstElementGeneric<object>([new Object(), new Object()]);



/**
 * 
 * ===================== Inference ==========================
 * 
 * Note that we didn’t have to specify Type in this sample. 
 * The type was inferred - chosen automatically - by TypeScript. 
 * We can use multiple type parameters as well. For example, a standalone version of map would look like this:
 * 
 * 
 * 
 * 
 */

function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
    return arr.map(func);
}

// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));


//=================== Constraints= =========================

function longest<Type extends { length: number }>(a: Type, b: Type) {
    if (a.length >= b.length) {
        return a;
    } else {
        return b;
    }
}

// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);
// longerString is of type 'alice' | 'bob'
const longerString = longest("alice", "bob");
// Error! Numbers don't have a 'length' property
//const notOK = longest(10, 100);


//================= Working with Constrained Values ===================


function minimumLength<Type extends { length: number }>(
    obj: Type,
    minimum: number
): Type {
    if (obj.length >= minimum) {
        return obj;
    } else {

        return obj;
        //return { length: minimum };
        //Type '{ length: number; }' is not assignable to type 'Type'.
        // '{ length: number; }' is assignable to the constraint of type 'Type', but 'Type' could be instantiated with a different subtype of constraint '{ length: number; }'.
    }
}



//==================== Specifying Type Arguments ====================

function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
    return arr1.concat(arr2);
}

//   const arr = combine([1, 2, 3], ["hello"]);
const arr = combine([1, 2, 3], [33, 44]);


const arre = combine<string | number>([1, 2, 3], ["hello"]);

/** Push Type Parameters Down 
 * 
 * Here are two ways of writing a function that appear similar:
 */

function firstElement1<Type>(arr: Type[]) {
    return arr[0];
}

function firstElement2<Type extends any[]>(arr: Type) {
    return arr[0];
}

// a: number (good)
const ab = firstElement1([1, 2, 3]);
// b: any (bad)
const bbc = firstElement2([1, 2, 3]);


//=============== Use Fewer Type Parameters ====================

// Here’s another pair of similar functions:

function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
    return arr.filter(func);
}

function filter2<Type, Func extends (arg: Type) => boolean>(
    arr: Type[],
    func: Func
): Type[] {
    return arr.filter(func);
}



// Type Parameters Should Appear Twice 

// Sometimes we forget that a function might not need to be generic: 

function greet<Str extends string>(s: Str) {
    console.log("Hello, " + s);
  }
   
  greet("world");
  
// We could just as easily have written a simpler version:
  function greet(s: string) {
    console.log("Hello, " + s);
  }


  // Optional Parameters 

  // Functions in JavaScript often take a variable number of arguments. For example, the toFixed method of number takes an optional digit count:

  function f(n: number) {
    console.log(n.toFixed()); // 0 arguments
    console.log(n.toFixed(3)); // 1 argument
  }

  // We can model this in TypeScript by marking the parameter as optional with ?:


  function ff(x?: number) {
    // ...
  }
  ff(); // OK
  ff(10); // OK


  /**
   * 
   * Now in the body of f, x will have type number because any undefined argument will be replaced with 10. 
   * Note that when a parameter is optional, callers can always pass undefined, as this simply simulates a “missing” argument:
   * 
   * 
   */

  declare function fff(x?: number): void;
// cut
// All OK
fff();
fff(10);
fff(undefined);


//========= Optional Parameters in Callbacks ===========

function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i);
    }
  }

  myForEach([1, 2, 3], (a) => console.log(a));
myForEach([1, 2, 3], (a, i) => console.log(a, i));



function myForEaches(arr: any[], callback: (arg: any, index?: number) => void) {
    for (let i = 0; i < arr.length; i++) {
      // I don't feel like providing the index today
      callback(arr[i]);
    }
  }


  //==================== Function Overloads =========================

  function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
// const d3 = makeDate(1, 3); // get error