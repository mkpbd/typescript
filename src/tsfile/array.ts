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


function doSomething(value: Array<string>) {
    // ...
}

let myArrayes: string[] = ["hello", "world"];

// either of these work!
doSomething(myArrayes);
doSomething(new Array("hello", "world"));



/**
 * Much like the Box type above, Array itself is a generic type.
 * 
 */



interface Arrays<Type> {
    /**
     * Gets or sets the length of the array.
     */
    length: number;

    /**
     * Removes the last element from an array and returns it.
     */
    pop(): Type | undefined;

    /**
     * Appends new elements to an array, and returns the new length of the array.
     */
    push(...items: Type[]): number;

    // ...
}


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

function doStuff(values: ReadonlyArray<string>) {
    // We can read from 'values'...
    const copy = values.slice();
    console.log(`The first value is ${values[0]}`);

    // ...but we can't mutate 'values'.
    // values.push("hello!");
    //Property 'push' does not exist on type 'readonly string[]'.
}

//== Instead, we can assign regular Arrays to ReadonlyArrays. ==


const roArray: ReadonlyArray<string> = ["red", "green", "blue"];

/**
 * 
 * Just as TypeScript provides a shorthand syntax for Array<Type> with Type[], it also provides a shorthand syntax for ReadonlyArray<Type> with readonly Type[].
 */

function doStufff(values: readonly string[]) {
    // We can read from 'values'...
    const copy = values.slice();
    console.log(`The first value is ${values[0]}`);

    // ...but we can't mutate 'values'.
    // values.push("hello!");
    //Property 'push' does not exist on type 'readonly string[]'.
}


let xx: readonly string[] = [];
let y: string[] = [];

xx = y;
//y = x;


//======================================= Tuple Types ============================


// A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.

type StringNumberPair = [string, number];


function doSomething(pair: [string, number]) {
    const aa = pair[0];

    // const aaaa: string
    const bbb = pair[1];

    // const bbbb: number
    // ...
}

doSomething(["hello", 42]);


function doSomething(stringHash: [string, number]) {
    const [inputStrings, hashs] = stringHash;

    console.log(inputStrings);

    //const inputStrings: string

    console.log(hashs);

    //const hashs: number
}

interface StringNumberPairs {
    // specialized properties
    length: 2;
    0: string;
    1: number;

    // Other 'Array<string | number>' members...
    slice(start?: number, end?: number): Array<string | number>;
}


//===================== Tuples can also have rest elements, which have to be an array/tuple type. =====================

type StringNumberBooleans = [string, number, ...boolean[]];
type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];

const a: StringNumberBooleans = ["hello", 1];
const b: StringNumberBooleans = ["beautiful", 2, true];
const c: StringNumberBooleans = ["world", 3, true, false, true, false, true];


function readButtonInput(...args: [string, number, ...boolean[]]) {
    const [name, version, ...input] = args;
    // ...
  }


  //================ is basically equivalent to: ====================

  function readButtonInputs(name: string, version: number, ...input: boolean[]) {
    // ...
  }


  // readonly Tuple Types
// One final note about tuple types - tuple types have readonly variants, and can be specified by sticking a readonly modifier in front of them - just like with array shorthand syntax.



/**
 * 
 * uples tend to be created and left un-modified in most code, so annotating types as readonly tuples when possible is a good default.
 *  This is also important given that array literals with const assertions will be inferred with readonly tuple types.
 */

let point = [3, 4] as const;
 
function distanceFromOrigin([x, y]: [number, number]) {
  return Math.sqrt(x ** 2 + y ** 2);
}
 
//distanceFromOrigin(point);