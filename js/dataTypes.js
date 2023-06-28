"use strict";
let rocker; // Type: any
rocker = "Joan Jett"; // Type: string
rocker.toUpperCase(); // Ok
rocker = 19.58; // Type: number
rocker.toPrecision(1); // Ok
//This type annotation indicates the rocker variable is meant to be type string:
let rocker1;
rocker1 = "Joan Jett";
//========== Unnecessary Type Annotations ===========
let firstName = "Tina";
// ~~~~~~~~ Does not change the type system...
let cher = {
    firstName: "Cherilyn",
    lastName: "Sarkisian",
};
// cher.middleName;
