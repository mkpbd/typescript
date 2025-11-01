// Define an interface (or type)
interface User1 {
  id: number;
  name: string;
  email: string;
}

// Use keyof to get the keys of User as a union type
type UserKeys1 = keyof User1;

// Now `UserKeys` is: "id" | "name" | "email"

// You can use it like this:
let key1: UserKeys1 = "id";
let key2: UserKeys1 = "name";
// let key3: UserKeys = "age"; // ❌ Error: Type '"age"' is not assignable to type 'UserKeys'

console.log(key1, key2); // Output: id name

// =========================  keyof with index signatures
// keyof can also be used with index signatures to extract the index type. 

type StringMap = { [key: string]: unknown };
// `keyof StringMap` resolves to `string` here
function createStringPair(property: keyof StringMap, value: string): StringMap {
  return { [property]: value };
}
const pairs = createStringPair("exampleKey", "exampleValue");
console.log(pairs); // Output: { exampleKey: 'exampleValue' }

// =========================  keyof with number index signatures
type NumberMap = { [key: number]: unknown };
// `keyof NumberMap` resolves to `number` here
function createNumberPair(property: keyof NumberMap, value: number): NumberMap {
    return { [property]: value };
}
const numberPairs = createNumberPair(42, 100);
console.log(numberPairs); // Output: { '42': 100 }