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