"use strict";
/**
 *
 **************************==== Type Assertions==========**************
Sometimes you will have information about the type of a value that TypeScript can’t know about.

For example, if you’re using document.getElementById, TypeScript only knows that this will return some kind of HTMLElement, but you might know that your page will always have an HTMLCanvasElement with a given ID.

In this situation, you can use a type assertion to specify a more specific type:
 *
 *
 */
const myCanvas = document.getElementById("main_canvas");
const myCanvases = document.getElementById("main_canvas");
///=========== Literal Types
let changingStrings = "Hello World";
changingStrings = "Olá Mundo";
// Because `changingString` can represent any possible string, that
// is how TypeScript describes it in the type system
changingStrings;
let changingString;
const constantString = "Hello World";
