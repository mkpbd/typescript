// Typed Array 

// tuple is a typed array with a pre-defined length  and type for each index 
// Tuple are great because they allow each element in the array to be  known type of value 
// to define a tuple specify the type of each element in the array 

// define a tuple 

let ourTuple: [number, boolean, string]
ourTuple = [5, true, 'hello']

// Even though we have a boolean, string, and number the order matters in our tuple and will throw an error.


// read only tuple 

const ourReadOnlyTuple : readonly [number, boolean, string, undefined] = [5, true, 'hello', undefined];

// named Tuples 

const graph : [x:number, y:number] = [55.2, 41.3]
// Named tuples provide more context for what our index values represent.

// Destructuring Tuples 

const [x, y] = graph;

