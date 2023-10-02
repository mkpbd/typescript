// Collection is in TypeScript land! --> type
type Person1 = {
    name: string;
    age: number
}
type Collection = Person1[]
// printCollection is in JavaScript land! --> value
function printCollection(coll: Collection) {
    console.log(...coll)
}

printCollection([{ name: 'kamal passa', age: 55 }])


// a value
const person6 = {
    name: "Stefan"
}
// a type
type Person6 = typeof person;


// declaration
class PersonClass {
    name: string
    constructor(n: string) {
        this.name = n
    }
}
// used as a value
const personClass = new PersonClass("Stefan")
// used as a type
type Collections = Person1[]
function printPersons(coll: Collections) {
    //...
}

type PersonProps = {
    name: string
}
function Person({ name }: PersonProps) {
    // ...
}
type PrintComponentProps = {
    collection: Person1[],
    // ^- 'Person1' refers to a value,
    // but is being used as a type
}



class Person2 {
    name: string
    constructor(n: string) {
        this.name = n;
    }
}
function printPerson(person: Person2) {
    console.log(person.name);
}
printPerson(new Person2("Stefan")); // ok
printPerson({ name: "Stefan" }) // also ok


function checkPerson(person: Person2) {
    return person instanceof Person2
}
checkPerson(new Person2("Stefan")); // true
checkPerson({ name: "Stefan" }) // false