"use strict";
//Without generics, we would either have to give the identity function a specific type:
function identity(arg) {
    return arg;
}
// Or, we could describe the identity function using the any type: 
function identityAny(arg) {
    return arg;
}
// Generic types use
function identityGen(arg) {
    return arg;
}
let output = identityGen("myString");
let outputNum = identityGen(55);
let outputObject = identityGen({ a: 'a', b: 3 });
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
function loggingIdentitys(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
function identityff(arg) {
    return arg;
}
let myIdentityf = identityff;
function identity1(arg) {
    return arg;
}
let myIdentity = identity1;
function identity2(arg) {
    return arg;
}
let myIdentity2 = identity2;
function identity3(arg) {
    return arg;
}
let myIdentity3 = identity3;
function identity4(arg) {
    return arg;
}
let myIdentity4 = identity4;
