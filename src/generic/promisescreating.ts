class PromiseLikes<Value> {
    constructor(
        executor: (
            resolve: (value: Value) => void,
            reject: (reason: unknown) => void
        ) => void
    ) {
        /* ... */
    }
}
// Type: Promise<unknown>
const resolvesUnknown = new Promise((resolve) => {
    setTimeout(() => resolve("Done!"), 1000);
});
// Type: Promise<string>
const resolvesString = new Promise<string>((resolve) => {
    setTimeout(() => resolve("Done!"), 1000);
});

// Type: Promise<string>
const textEventually = new Promise<string>((resolve) => {
    setTimeout(() => resolve("Done!"), 1000);
});
// Type: Promise<number>
const lengthEventually = textEventually.then((text) => text.length);
