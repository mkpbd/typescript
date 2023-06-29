//Type Aliases Versus Interfaces 
type Poets = {
    born: number;
    name: string;
};
interface Poet2 {
    born: number;
    name: string;
}


let valueLater: Poet2;
// Ok
valueLater = {
    born: 1935,
    name: "Sara Teasdale",
};
// valueLater = "Emily Dickinson";
// Error: Type 'string' is not assignable to 'Poet'.
valueLater = {
    // born: true,
    // Error: Type 'boolean' is not assignable to type 'number'.
    name: "Sappho",
    born: 123
};

/**
 * 
 * Because interfaces and type aliases behave so similarly, the following types of properties introduced in this chapter are all also usable with aliased object types.
 * 
 */

//=========== Optional Properties =============
interface Book {
    author?: string;
    pages: number;
}
// Ok
const ok: Book = {
    author: "Rita Dove",
    pages: 80,
};

interface Page {
    readonly text: string;
}
function read(page: Page) {
    // Ok: reading the text property doesn't attempt to modify it
    console.log(page.text);
}

const pageIsh = {
    text: "Hello, world!",
};

// function and method
interface HasBothFunctionTypes {
    property: () => string;
    method(): string;
}
const hasBoth11: HasBothFunctionTypes = {
    property: () => "",
    method() {
        return ("");
    },
};
hasBoth11.property();
// Ok
hasBoth11.method();
// Ok


interface OptionalReadonlyFunctions {
    optionalProperty?: () => string;
    optionalMethod?(): string;
}

// ========== Call Signatures ==========

type FunctionAlias = (input: string) => number;
interface CallSignature {
    (input: string): number;
}
// Type: (input: string) => number
const typedFunctionAlias: FunctionAlias = (input) => input.length;
// Ok
// Type: (input: string) => number
const typedCallSignature: CallSignature = (input) => input.length;
// Ok
interface FunctionWithCount {
    count: number;
    (): void;
}
let hasCallCount: FunctionWithCount;
function keepsTrackOfCalls() {
    keepsTrackOfCalls.count += 1;
    console.log(`I've been called ${keepsTrackOfCalls.count} times!`);
}
keepsTrackOfCalls.count = 0;
hasCallCount = keepsTrackOfCalls;
// Ok
function doesNotHaveCount() {
    console.log("No idea!");
}


// index Sing nature 

interface WordCounts {
    [i: string]: number;
}
const counts: WordCounts = {};
counts.apple = 0;
// Ok
counts.banana = 1;
// Ok
interface DatesByName {
    [i: string]: Date;
}
const publishDates: DatesByName = {
    Frankenstein: new Date("1 January 1818"),
};
publishDates.Frankenstein;
// Type: Date
console.log(publishDates.Frankenstein.toString());
// Ok
publishDates.Beloved;
// Type: Date, but runtime value of undefined!


//======== Mixing properties and index signatures =======

interface HistoricalNovels {
    Oroonoko: number;
    [i: string]: number;
}
// Ok
const novels: HistoricalNovels = {
    Outlander: 1991,
    Oroonoko: 1688,
};
