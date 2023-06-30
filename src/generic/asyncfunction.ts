// Type: (text: string) => Promise<number>
async function lengthAfterSecond(text: string) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return text.length;
}
// Type: (text: string) => Promise<number>
async function lengthImmediately(text: string) {
    return text.length;
}

// Ok
async function givesPromiseForString(): Promise<string> {
    return ("Done!");
}
// async function givesString(): string {
    // ~~~~~~
    // Error: The return type of an async function
    // or method must be the global Promise<T> type.
    // return ("Done!");


// }
