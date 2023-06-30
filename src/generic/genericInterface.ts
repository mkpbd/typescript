//============= Generic Interfaces============
interface Box<T> {
    inside: T;
}
let stringyBox: Box<string> = {
    inside: "abc",
};
let numberBox: Box<number> = {
    inside: 123,
};
let incorrectBox: Box<number> = {
    inside: 123,
    //inside: false,
    // Error: Type 'boolean' is not assignable to type 'number'.
};



interface LinkedNode<Value> {
    next?: LinkedNode<Value>;
    value: Value;
}
function getLast<Value>(node: LinkedNode<Value>): Value {
    return node.next ? getLast(node.next) : node.value;
}


// Inferred Value type argument: Date
let lastDate = getLast({
    value: new Date("09-13-1993"),
});
// Inferred Value type argument: string
let lastFruit = getLast({
    next: {
        value: "banana",
    },
    value: "apple",
});
// Inferred Value type argument: number
let lastMismatch = getLast({
    next: {
        value: 123,
    },
    value: 23,
    // value: false,
    // ~~~~~
    // Error: type 'boolean' is not assignable to type 'number'.
});


