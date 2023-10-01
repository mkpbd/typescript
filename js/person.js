"use strict";
// An interface for objects of the shape 
Object.defineProperty(exports, "__esModule", { value: true });
// Inferred!
// return type is { name: string, age: number }
function createPersonTypeAnnotation() {
    return { name: 'Student', age: 22 };
}
const me = createPersonTypeAnnotation();
//  Annotated! You have to check if types are compatible
function printPersonAnotation(person) {
    console.log(person);
}
// all works 
printPersonAnotation(me);
