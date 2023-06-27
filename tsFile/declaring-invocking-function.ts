function add(a: number, b: number) {
    return a + b
}

function addWithReturnNumber(a: number, b: number): number {
    return a + b
}

// Named function
function greet(name: string) {
    return 'hello ' + name
}
// Function expression
let greet2 = function (name: string) {
    return 'hello ' + name
}
// Arrow function expression
let greet3 = (name: string) => {
    return 'hello ' + name
}
// Shorthand arrow function expression
let greet4 = (name: string) =>
    'hello ' + name
// Function constructor
let greet5 = new Function('name', 'return "hello " + name')

add(1, 2) // evaluates to 3
greet('Crystal') // evaluates to 'hello Crystal'



function log1(message: string, userId?: string) {
    let time = new Date().toLocaleTimeString()
    console.log(time, message, userId || 'Not signed in')
}
log1('Page loaded') // Logs "12:38:31 PM Page loaded Not signed in"
log1('User signed in', 'da763be') // Logs "12:38:31 PM User signed in da763be"

function log2(message: string, userId = 'Not signed in') {
    let time = new Date().toISOString()
    console.log(time, message, userId)
}
log2('User clicked on a button', 'da763be')
log2('User signed out')

/**
 * Of course, you can also add explicit type annotations to your default parameters, the same way you can for parameters without defaults:
 */

type Context = {
    appId?: string
    userId?: string
}
function log3(message: string, context: Context = {}) {
    let time = new Date().toISOString()
    console.log(time, message, context.userId)
}

//========================= Rest Parameters =========================

function sum(numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0)
}
sum([1, 2, 3]) // evaluates to 6

function sumVariadicSafe(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0)
}
sumVariadicSafe(1, 2, 3) // evaluates to 6

interface Console {
    log(message?: any, ...optionalParams: any[]): void
}


//====================== call, apply, and bind =================================
function add3(a: number, b: number): number {
    return a + b
}
add3(10, 20) // evaluates to 30
add3.apply(null, [10, 20]) // evaluates to 30
add3.call(null, 10, 20) // evaluates to 30
add3.bind(null, 10, 20)() // evaluates to 30