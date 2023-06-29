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

