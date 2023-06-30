"use strict";
let explicit1 = {
    value: 123,
};
let implicit2 = {
    value: "Be yourself. The world worships the original.",
};
// Type: KeyValuePair<string, number>
let allExplicit = {
    key: "rating",
    value: 10,
};
// Type: KeyValuePair<string>
let oneDefaulting = {
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
