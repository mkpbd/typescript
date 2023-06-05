"use strict";
// person is an object types we pass parameter 
function greet(person) {
    return "Hello " + person.name;
}
greet({ name: "kamal", age: 33 });
function greetInterfaceForObject(person) {
    return "Hello " + person.name;
}
greetInterfaceForObject({ name: 'jamal', age: 55 });
// or a type alias: using for object type pass
