//Function Type Expressions
// The simplest way to describe a function is with a function type expression. These types are syntactically similar to arrow functions:

function greeter(fn: (a: string) => void) {
    fn("Hello, World");
}

function printToConsole(s: string) {
    console.log(s);
}

greeter(printToConsole);



//Call Signatures
//In JavaScript, functions can have properties in addition to being callable. 
//However, the function type expression syntax doesn’t allow for declaring properties.
//If we want to describe something callable with properties, we can write a call signature in an object type:

type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
}

function myFunc(someArg: number) {
    return someArg > 3;
}
myFunc.description = "default description";

doSomething(myFunc);

//------------ Construct Signatures

type SomeConstructor = {
    // new (s: string): SomeObject;
    new(s: string): SomeConstructor;
};
function fn(ctor: SomeConstructor) {
    return new ctor("hello");
}





interface CallOrConstruct {
    new(s: string): Date;
    (n?: number): string;
}



//=========================== Generic Functions ===============================

/**
 * 
 * It’s common to write a function where the types of the input relate to the type of the output, or where the types of two inputs are related in some way. 
 * Let’s consider for a moment a function that returns the first element of an array:
 * 
 */

function firstElement(arr: any[]) {
    return arr[0];
}


/***
 * 
 * This function does its job, but unfortunately has the return type any.
 *  It’d be better if the function returned the type of the array element.
 * In TypeScript, generics are used when we want to describe a correspondence between two values. We do this by declaring a type parameter in the function signature:


 * 
 */
function firstElementGeneric<Type>(arr: Type[]): Type | undefined {
    return arr[0];
}


// s is of type 'string'
const s = firstElementGeneric(["a", "b", "c"]);
// n is of type 'number'
const n = firstElementGeneric([1, 2, 3]);
// u is of type undefined
const u = firstElementGeneric([]);

//============================= Inference =======================

// Note that we didn’t have to specify Type in this sample. The type was inferred - chosen automatically - by TypeScript.

// We can use multiple type parameters as well. For example, a standalone version of map would look like this:

function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
    return arr.map(func);
}

// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));




///  ===============  Constraints ==========================


/***
 * 
 * We’ve written some generic functions that can work on any kind of value. Sometimes we want to relate two values, but can only operate on a certain subset of values. In this case, we can use a constraint to limit the kinds of types that a type parameter can accept.

Let’s write a function that returns the longer of two values. To do this, we need a length property that’s a number. We constrain the type parameter to that type by writing an extends clause:
 * 
 */

function longest<type extends { length: number }>(a: type, b: type) {
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
//   const notOK = longest(10, 100);




//======================== Working with Constrained Values =================

function minimumLength<Type extends { length: number }>(
    obj: Type,
    minimum: number
): Type {
    if (obj.length >= minimum) {
        return obj;
    } else {
        return obj;
        //   return { length: minimum };
        // Type '{ length: number; }' is not assignable to type 'Type'.
        // '{ length: number; }' is assignable to the constraint of type 'Type', but 'Type' could be instantiated with a different subtype of constraint '{ length: number; }'.
    }
}


// 'arr' gets value { length: 6 }
const arr = minimumLength([1, 2, 3], 6);
// and crashes here because arrays have
// a 'slice' method, but not the returned object!
console.log(arr.slice(0));


//================ Specifying Type Arguments
// =============  TypeScript can usually infer the intended type arguments in a generic call, but not always. For example, let’s say you wrote a function to combine two arrays: 

function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
    return arr1.concat(arr2);
}

//  const arr = combine([1, 2, 3], ["hello"]); 

const arrs = combine([1, 2, 3], [4, 5, 6]);

// If you intended to do this, however, you could manually specify Type:
const arrcombine = combine<string | number>([1, 2, 3], ["hello"]);


//===========  Push Type Parameters Down ========================


function firstElement1<Type>(arr: Type[]) {
    return arr[0];
}

function firstElement2<Type extends any[]>(arr: Type) {
    return arr[0];
}

// a: number (good)
const a = firstElement1([1, 2, 3]);
// b: any (bad)
const b = firstElement2([1, 2, 3]);



///===================== Use Fewer Type Parameters  =======================

function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
    return arr.filter(func);
}

function filter2<Type, Func extends (arg: Type) => boolean>(
    arr: Type[],
    func: Func
): Type[] {
    return arr.filter(func);
}



//================== Type Parameters Should Appear Twice ===============

// ============== Sometimes we forget that a function might not need to be generic:

function greet<Str extends string>(s: Str) {
    console.log("Hello, " + s);
}

greet("world");



//==========  We could just as easily have written a simpler version:

function greet(s: string) {
    console.log("Hello, " + s);
}



//===================== Optional Parameters
// ========Functions in JavaScript often take a variable number of arguments. For example, the toFixed method of number takes an optional digit count:

function f(n: number) {
    console.log(n.toFixed()); // 0 arguments
    console.log(n.toFixed(3)); // 1 argument
}


//============ We can model this in TypeScript by marking the parameter as optional with ?:

function fnn(x?: number) {
    // ...
}
fnn(); // OK
fnn(10); // OK



declare function fvoid(x?: number): void;
// cut
// All OK
fvoid();
fvoid(10);
fvoid(undefined);


// ============== Optional Parameters in Callbacks

// Once you’ve learned about optional parameters and function type expressions, it’s very easy to make the following mistakes when writing functions that invoke callbacks:

function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}
//What people usually intend when writing index? as an optional parameter is that they want both of these calls to be legal:
myForEach([1, 2, 3], (a) => console.log(a));
myForEach([1, 2, 3], (a, i) => console.log(a, i));


// What this actually means is that callback might get invoked with one argument. In other words, the function definition says that the implementation might look like this:

function myForEache(arr: any[], callback: (arg: any, index?: number) => void) {
    for (let i = 0; i < arr.length; i++) {
        // I don't feel like providing the index today
        callback(arr[i]);
    }
}

function myForEaches(arr: any[], callback: (arg: any, index?: number) => void) {
    for (let i = 0; i < arr.length; i++) {
        // I don't feel like providing the index today
        callback(arr[i]);
    }
}



//======================= Function Overloads ==========================================

/***
 * 
 * 
 * Some JavaScript functions can be called in a variety of argument counts and types. For example, you might write a function to produce a Date that takes either a timestamp (one argument) or a month/day/year specification (three arguments).

In TypeScript, we can specify a function that can be called in different ways by writing overload signatures. To do this, write some number of function signatures (usually two or more), followed by the body of the function:
 * 
 */

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
// const d3 = makeDate(1, 3);



/***
 * 
 * ----------------------------------------Overload Signatures and the Implementation Signature------------------------
 * This is a common source of confusion. Often people will write code like this and not understand why there is an error:
 * 
 * Again, the signature used to write the function body can’t be “seen” from the outside.
 */

function fnnn(x: string): void;
function fnnn() {
    // ...
}





function fnnnnn(x: boolean): void;
// Argument type isn't right

// function fnnnnn(x: string): void;

//This overload signature is not compatible with its implementation signature.

function fnnnnn(x: boolean) { }



//================== Writing Good Overloads =====================

/***
 * 
 * Like generics, there are a few guidelines you should follow when using function overloads. Following these principles will make your function easier to call, easier to understand, and easier to implement.

Let’s consider a function that returns the length of a string or an array:
 * 
 * 
 */


function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
    return x.length;
}



//==================== Declaring  this  in a Function 


const User = {
    id: 123,

    admin: false,
    becomeAdmin: function () {
        this.admin = true;
    },
};



/**
 * 
 * TypeScript understands that the function user.becomeAdmin has a corresponding this which is the outer object user. this, heh, can be enough for a lot of cases, but there are a lot of cases where you need more control over what object this represents. The JavaScript specification states that you cannot have a parameter called this, and so TypeScript uses that syntax space to let you declare the type for this in the function body.
 * 
 * 
 */



interface DB {

    //filterUsers(filter: (this: User) => boolean): User[];
}

// const db = getDB();
//const admins = db.filterUsers(function (this: User) {
// return this.admin;
//});



//================= Other Types to Know About =================

// The inferred return type is void
function noop() {
    return;
}