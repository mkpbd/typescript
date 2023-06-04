"use strict";
// Type Annotations on Variables
let myName = "Alice";
// No type annotation needed -- 'myName' inferred as type 'string'
let myName1 = "Alice";
// Functions
/* Parameter Type Annotations
When you declare a function, you can add type annotations after each parameter to declare what types of parameters the function accepts. Parameter type annotations go after the parameter name:

*/
// Parameter type annotation
function greet5(name) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}
/**
 *
 *
 * Return Type Annotations
You can also add return type annotations. Return type annotations appear after the parameter list:

*/
function getFavoriteNumber() {
    return 26;
}
