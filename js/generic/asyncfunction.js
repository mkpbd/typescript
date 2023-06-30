"use strict";
// Type: (text: string) => Promise<number>
async function lengthAfterSecond(text) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return text.length;
}
// Type: (text: string) => Promise<number>
async function lengthImmediately(text) {
    return text.length;
}
// Ok
async function givesPromiseForString() {
    return ("Done!");
}
// async function givesString(): string {
// ~~~~~~
// Error: The return type of an async function
// or method must be the global Promise<T> type.
// return ("Done!");
// }
