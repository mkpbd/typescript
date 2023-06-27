"use strict";
function filter(array, f) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (f(item)) {
            result.push(item);
        }
    }
    return result;
}
filter([1, 2, 3, 4], (_) => _ < 3); // evaluates to [1, 2]
let names = [
    { firstName: 'beth' },
    { firstName: 'caitlyn' },
    { firstName: 'xin' }
];
//let filter4: Filter = (array: T[], f) => // ...
// (a) T is bound to number
filter([1, 2, 3], (_) => _ > 2);
// (b) T is bound to string
filter(['a', 'b'], (_) => _ !== 'b');
// (c) T is bound to {firstName: string}
//filter(names, _ => _.firstName.startsWith('b'))
