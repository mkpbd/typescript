function* createFibonacciGenerator() {
    let a = 0;
    let b = 0;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

let fibonacciGenerator = createFibonacciGenerator() // IterableIterator<number>
fibonacciGenerator.next() // evaluates to {value: 0, done: false}
fibonacciGenerator.next() // evaluates to {value: 1, done: false}
fibonacciGenerator.next() // evaluates to {value: 1, done: false}
fibonacciGenerator.next() // evaluates to {value: 2, done: false}
fibonacciGenerator.next() // evaluates to {value: 3, done: false}
fibonacciGenerator.next() // evaluates to {value: 5, done: false}



function* createNumbers(): IterableIterator<number> {
    let n = 0;
    while (true) {
        yield n++;
    }
}

let numbers = createNumbers()
numbers.next() // evaluates to {value: 0, done: false}
numbers.next() // evaluates to {value: 1, done: false}
numbers.next() // evaluates to {value: 2, done: false}

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
}
// Iterate over an iterator with for-of

for (let a of numberIterator) {
    console.log(a);
}

//Spread an iterator
let allNumbers = [...numberIterator] // number[]
// Destructure an iterator
let [one, two, ...rest] = numberIterator // [number, number, number[]]

function area(radius: number): number | null {
    if (radius < 0) {
        return null
    }
    return Math.PI * (radius ** 2)
}
let r: number = 3
let a = area(r)
if (a !== null) {
    console.info('result:', a)
}

// function  greet(name: string);
type Greet = (name: string) => string;

// function  log(message: string, userId?: string)

type Log = (message: string, userId?: string) => void;

// function sumVariadicSafe (...numbers: number[]): number
type SumVariadicSafe = (...numbers: number[]) => number;

let logs: Log = (message, userId = 'not Assign') => {
    let time = new Date().toISOString()
    console.log(time, message, userId)
}


function times(f: (index: number) => void, n: number) {
    for (let i = 0; i < n; i++) { f(i); }
}

times(n => console.log(n), 4);

function f(i: number) {
    console.log(i);
}
times(f, 4);


// Shorthand call signature

type LogShorthand = (message: string, userId?: string) => void;

// Full call signature

type LogFull = { (message: string, userId?: string): void; }

/**
 * 
 * Overloaded function
 * A function with multiple call signatures
 * 
 * 
 */
type Reserve = {
    (from: Date, to: Date, destination: string): any;
}

let reserve: Reserve = (from, to, destination) => {

    return 'Hello from'
}

type Reserve2 = {
    (from: Date, to: Date, destination: string): any
    (from: Date, destination: string): any;
}

let reserve2: Reserve = (
    from: Date,
    toOrDestination: Date | string,
    destination?: string
) => {
    // ...
}

let reserve3: Reserve = (from: Date, to: Date) => {
};



let reserve4: Reserve = (from: Date, to: Date, destination: string) => {
};


function getMonth(date: Date): Number | string {

    return date.getFullYear()
}

type CreateElement = {
    (tag: 'a'): HTMLAnchorElement
    (tag: 'canvas'): HTMLCanvasElement
    (tag: 'table'): HTMLTableElement
    (tag: string): HTMLElement
}
// let createElement: CreateElement = (tag: string): HTMLElement => {

//     return '<a herfy href="http://>fadfadfa</a>';
// }

type Filter = {
    (array: unknown, f: unknown): unknown[],
    (array: number[], f: (item: number) => boolean): number[],
    (array: string[], f: (item: string) => boolean): string[],
    (array: object[], f: (item: object) => boolean): object[]
}

type Filter2 = {
    <T>(array: T[], f: (item: T) => boolean): T[]
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