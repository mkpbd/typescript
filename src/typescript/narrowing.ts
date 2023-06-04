//Imagine we have a function called padLeft.

function padLeft(padding: number | string, input: string): string {
    throw new Error("Not implemented yet!");
}

function padLefts(padding: number | string, input: string) {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input;
    }
    return padding + input;
}



function padLeftes(padding: number | string, input: string) {
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


