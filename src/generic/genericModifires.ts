interface Quote3<T = string> {
    value: T;
}
let explicit1: Quote3<number> = {
    value: 123,
};
let implicit2: Quote3 = {
    value: "Be yourself. The world worships the original.",
};
// let mismatch3: Quote3 = {
//     value: 123,
// };
// Error: Type 'number' is not assignable to type 'string'.



interface KeyValuePair<Key, Value = Key> {
    key: Key;
    value: Value;
}
// Type: KeyValuePair<string, number>
let allExplicit: KeyValuePair<string, number> = {
    key: "rating",
    value: 10,
};
// Type: KeyValuePair<string>
let oneDefaulting: KeyValuePair<string> = {
    key: "rating",
    value: "ten",
};
// let firstMissing: KeyValuePair = {
//      ~~~~~~~~~~~~
//      Error: Generic type 'KeyValuePair<Key, Value>'
//      requires between 1 and 2 type arguments.
//     key: "rating",
//     value: 10,
// };
