function hello(name: string, msg: string): void {
  // ...
}

//And you can be very flexible in defining it:
function h1(a: string, b: string, c: string): void {
  //...
}
// equal to
function h2(a: string, b: string, ...r: [string]): void {
  //...
}
// equal to
function h3(a: string, ...r: [string, string]): void {
  //...
}
// equal to
function h4(...r: [string, string, string]): void {
  //...
}

// type aliases functions are defined

type CallBackFunction = () => void;
// Types for the type system
function task(name: string, dependencies: string[]): void;
function task(name: string, callback: CallBackFunction): void;
function task(
  name: string,
  dependencies: string[],
  callback: CallBackFunction,
  param34?: number
): void;
// The actual implementation

function task(
  name: string,
  param2: string[] | CallBackFunction,
  param3?: CallBackFunction
): void {
  //...
}

// task(
//   "what",
//   () => {
//   console.log("Two callbacks?");
//   },
//   () => {
//   console.log("That's not supported, but the types say yes!");
//   }
//   );

function fn(input: number): number;
function fn(input: string): string;
function fn(input: number | string): number | string {
  if (typeof input === "number") {
    return "this also works";
  } else {
    return 1337;
  }
}
const typeSaysNumberButItsAString = fn(12);
const typeSaysStringButItsANumber = fn("Hello world");

type TaskFn = {
  (name: string, dependencies: string[]): void;
  (name: string, callback: CallBackFunction): void;
  (name: string, dependencies: string[], callback: CallBackFunction): void;
};

const author = {
  name: "Stefan",
  // function shorthand
  hi() {
    console.log(this.name);
  },
};
author.hi(); // prints 'Stefan'

const author1 = {
  name: "Stefan",
};
function hi3() {
  console.log('name: ' + name);
}
const pet = {
  name: "Finni",
  kind: "Cat",
};
hi3.apply(pet); // prints "Finni"
hi3.call(author); // prints "Stefan"
const boundHi = hi3.bind(author);
boundHi(); // prints "Stefan"
