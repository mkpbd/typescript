/**
 * Type aliases
 * Just like you can use variable declarations (let, const, and var) to declare a variable
 *  that aliases a value, you can declare a type alias that points to a type. It looks like this:
 */
type Age = number
type Person = {
    name: string
    age: Age
}

let age: Age = 55
let driver: Person = {
    name: 'James May',
    age: age
}

//Like JavaScript variable declarations (let, const, and var), you can’t declare a type twice:
type Color = 'red'
//type Color = 'blue' // Error TS2300: Duplicate identifier 'Color'.

/**
 * And like let and const, type aliases are block-scoped. Every block and every function 
 * has its own scope, and inner type alias declarations shadow outer ones:
 */
let x = Math.random() < .5
if (x) {
    type Color = 'blue' // This shadows the Color declared above.
    let b: Color = 'blue'
} else {
    let c: Color = 'red'
}

// UNION and intersection

/**
 * 
 * TypeScript gives us special type operators to describe unions and intersections of 
 * types: | for union and & for intersection. Since types are a lot like sets, we can think of them in the same way:
 * 
 */


type Cat = { name: string, purrs: boolean }
type Dog = { name: string, barks: boolean, wags: boolean }
type CatOrDogOrBoth = Cat | Dog
type CatAndDog = Cat & Dog



// Cat
let aCatDog: CatOrDogOrBoth = {
    name: 'Bonkers',
    purrs: true
}
// Dog
aCatDog = {
    name: 'Domino',
    barks: true,
    wags: true
}

// Both
aCatDog = {
    name: 'Donkers',
    barks: true,
    purrs: true,
    wags: true
}

let bCatDog: CatAndDog = {
    name: 'Domino',
    barks: true,
    purrs: true,
    wags: true
}

function trueOrNull(isTrue: boolean) {
    if (isTrue) {
        return 'true'
    }
    return null
}

type Returns = string | null
function returnAOrB(a: string, b: number) {
    return a || b
}

/// Arrays
let ar = [1, 2, 3] // number[]
var br = ['a', 'b'] // string[]
let cr: string[] = ['a'] // string[]
let dr = [1, 'a'] // (string | number)[]
const er = [2, 'b'] // (string | number)[]
let fr = ['red']
fr.push('blue')
//fr.push(true) // Error TS2345: Argument of type 'true' is not assignable to parameter of type 'string'.
let gr = [] // any[]
gr.push(1) // number[]
gr.push('red') // (string | number)[]
let hr: number[] = [] // number[]
hr.push(1) // number[]
// hr.push('red') // Error TS2345: Argument of type '"red"' is not assignable to parameter of type 'number'.


function buildArray() {
    let a = [] // any[]
    a.push(1) // number[]
    a.push('x') // (string | number)[]
    return a
}
let myArray = buildArray() // (string | number)[]
//myArray.push(true) // Error 2345: Argument of type 'true' is not
// assignable to parameter of type 'string | number'.


//============== Tuples =============================
let at: [number] = [1]
// A tuple of [first name, last name, birth year]
let bt: [string, string, number] = ['malcolm', 'gladwell', 1963]
//bt = ['queen', 'elizabeth', 'ii', 1926] // Error TS2322: Type 'string' is no assignable to type 'number'.// An array of train fares, which sometimes vary depending on direction
let trainFares: [number, number?][] = [
    [3.75],
    [8.25, 7.70],
    [10.50]
]
// Equivalently:
let moreTrainFares: ([number] | [number, number])[] = [
    // ...
]

// A list of strings with at least 1 element
let friends: [string, ...string[]] = ['Sara', 'Tali', 'Chloe', 'Claire']
// A heterogeneous list
let list: [number, boolean, ...string[]] = [1, false, 'a', 'b', 'c']

// ======================= Read-only arrays and tuples ===========
let as: readonly number[] = [1, 2, 3] // readonly number[]
let bs: readonly number[] = as.concat(4) // readonly number[]
let three = bs[2] // number
// as[4] = 5 // Error TS2542: Index signature in type
// 'readonly number[]' only permits reading.
// as.push(6) // Error TS2339: Property 'push' does not
// exist on type 'readonly number[]'.

type A = readonly string[] // readonly string[]
type B = ReadonlyArray<string> // readonly string[]
type C = Readonly<string[]> // readonly string[]
type D = readonly [number, string] // readonly [number, string]
type E = Readonly<[number, string]> // readonly [number, string]

//============= null, undefined, void, and never ==============

// (a) A function that returns a number or null
function af(x: number) {
    if (x < 10) {
        return x
    }
    return null
}
// (b) A function that returns undefined
function bf() {
    return undefined
}
// (c) A function that returns void
function c() {
    let a = 2 + 2
    let b = a * a
}
// (d) A function that returns never
function df() {
    throw TypeError('I always error')
}
// (e) Another function that returns never
function ef() {
    while (true) {
        doSomething()
    }
}

function doSomething() {
    console.log('hello world');
}