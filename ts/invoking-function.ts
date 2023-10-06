function add(a: number, b: number) {
    return a + b;
}

function addNumberReturn(a: number, b: number): number {
    return a + b;
}

// Named functions
function greet(name: string) {
    return 'Hello' + name;
}

// function expression 

let greet2 = function (name: string) {
    return 'Hello' + name;
}
// Arrow function expression

let greet3 = (names: string) => {
    return 'Hello' + names;
}

// Shorthand arrow function expression

let greet5 = (names: string) => 'hello' + names;

// Optional  and Default  parameter

function log(message: string, userId?: string) {
    let time = new Date().toLocaleString();
    console.log(time + message + userId || 'Not Signed In');
}

log('Page Laded');
log('User signed in', 'da763beef');


// create  user defined 

type Context = {
    appId?: string;
    userId?: string;
}

function log2(message: string, context: Context = {}): void {
    let time = new Date().toISOString();
    console.log(time, message, context.appId, context.userId);
}

// Rest Parameters

function sum(numbers: number[]): number {
    return numbers.reduce((sum, number) => sum + number);
}
sum([1, 2, 3]); // evaluates 6


function sumVariadicSafe(...numbers: number[]): number {
    return numbers.reduce((sum, number) => sum + number, 0);
}
sumVariadicSafe(3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14);

add(10, 20);
add.apply(null, [10, 20]);
add.call(null, 30, 50);

const bind = add.bind(null, 30, 50);


let x = {
    a() {
        return this;
    }
}
x.a();


function fancyDate(this: Date) {
    return `${this.getDate()}/${this.getMonth()}/${this.getFullYear()}`
}

fancyDate.call(new Date);