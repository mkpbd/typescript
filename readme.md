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
