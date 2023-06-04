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
    new (s: string) : SomeConstructor;
  };
  function fn(ctor: SomeConstructor) {
    return new ctor("hello");
  }





  interface CallOrConstruct {
    new (s: string): Date;
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