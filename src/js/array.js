"use strict";
/**
 *
 *
 * The Array Type
 * Generic object types are often some sort of container type that work independently of the type of elements they contain.
 * It’s ideal for data structures to work this way so that they’re re-usable across different data types.
 *
 * It turns out we’ve been working with a type just like that throughout this handbook: the Array type.Whenever we write out types like number[] or string[],
 *that’s really just a shorthand for Array<number> and Array<string>.







 */
function doSomething(value) {
    // ...
}
let myArrayes = ["hello", "world"];
// either of these work!
doSomething(myArrayes);
doSomething(new Array("hello", "world"));
/**
 *
 *
 * Modern JavaScript also provides other data structures which are generic, like Map<K, V>, Set<T>, and Promise<T>.
 *  All this really means is that because of how Map, Set, and Promise behave, they can work with any sets of types.
 *
 *
 */
// ===========================The ReadonlyArray  Type======================================
//The ReadonlyArray is a special type that describes arrays that shouldn’t be changed.
function doStuff(values) {
    // We can read from 'values'...
    const copy = values.slice();
    console.log(`The first value is ${values[0]}`);
    // ...but we can't mutate 'values'.
    // values.push("hello!");
    //Property 'push' does not exist on type 'readonly string[]'.
}
//== Instead, we can assign regular Arrays to ReadonlyArrays. ==
const roArray = ["red", "green", "blue"];
/**
 *
 * Just as TypeScript provides a shorthand syntax for Array<Type> with Type[], it also provides a shorthand syntax for ReadonlyArray<Type> with readonly Type[].
 */
function doStufff(values) {
    // We can read from 'values'...
    const copy = values.slice();
    console.log(`The first value is ${values[0]}`);
    // ...but we can't mutate 'values'.
    // values.push("hello!");
    //Property 'push' does not exist on type 'readonly string[]'.
}
let xx = [];
let y = [];
xx = y;
function doSomething(pair) {
    const aa = pair[0];
    // const aaaa: string
    const bbb = pair[1];
    // const bbbb: number
    // ...
}
doSomething(["hello", 42]);
function doSomething(stringHash) {
    const [inputStrings, hashs] = stringHash;
    console.log(inputStrings);
    //const inputStrings: string
    console.log(hashs);
    //const hashs: number
}
const a = ["hello", 1];
const b = ["beautiful", 2, true];
const c = ["world", 3, true, false, true, false, true];
function readButtonInput(...args) {
    const [name, version, ...input] = args;
    // ...
}
//================ is basically equivalent to: ====================
function readButtonInputs(name, version, ...input) {
    // ...
}
// readonly Tuple Types
// One final note about tuple types - tuple types have readonly variants, and can be specified by sticking a readonly modifier in front of them - just like with array shorthand syntax.
/**
 *
 * uples tend to be created and left un-modified in most code, so annotating types as readonly tuples when possible is a good default.
 *  This is also important given that array literals with const assertions will be inferred with readonly tuple types.
 */
let point = [3, 4];
function distanceFromOrigin([x, y]) {
    return Math.sqrt(x ** 2 + y ** 2);
}
//distanceFromOrigin(point);
