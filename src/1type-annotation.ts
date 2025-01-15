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
};

function printPerson(person: TPerson) {
  console.log(person.name, person.age);
}
// All works
printPerson({ name: "kamal", age: 33 });

type User = {
  name: string;
  age: number;
  id: number;
};
function printPerson1(person: Person) {
  console.log(person.name, person.age);
}
const user: User = {
  name: "Stefan",
  age: 40,
  id: 815,
};
printPerson(user); // works!

type Studying = {
  semester: number;
};
type Student = {
  id: string;
  age: number;
  semester: number;
};

function createPerson3() {
  return { name: "Stefan", age: 39, semester: 25, id: "XPA" };
}

function studyForAnotherSemester(student: Studying) {
  student.semester++;
}
function isLongTimeStudent(student: Student) {
  return student.age - student.semester / 2 > 30 && student.semester > 20;
}
const me = createPerson3();
// All work!
printPerson(me);
studyForAnotherSemester(me);
isLongTimeStudent(me);

/*************************************************************** Working with any and unknown ********************************************/

// Both any and unknown are top types, which means that every value is compatible with any or unknown:
const names: any = "Stefan";
const person: any = { name: "Stefan", age: 40 };
const notAvailable: any = undefined;

function printPerson4(person: Person) {
  for (let key in person) {
    console.log(`${key}: ${person[key as keyof Person]}`);
  }
}

/*==================== Choosing the Right Object Type ============== */

// there are three different object types: object, Object, and {}. Which one should you use?

/// Use object for compound types like objects, functions, and arrays. Use {} for everything that has a value.

let obj: {}; // Similar to Object
obj = 32;
obj = "Hello";
obj = true;
obj = () => {
  console.log("Hello");
};
//obj = undefined; // Error
//obj = null; // Error
obj = { name: "Stefan", age: 40 };
obj = [];
obj = /.*/;

let okObj: {} = {
  toString() {
    return false;
  },
}; // OK

// let objs: Object = {
// toString() {
// return false;
// }
// // ^- Type 'boolean' is not assignable to type 'string'.ts(2322)
// }





//Object can cause some confusion due to this behavior, so in most cases, you’re good with {}.

let lobj: object;
// lobj = 32; // Error
// lobj = "Hello"; // Error
// lobj = true; // Error
lobj = () => { console.log("Hello") };
// lobj = undefined; // Error
// lobj = null; // Error
lobj = { name: "Stefan", age: 40 };
lobj = [];
lobj = /.*/;