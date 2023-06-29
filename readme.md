Getting Started Locally

Install  Type Script globally  run the following command

    npm  i -g typescript

    tsc --version

**Running Locally**

    tsc --init

JavaScript  Types

1. null
2. undefined
3. boolean // true or false
4. string // "", "Hi!", "abc123", …
5. number // 0, 2.1, -4, …
6. bigint // 0n, 2n, -4n, …
7. symbol // Symbol(), Symbol("hi")

For each of these values, TypeScript understands the type of the value to be one of the seven basic primitives

1. null; // null
2. undefined; // undefined
3. true; // boolean
4. "Louise"; // string
5. 1337; // number
6. 1337n; // bigint
7. Symbol("Franklin"); // symbol

**Type Annotations**

```typescript
let  rocker;
// Type: any
rocker = "Joan Jett";
// Type: string
rocker.toUpperCase();
// Ok
rocker = 19.58;
// Type: number
rocker.toPrecision(1);
// Ok
rocker.toUpperCase();
// ~~~~~~~~~~~
// Error: 'toUpperCase' does not exist on type 'number'.
```

Union Types

Giving it an explicit string **|** null type annotation means TypeScript will allow it to be assigned values of type string:

```typescript
let thinker: string | null =null;
if(Math.random()>0.5)
{
thinker ="Susanne Langer";
// Ok
}
```

The order of a union type declaration does not matter. You can write **boolean | numbe**r or
**number | boolean** and TypeScript will treat both the exact same.

##### Union Properties

When a value is known to be a union type, TypeScript will only allow you to access member properties that exist on all possible types in the union. It will give you a type-checking error if you try to access a type that doesn't exist on all possible types.

```typescript
let thinker: string | number ;
if (Math.random() > 0.5) {
  thinker = "Susanne Langer";
  // Ok
}
thinker.toString();
// Ok
thinker.toUpperCase();
// ~~~~~~~~~~~
// Error: Property 'toUpperCase' does not exist on type 'string | number'.
// Property 'toUpperCase' does not exist on type 'number'.
thinker.toFixed();
// ~~~~~~~
// Error: Property 'toFixed' does not exist on type 'string | number'.
// Property 'toFixed' does not exist on type 'string'.
```

**Type Aliases**

Most union types you’ll see in code will generally only have two or three constituents. However, you may sometimes find a use for longer union types that are inconvenient to type out repeatedly.
Each of these variables can be one of four possible types

```typescript
let rawDataFirst: boolean | number | string | null | undefined;
let rawDataSecond: boolean | number | string | null | undefined;
let rawDataThird: boolean | number | string | null | undefined;

```

```typescript
type  RawData = boolean | number | string | null | undefined;
let rawDataFirst: RawData;
let rawDataSecond: RawData;
let rawDataThird: RawData;


```

### Objects

Object literals
     A set of keys and values
  Each with their own type

```typescript
const poet = {
  born: 1935,
  name: "Mary Oliver",
};
poet["born"];
// Type: number

let poetLater: {
  born: number;
  name: string;
};
// Ok
poetLater = {
  born: 1935,
  name: "Mary Oliver",
};

```

Most TypeScript projects prefer using the interface keyword to describe object types. Aliased object types and interfaces are almost identical: everything in this chapter applies to interfaces as well.

**Structural Typing**

TypeScript’s type system is structurally typed: meaning any value that happens to satisfy a type is allowed to be used as a value of that type.

#### Functions

Function arguments
      In one end, out the other
   As a return type

Parameter refers to a function’s declaration of what it expects to receive as an argument.
Argument refers to a value provided to a parameter in a function call. In the previous example, first and second are parameters, while strings such as "Dreams" are arguments

```typescript
function announceSong(song: string, singer?: string) {
  console.log(`Song: ${song}`);
  if (singer) {
    console.log(`Singer: ${singer}`);
  }
}
announceSong("Greensleeves");
// Ok
announceSong("Greensleeves", undefined);
// Ok
announceSong("Chandelier", "Sia");
// Ok

```

Rest Parameters

```typescript
function singAllTheSongs(singer: string, ...songs: string[]) {
  for (const song of songs) {
    console.log(`${song}, by ${singer}`);
  }
}
singAllTheSongs("Alicia Keys");
// Ok
singAllTheSongs("Lady Gaga", "Bad Romance", "Just Dance", "Poker Face");
// Ok
function singSongs(songs: string[]) {
    for (const song of songs) {
        console.log(`${song}`);
    }
    return;
    songs.length;
}


// Type: (songs: string[], index: number) => string | undefined
function getSongAt(songs: string[], index: number) {
    return;
    index < songs.length ? songs[index] : undefined;
  }
  

```

Explicit Return Types

```typescript
function singSongsRecursive(songs: string[], count = 0): number {
  return;
  songs.length ? singSongsRecursive(songs.slice(1), count + 1) : count;
}

```

For arrow functions (also known as lambdas), that falls just before the =>:

```typescript
const singSongsRecursive = (songs: string[], count = 0): number =>
  songs.length ? singSongsRecursive(songs.slice(1), count + 1) : count;

```

```typescript
function getSongRecordingDate(song: string): Date | undefined {
  switch (song) {
    case "Strange Fruit":
      return;
      new Date("April 20, 1939");
    // Ok
    case "Greensleeves":
      return;
      "unknown";
    // Error: Type 'string' is not assignable to type 'Date'.
    default:
      return;
      undefined;
    // Ok
  }
}

```

Function Types

JavaScript allows us to pass functions around as values. That means we need a way to declare the type of a parameter or variable meant to hold a function.
Function type syntax looks similar to an arrow function, but with a type instead of the body.

```typescript

let inputAndOutput: (songs: string[], count?: number) => number;


let nothingToGiven: () => string;

const songs = ["Juice", "Shake It Off", "What's Up"];
function runOnSongs(getSongAt: (index: number) => string) {
    for (let i = 0; i < songs.length; i += 1) {
        console.log(getSongAt(i));
    }
}
function getSongAts(index: number) {
    return `${songs[index]}`;
}
runOnSongs(getSongAts);
// Ok

```

Function types are frequently used to describe callback parameters (parameters meant to be called as functions).

**Function Type Parentheses**
Function types may be placed anywhere that another type would be used. That includes union types.

```typescript
// Type is a function that returns a union: string | undefined
let returnsStringOrUndefined: () => string | undefined;
// Type is either undefined or a function that returns a string
let maybeReturnsString: (() => string) | undefined;

```

**Parameter Type Inferences**
It would be cumbersome if we had to declare parameter types for every function we write, including inline functions used as parameters.
Fortunately, TypeScript can infer the types of parameters in a function provided to a location with a declared type. This singer variable is known to be a function

```typescript
let singer: (song: string) => string;
singer = function (song) {
  // Type of song: string
  return`Singing: ${song.toUpperCase()}!`;
  // Ok
};

```

**Function Type Aliases**

```typescript
type StringToNumber = (input: string) => number;
let stringToNumber: StringToNumber;
stringToNumber = (input) => input.length;
// Ok

```

```typescript
type NumberToString = (input: number) => string;
function usesNumberToString(numberToString: NumberToString) {
  console.log(`The string is: ${numberToString(1234)}`);
}
usesNumberToString((input) => `${input}! Hooray!`);
// Ok

```

**Function Overloads**
Some JavaScript functions are able to be called with drastically different sets of parameters that can’t be represented just by optional and/or rest parameters. These functions can be described with a TypeScript syntax called overload signatures: declaring different versions of the function’s name, parameters, and return types multiple times before one final implementation signature and the body of the function.

```typescript
function createDate(timestamp: number): Date;
function createDate(month: number, day: number, year: number): Date;
function createDate(monthOrTimestamp: number, day?: number, year?: number) {
  return day === undefined || year === undefined
    ? new Date(monthOrTimestamp)
    : new Date(year, monthOrTimestamp, day);
}
createDate(554356800);
// Ok
createDate(7, 27, 1987);
// Ok

```

    **WARNING**
Function overloads are generally used as a last resort for complex, difficult-to-describe function types. It’s generally better to keep functions simple and avoid using function overloads when possible.

Function Call-signature

```typescript
function format(data: string): string;
// Ok
function format(data: string, needle: string, haystack: string): string;
// Ok
function format(data: string, needle?: string, haystack?: string) {
    return needle && haystack ? data.replace(needle, haystack) : data;
}
```

## Array

Array Types

As with other variable declarations, variables meant to store arrays don’t need to have an initial value. The variables can start off undefined and receive an array value later.

```typescript
let arrayOfNumbers: number[];
arrayOfNumbers = [4, 8, 15, 16, 23, 42];
```

Array types can also be written in a syntax like Array `<number>` called class generics. Most developers prefer the simpler number[].

**Array and Function Types**

Array types are an example of a syntax container where function types may need parentheses to distinguish what’s in the function type or not. Parentheses may be used to indicate which part of an annotation is the function return or the surrounding array type.

```typescript
// Type is a function that returns an array of strings
let createStrings: () => string[];
// Type is an array of functions that each return a string
let stringCreators: (() => string)[];

```

**Union-Type Arrays**
You can use a union type to indicate that each element of an array can be one of multiple select types.
When using array types with unions, parentheses may need to be used to indicate which part of an annotation is the contents of the array or the surrounding union type. Using parentheses in array union types is important

```typescript
// Type is either a string or an array of numbers
let stringOrArrayOfNumbers: string | number[];
// Type is an array of elements that are each either a number or a string
let arrayOfStringOrNumbers: (string | number)[];

```

**Evolving Any Arrays**

```typescript
// Type: any[]
let values = [];
// Type: string[]
values.push("");
// Type: (number | string)[]
values[0] = 0;

```

**Multidimensional Arrays**

```typescript
let arrayOfArraysOfNumbers: number[][];
arrayOfArraysOfNumbers = [
  [1, 2, 3],
  [2, 4, 6],
  [3, 6, 9],
];

```

**Array Members**

TypeScript understands typical index-based access for retrieving members of an array to give back an element of that array's type.

```typescript
const defenders = ["Clarenza", "Dina"];
const soldiersOrDates = ["Deborah Sampson", new Date(1782, 6, 3)];
// Type: Date | string
const soldierOrDate = soldiersOrDates[0];


```

**Spreads**
Arrays can be joined together using the ... spread operator. TypeScript understands the result array will contain values that can be from either of the input arrays.
If the input arrays are the same type, the output array will be that same type. If two arrays of different types are spread together to create a new array, the new array will be understood to be a union type array of elements that are either of the two original types.

```typescript
// Type: string[]
const soldiers = ["Harriet Tubman", "Joan of Arc", "Khutulun"];
// Type: number[]
const soldierAges = [90, 19, 45];
// Type: (string | number)[]
const conjoined = [...soldiers, ...soldierAges];

```

**Spreading Rest operator ...**

TypeScript recognizes and will perform type checking on the JavaScript practice of ... spreading an array as a rest parameter. Arrays used as arguments for rest parameters must have the same array type as the rest parameter.

```typescript
function logWarriors(greeting: string, ...names: string[]) {
  for (const name of names) {
    console.log(`${greeting}, ${name}!`);
  }
}
const warriors = ["Cathay Williams", "Lozen", "Nzinga"];
logWarriors("Hello", ...warriors);
const birthYears = [1844, 1840, 1583];

```

**Tuples**

Although JavaScript arrays may be any size in theory, it is sometimes useful to use an array of a fixed size—also known as a tuple. Tuple arrays have a specific known type at each index that may be more specific than a union type of all possible members of the array.

The syntax to declare a tuple type looks like an array literal, but with types in place of element values. Here, the array yearAndWarrior is declared as being a tuple type with a number at index 0 and a string at index 1:

```typescript
let yearAndWarrior: [number, string];
yearAndWarrior = [530, "Tomyris"];
// Ok

```

```typescript
// year type: number
// warrior type: string
let [year, warrior] = Math.random() > 0.5 ? [340, "Archidamia"] : [1828, "Rani of Jhansi"];

const tupleThree: [boolean, number, string] = [false, 1583, "Nzinga"];
const tupleTwoExact: [boolean, number] = [tupleThree[0], tupleThree[1]];


```

```typescript
function logPair(name: string, value: number) {
  console.log(`${name} has ${value}`);
}
const pairArray = ["Amage", 1];

```

```typescript
function logTrio(name: string, value: [number, boolean]) {
  console.log(`${name} has ${value[0]} (${value[1]}`);
}
const trios: [string, [number, boolean]][] = [
  ["Amanitore", [1, true]],
  ["Æthelflæd", [2, false]],
  ["Ann E. Dunwoody", [3, false]],
];
trios.forEach((trio) => logTrio(...trio));
// Ok

```

```typescript
// Return type: (string | number)[]
function firstCharAndSize(input: string) {
  return;
  [input[0], input.length];
}
// firstChar type: string | number
// size type: string | number
const [firstChar, size] = firstCharAndSize("Gudit");

```

**Type Aliases Versus Interfaces**

```typescript
type Poet = {
  born: number;
  name: string;
};

```
