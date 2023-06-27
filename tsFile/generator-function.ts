function* createFibonacciGenerator() {
    let a = 0
    let b = 1
    while (true) {
        yield a;
        [a, b] = [b, a + b]
    }
}
let fibonacciGenerator = createFibonacciGenerator() // IterableIterator<number>
fibonacciGenerator.next() // evaluates to {value: 0, done: false}
fibonacciGenerator.next() // evaluates to {value: 1, done: false}
fibonacciGenerator.next() // evaluates to {value: 1, done: false}
fibonacciGenerator.next() // evaluates to {value: 2, done: false}
fibonacciGenerator.next() // evaluates to {value: 3, done: false}
fibonacciGenerator.next() // evaluates to {value: 5, done: false}

/**
 * The asterisk (*) before a function’s name makes that function a generator. Calling a generator returns an iterable iterator.
 * 
 * Our generator can generate values forever.
 * 
 * Generators use the yield keyword to, well, yield values. When a consumer asks for the generator’s next value (for example, by calling next), yield sends a result 
 * back to the consumer and pauses execution until the consumer asks for the next value. 
 * In this way the while(true) loop doesn’t immediately cause the program to run forever and crash
 * 
 */
function* createNumbers(): IterableIterator<number> {
    let n = 0
    while (1) {
        yield n++
    }
}
let numbers = createNumbers()
numbers.next() // evaluates to {value: 0, done: false}
numbers.next() // evaluates to {value: 1, done: false}
numbers.next() // evaluates to {value: 2, done: false}

function area(radius: number): number | null {
    if (radius < 0) {
        return null
    }
    return Math.PI * (radius ** 2)
}
let rr: number = 3
let arr = area(rr)
if (arr !== null) {
    console.info('result:', arr)
}

// function greet(name: string)
type Greet = (name: string) => string
// function log(message: string, userId?: string)
type Log = (message: string, userId?: string) => void
// function sumVariadicSafe(...numbers: number[]): number
type SumVariadicSafe = (...numbers: number[]) => number


type Logg = (message: string, userId?: string) => void
let logg: Logg = (
    message,
    userId = 'Not signed in'
) => {
    let time = new Date().toISOString()
    console.log(time, message, userId)
}

//======== Contextual Typing ===========
function times(
    f: (index: number) => void,
    n: number
) {
    for (let i = 0; i < n; i++) {
        f(i)
    }
}


// Shorthand call signature
type Log1 = (message: string, userId?: string) => void
// Full call signature
type Log2 = {
    (message: string, userId?: string): void
}

type Reservation = { from: Date, to: Date, description: string };

type Reserve = {
    (from: Date, to: Date, destination: string): Reservation
}

type Reserve1 = {
    (from: Date, to: Date, destination: string): Reservation
    (from: Date, destination: string): Reservation
}

type Reserve3 = {
    (from: Date, to: Date, destination: string): Reservation
    (from: Date, destination: string): Reservation
}
// let reserve5: Reserve3 = (
//     from: Date,
//     toOrDestination: Date | string,
//     destination?: string
// ) => {
//     // ...
// }

function getMonth(date: any): number | undefined {
    if (date instanceof Date) {
        return date.getMonth()
    }
}

function getMonth2(date: Date): number {
    return date.getMonth()
}