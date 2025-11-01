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