"use strict";
function* createFibonacciGenerator() {
    let a = 0;
    let b = 0;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}
let fibonacciGenerator = createFibonacciGenerator(); // IterableIterator<number>
fibonacciGenerator.next(); // evaluates to {value: 0, done: false}
fibonacciGenerator.next(); // evaluates to {value: 1, done: false}
fibonacciGenerator.next(); // evaluates to {value: 1, done: false}
fibonacciGenerator.next(); // evaluates to {value: 2, done: false}
fibonacciGenerator.next(); // evaluates to {value: 3, done: false}
fibonacciGenerator.next(); // evaluates to {value: 5, done: false}
function* createNumbers() {
    let n = 0;
    while (true) {
        yield n++;
    }
}
let numbers = createNumbers();
numbers.next(); // evaluates to {value: 0, done: false}
numbers.next(); // evaluates to {value: 1, done: false}
numbers.next(); // evaluates to {value: 2, done: false}
// Iterators 
/*
Any object that contains a property called Symbol.iterator,
whose value is a function that returns an iterator.
*/
let numberIterator = {
    *[Symbol.iterator]() {
        for (let i = 0; i <= 10; i++) {
            yield i;
        }
    }
};
// Iterate over an iterator with for-of
for (let a of numberIterator) {
    console.log(a);
}
//Spread an iterator
let allNumbers = [...numberIterator]; // number[]
// Destructure an iterator
let [one, two, ...rest] = numberIterator; // [number, number, number[]]
function area(radius) {
    if (radius < 0) {
        return null;
    }
    return Math.PI * (radius ** 2);
}
let r = 3;
let a = area(r);
if (a !== null) {
    console.info('result:', a);
}
let logs = (message, userId = 'not Assign') => {
    let time = new Date().toISOString();
    console.log(time, message, userId);
};
function times(f, n) {
    for (let i = 0; i < n; i++) {
        f(i);
    }
}
times(n => console.log(n), 4);
function f(i) {
    console.log(i);
}
times(f, 4);
let reserve = (from, to, destination) => {
    return 'Hello from';
};
let reserve2 = (from, toOrDestination, destination) => {
    // ...
};
let reserve3 = (from, to) => {
};
let reserve4 = (from, to, destination) => {
};
function getMonth(date) {
    return date.getFullYear();
}
// let filter2: Filter2 = (array, f) => // ...
// // (a) T is bound to number
// filter2([1, 2, 3], _ => _ > 2)
// // (b) T is bound to string
// filter2(['a', 'b'], _ => _ !== 'b')
// // (c) T is bound to {firstName: string}
// let names = [
// {firstName: 'beth'},
// {firstName: 'caitlyn'},
// {firstName: 'xin'}
// ]
// filter2(names, _ => _.firstName.startsWith('b'))
