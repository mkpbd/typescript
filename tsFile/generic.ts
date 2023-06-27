type FilterG = {
    <T>(array: T[], f: (item: T) => boolean): T[]
}
// let filterge: FilterG = // ...

type FilterGen<T> = {
    (array: T[], f: (item: T) => boolean): T[]
}

function map(array: unknown[], f: (item: unknown) => unknown): unknown[] {
    let result = []
    for (let i = 0; i < array.length; i++) {
        result[i] = f(array[i])
    }
    return result
}

function mapp<T, U>(array: T[], f: (item: T) => U): U[] {
    let result = []
    for (let i = 0; i < array.length; i++) {
        result[i] = f(array[i])
    }
    return result
}

//filter and map in the Standard Library

interface Array<T> {
    filter(
        callbackfn: (value: T, index: number, array: T[]) => any,
        thisArg?: any
    ): T[]
    map<U>(
        callbackfn: (value: T, index: number, array: T[]) => U,
        thisArg?: any
    ): U[]
}


function map1<T, U>(array: T[], f: (item: T) => U): U[] {

    return Array();
}
map(
    ['a', 'b', 'c'], // An array of T
    _ => _ === 'a' // A function that returns a U
)
//Generic Type Aliases
//Let’s define a MyEvent type that describes a DOM event, like a click or a mousedown:
type MyEvent<T> = {
    target: T
    type: string
}
type ButtonEvent = MyEvent<HTMLButtonElement>

let myEvent: MyEvent<HTMLButtonElement | null> = {
    target: document.querySelector('#myButton'),
    type: 'click'
}

type TimedEvent<T> = {
    event: MyEvent<T>
    from: Date
    to: Date
}

function triggerEvent<T>(event: MyEvent<T>): void {
    // ...
}

triggerEvent({ // T is Element | null
    target: document.querySelector('#myButton'),
    type: 'mouseover'
})

type TreeNode = {
    value: string
}
type LeafNode = TreeNode & {
    isLeaf: true
}
type InnerNode = TreeNode & {
    children: [TreeNode] | [TreeNode, TreeNode]
}
function mapNode<T extends TreeNode>(
    node: T,
    f: (value: string) => string
): T {
    return {
        ...node,
        value: f(node.value)
    }
}

let att: TreeNode = { value: 'a' }
let btnt: LeafNode = { value: 'b', isLeaf: true }
let ct: InnerNode = { value: 'c', children: [btnt] }
let atn = mapNode(att, _ => _.toUpperCase()) // TreeNode
let btn = mapNode(btnt, _ => _.toUpperCase()) // LeafNode
let c1 = mapNode(ct, _ => _.toUpperCase()) // InnerNode

//============ Bounded polymorphism with multiple constraints =================
type HasSides = { numberOfSides: number }
type SidesHaveLength = { sideLength: number }
function logPerimeter<
    Shape extends HasSides & SidesHaveLength
>(s: Shape): Shape {
    console.log(s.numberOfSides * s.sideLength)
    return s
}
type Square = HasSides & SidesHaveLength
let square: Square = { numberOfSides: 4, sideLength: 3 }
logPerimeter(square) // Square, logs "12"

//========= Using bounded polymorphism to model arity ===============

function call(
    f: (...args: unknown[]) => unknown,
    ...args: unknown[]
): unknown {
    return f(...args)
}
function fill(length: number, value: string): string[] {
    return Array.from({ length }, () => value)
}

// call(fill, 10, 'a') // evaluates to an array of 10 'a's