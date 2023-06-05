"use strict";
/** Let’s imagine a Box type that can contain any value - strings, numbers, Giraffes, whatever. */
/**
 *
 * Right now, the contents property is typed as any, which works, but can lead to accidents down the line.
 * We could instead use unknown, but that would mean that in cases where we already know the type of contents, we’d need to do precautionary checks, or use error-prone type assertions.
 *
 */
//   interface Box {
//     contents: unknown;
//   }
let x = {
    contents: "hello world",
};
// we could check 'x.contents'
if (typeof x.contents === "string") {
    console.log(x.contents.toLowerCase());
}
// or we could use a type assertion
console.log(x.contents.toLowerCase());
function setContents(box, newContents) {
    box.contents = newContents;
}
/***
 *
 *
 * Think of Box as a template for a real type, where Type is a placeholder that will get replaced with some other type. When TypeScript sees Box<string>,
 *  it will replace every instance of Type in Box<Type> with string, and end up working with something like { contents: string }.
 * In other words, Box<string> and our earlier StringBox work identically.
 *
 */
let box;
let boxA = { contents: "hello" };
boxA.contents;
//(property) Box<string>.contents: string
let boxB = { contents: "world" };
boxB.contents;
// ================= This also means that we can avoid overloads entirely by instead using 
function setContentss(box, newContents) {
    box.contents = newContents;
}
