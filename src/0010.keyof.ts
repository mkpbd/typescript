
// person  object
type Person = {
  name: string;
  age: number;
  location: string;
};


function personDetails(person: Person, key: keyof Person) {
  return `The person's ${key} is ${person[key]}.`;
}

personDetails({ name: 'Alice', age: 30, location: 'Wonderland' }, 'name'); // The person's name is Alice.
personDetails({ name: 'Bob', age: 25, location: 'Builderland' }, 'age'); // The person's age is 25.
personDetails({ name: 'Charlie', age: 35, location: 'Chocolate Factory' }, 'location'); // The person's location is Chocolate Factory.


// type person keys
type PersonKeys = keyof Person; // "name" | "age" | "location"
const keyName: PersonKeys = 'name';
const keyAge: PersonKeys = 'age';
const keyLocation: PersonKeys = 'location';
