

// string 
let userName: string = 'mostofa kamal';
// number 
let userId: number = 10;
// boolean 
let isUser: boolean = false;
// undefined
let userValue: undefined = undefined;
// null 
let userIsNull: null = null;
// any 
let userAnyValue: any;

// unknown
let unknownUserValue: unknown = undefined;

// union 

let userUnionValue: string | number;
// never 
let neverValue: never;

// tuple

let tupleValue: [string, number, boolean] = ['kamal', 33, false];

//  type  

type Person = {
    name: string;
    age: number;
}

type Studying = {
    semester: number;
}

type Student = {
    id: string | number;
    age: number;
    semester: number;
}

function createPerson() {
    return {
        name: 'Student', age: 23, semester: 25, id: "XPA"
    }
}

function printPersion(person: Person) {
    console.log(person.age + " " + person.name);
}


function studyForAnotherSemester(student: Studying) {
    student.semester++;
}


function isLongTimeStudent(student: Student) {
    return student.age - student.semester / 2 > 30 && student.semester > 20
}

const me = createPerson();
// all workers
printPersion(me);
studyForAnotherSemester(me);
isLongTimeStudent(me);


function printPerson1(person: any) {
    for (let key in person) {
        console.log(`${key}: ${person[key]}`)
    }
}


function printPerson(person: Person) {
    for (let key in person) {
        console.log(`${key}: ${person[key as keyof Person]}`)
    }
}


function doSomething(value: unknown) {
    if (typeof value === "string") {
        // value: string
        console.log("It's a string", value.toUpperCase());
    } else if (typeof value === "number") {
        // value: number
        console.log("it's a number", value * 2)
    }
}


let obj: {}; // Similar to Object
obj = 32;
obj = "Hello";
obj = true;
obj = () => { console.log("Hello") };
//obj = undefined; // Error
//obj = null; // Error
obj = { name: "Stefan", age: 40 };
obj = [];
obj = /.*/;


let okObj: {} = {
    toString() {
        return false;
    }
}; // OK


let obje1: object;

obje1 = () => { console.log("Hello") };
obje1 = { name: "Stefan", age: 40 };
obje1 = [];
obje1 = /.*/;