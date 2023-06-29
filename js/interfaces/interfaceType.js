"use strict";
let valueLater;
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
// Ok
const ok = {
    author: "Rita Dove",
    pages: 80,
};
function read(page) {
    // Ok: reading the text property doesn't attempt to modify it
    console.log(page.text);
}
const pageIsh = {
    text: "Hello, world!",
};
