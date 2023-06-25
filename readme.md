## Getting Started Locally

To install the latest version of TypeScript globally, run the following command:

    npm i -g typescript

Now, you’ll be able to run TypeScript on the command line with the tsc (**T**ype**S**cript **C**ompiler) command. Try it with the **--version** flag to make sure it’s set up properly:

    tsc --version

## Running Locally

Now that TypeScript is installed, let’s have you set up a folder locally to run TypeScript on code.

Create a folder somewhere on your computer and run this command to create a new **tsconfig.json** configuration file

    tsc --init

Then, run **tsc** and provide it the name of that **index.ts** file:

**
    tsc** index.ts

You can run  **tsc --help**  to get a list of commonly used CLI flags.  [Full CLI Flags](https://www.typescriptlang.org/docs/handbook/compiler-options.html) viewable with **tsc --**   all.

### Pretty Mode

#### **Watch Mode**

tsc CLI is with its **-w/--watch** mode

#### TSConfig Files

Instead of always providing all file names and configuration options to tsc, most configuration options may be specified in a tsconfig.json (“TSConfig”) file in a directory.

You can also pass -p/--project to tsc with a path to a directory containing a tsconfig.json or any file to have tsc use that instead:

    **tsc -p path/to/tsconfig.json**

[tsc file config](https://www.typescriptlang.org/tsconfig)

    **tsc --init**

The tsc command line includes an --init command to create a new tsconfig.json file. That newly created TSConfig file will contain a link to the configuration docs as well as most of the allowed TypeScript
configuration options with one-line comments briefly describing their use.

Running this command:

    tsc --init

### Type Infar

TypeScript can infer, or figure out, that the singer variable is of type string. The most basic types in TypeScript correspond to the seven basic kinds of primitives in JavaScript:

**null
undefined
boolean // true or false
string // "", "Hi!", "abc123", …
number // 0, 2.1, -4, …

****bigint // 0n, 2n, -4n, …
symbol // Symbol(), Symbol("hi"), …**

For each of these values, TypeScript understands the type of the value to be one of the seven basic primitives:
**null; // null
undefined; // undefined
true; // boolean
"Louise"; // string
1337; // number
1337n; // bigint
Symbol("Franklin"); // symbol**

#### The Type System

Modern languages have all sorts of different type systems.

A set of rules that a typechecker uses to assign types to your program

```typescript
let a: number = 1 // a is a number
let b: string = 'hello' // b is a string
let c: boolean[] = [true, false] // c is an array of booleans
```

And if you want TypeScript to infer your types for you, just leave them off and let TypeScript get to work:

```typescript
let a = 1 // a is a number
let b = 'hello' // b is a string
let c = [true, false] // c is an array of booleans
```

Right away, you’ll notice how good TypeScript is at inferring types for you. If you leave off the annotations, the types are the same! Throughout this book, we will use

just cd to the root folder and type

    tsc

or

    tsc --outDir
