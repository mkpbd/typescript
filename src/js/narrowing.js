"use strict";
//Imagine we have a function called padLeft.
function padLeft(padding, input) {
    throw new Error("Not implemented yet!");
}
function padLefts(padding, input) {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input;
    }
    return padding + input;
}
function padLeftes(padding, input) {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input;
        // (parameter) padding: number
    }
    return padding + input;
    // (parameter) padding: string
}
/**
 *
 * typeof type guards
 *
 * "string"
 * "number"
 * "bigint"
 * "boolean"
 * "symbol"
 * "undefined"
 * "object"
 * "function"
 *
 *
 */
