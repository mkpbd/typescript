// Type inference
let aNumber = 2;
// aNumber: number
// Type annotation
let anotherNumber: number = 3;
// anotherNumber: number


/// Type interface 

type Person = {
    name: string;
    age: number;
    };
   

    function createPerson(name: string, age: number): Person {
        return { name, age };

    }


    // Type  alias for interface

    type TPerson = {
        name: string;
        age: number;
        
    }

    function printPerson(person: TPerson) {
        console.log(person.name, person.age);
        }
        // All works
        printPerson({name:"kamal", age: 33});