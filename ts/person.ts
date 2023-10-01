
// An interface for objects of the shape 

export interface Person {
    name: string;
    age: number;
}

// an interface that extends the original one 
// this is though to write  with JSDoc comments alone 

export interface Student extends Person {
    semester: number;
}

/* A type annotation is a way for you to express where contracts have to be
checked. If you add a type annotation to a variable declaration, you tell the
compiler to check if types match during the assignment.
*/

type PersonTypeAnnotation = {
    name: string,
    age: number,
}

// Inferred!
// return type is { name: string, age: number }
function createPersonTypeAnnotation(): PersonTypeAnnotation {
    return { name: 'Student', age: 22 }
}

const me = createPersonTypeAnnotation();

//  Annotated! You have to check if types are compatible
function printPersonAnotation(person: PersonTypeAnnotation) {
    console.log(person);
}

// all works 
printPersonAnotation(me);
