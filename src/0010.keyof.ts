
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


// Index signature example
type stringMap ={
    [key: string]: unknown;
}

function createStringPair(property: keyof stringMap, value: unknown): stringMap {
    return {
        [property]: value
    };
}
createStringPair('firstName', 'John'); // { firstName: 'John' }
createStringPair('age', 28); // { age: 28 }
createStringPair('isActive', true); // { isActive: true }
createStringPair('address', { city: 'New York', zip: '10001' }); // { address: { city: 'New York', zip: '10001' } }
createStringPair('hobbies', ['reading', 'traveling']); // { hobbies: ['reading', 'traveling'] }

// index signature with keyof
type NumberMap = {
    [key: number]: string;
}
function createNumberPair(property: keyof NumberMap, value: string): NumberMap {
    return {
        [property]: value
    };
}

// Valid usage
createNumberPair(1, 'one'); // { 1: 'one' }
createNumberPair(42, 'forty-two'); // { 42: 'forty-two' }
// createNumberPair('two', 'two'); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

// Mapped Types with keyof
type ReadonlyPerson = {
  readonly [K in keyof Person]: Person[K];
};
const readonlyPerson: ReadonlyPerson = {
  name: 'Diana',
  age: 28,
    location: 'Themyscira'
};

// readonlyPerson.age = 29; // Error: Cannot assign to 'age' because it is a read-only property.
console.log(readonlyPerson.name); // Diana
console.log(readonlyPerson.age); // 28
console.log(readonlyPerson.location); // Themyscira

// index access with keyof
type PersonNameType = Person['name']; // string
type PersonAgeType = Person['age']; // number
type PersonLocationType = Person['location']; // string
const personName: PersonNameType = 'Eve';
const personAge: PersonAgeType = 32;
const personLocation: PersonLocationType = 'Eden';
console.log(personName); // Eve
console.log(personAge); // 32
console.log(personLocation); // eden
