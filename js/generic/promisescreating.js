"use strict";
class PromiseLikes {
    constructor(executor) {
        /* ... */
    }
}
// Type: Promise<unknown>
const resolvesUnknown = new Promise((resolve) => {
    setTimeout(() => resolve("Done!"), 1000);
});
// Type: Promise<string>
const resolvesString = new Promise((resolve) => {
    setTimeout(() => resolve("Done!"), 1000);
});
// Type: Promise<string>
const textEventually = new Promise((resolve) => {
    setTimeout(() => resolve("Done!"), 1000);
});
// Type: Promise<number>
const lengthEventually = textEventually.then((text) => text.length);
