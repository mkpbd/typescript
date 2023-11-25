// Type inference
let aNumber = 2;
// aNumber: number
// Type annotation
let anotherNumber: number = 3;
// anotherNumber: number


type Person = {
    name: string;
    age: number;
};


function createPerson(): Person {
    return { name: "Stefan", age: 39 };
}



console.log(createPerson());


function printPerson(person: Person) {
    console.log(person.name, person.age);
}


const me: Person = {
    name: "kamal", age: 66
}

printPerson(me);