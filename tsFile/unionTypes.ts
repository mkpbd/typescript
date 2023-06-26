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