function identity<T>(input: T) {
    return input;
}
const numeric = identity("me");
// Type: "me"
const stringy = identity(123);
// Type: 123

// generic arrow function

const identityArrow = <T>(input: T) => input;
identityArrow("hello world");
identityArrow(10);

//===== Explicit Generic Call Types =========

function logWrapper<Input>(callback: (input: Input) => void) {
    return;
    (input: Input) => {
        console.log("Input:", input);
        callback(input);
    };
}
// Type: (input: string) => void
logWrapper((input: string) => {
    console.log(input.length);
});
// Type: (input: unknown) => void
logWrapper((input) => {
    console.log(input);
    // console.log(input.length);
    // ~~~~~~
    // Error: Property 'length' does not exist on type 'unknown'.
});


//=============== multiple parameters 

function makeTuple<First, Second>(first: First, second: Second) {
    return [first, second] as const;
}
let tuple = makeTuple(true, "abc");
// Type of value: readonly [boolean, string]



//=================== key value pairs =================
function makePair<Key, Value>(key: Key, value: Value) {
    return {
        key, value
    }
}
// Ok: neither type argument provided
makePair("abc", 123);
// Type: { key: string; value: number }
// Ok: both type arguments provided
makePair<string, number>("abc", 123);
// Type: { key: string; value: number }
makePair<"abc", 123>("abc", 123);
// Type: { key: "abc"; value: 123 }
// makePair<string>("abc", 123);
// ~~~~~~
// Error: Expected 2 type arguments, but got 1.TIP;
