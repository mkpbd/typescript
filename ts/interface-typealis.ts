
/**
 * Use type aliases for types within your project’s boundary, and 
 * use interfacesfor contracts that are meant to be consumed by others.
 */

type PersonAsType = {
    name: string;
    age: number;
    address: string[];
    greet(): string;
};

interface PersonAsInterface {
    name: string;
    age: number;
    address: string[];
    greet(): string;
}


// Some data we collect in a web form
interface FormData {
    name: string;
    age: number;
    address: string[];
}

// A function that sends this data to a back-end
function send(data: FormData) {
    console.log(data.entries()) // this compiles!
    // but crashes horrendously in runtime
}

type FormData1 = {
    // ^-- Duplicate identifier 'FormData'.(2300)
    name: string;
    age: number;
    address: string[];
};


type CallbackFn = () => void;
// Types for the type system
function task(name: string, dependencies: string[]): void;
function task(name: string, callback: CallbackFn): void
function task(name: string, dependencies: string[], callback: CallbackFn): void
// The actual implementation
function task(name: string, param2: string[] | CallbackFn, param3?: CallbackFn): void {
    //...
}

task('kamal', ['b', 'cv'], () => { console.log('hello we are ready') });

// Types for the type system

function fn(input: number): number
function fn(input: string): string
function fn(input: number | string): number | string {
    if (typeof input === "number") {
        return "this also works";
    }
    return 1337;

}
const typeSaysNumberButItsAString = fn(12);
const typeSaysStringButItsANumber = fn("Hello world");


type TaskFn = {
    (name: string, dependencies: string[]): void;
    (name: string, callback: CallbackFn): void;
    (name: string, dependencies: string[], callback: CallbackFn): void;
}


const author = {
    name: "Stefan",
};
function hi() {
    // console.log(this.name);
}
const pet = {
    name: "Finni",
    kind: "Cat",
};
hi.apply(pet); // prints "Finni"
hi.call(author); // prints "Stefan"
const boundHi = hi.bind(author);
boundHi(); // prints "Stefan"




class Persons {
     names : string;
    constructor(names:string) {
        this.names = names;
    }
    hi() {
        console.log(this.names);
    }
    hi_timeout() {
        let self = this;
        setTimeout(function () {
           console.log(self.names);
        }, 0);
    }
    hi_timeout_arrow() {
        setTimeout(() => {
            console.log(this.names);
        }, 0);
    }
}
const persons = new Persons("Stefan")
persons.hi(); // prints "Stefan"
persons.hi_timeout(); // prints "undefined"
persons.hi_timeout_arrow(); // prints "Stefan"