"use strict";
function squareOf(n) {
    return n * n;
}
squareOf(2); // evaluates to 4
// any Tyes 
var ab = 666; // any
var ba = ['danger']; // any
var ca = a + b; // any
// unknown types
var a1 = 30; // unknown
var b1 = a1 === 123; // boolean
// let c1 = a1 + 10 // Error TS2571: Object is of type 'unknown'.
if (typeof a1 === 'number') {
    var d = a1 + 10; // number
}
// boolean 
//The boolean type has two values: true and false. You can compare them (with ==,
//  ===, ||, &&, and ?), negate them (with !), and not much else. Use boolean like this:
var a2 = true; // boolean
var b2 = false; // boolean
var c2 = true; // true
var d2 = true; // boolean
var e2 = true; // true
// let f2: true = false // Error TS2322: Type 'false' is not assignable  to type 'true'.
// number
var an = 1234; // number
var bn = Infinity * 0.10; // number
var cn = 5678; // 5678
var dn = an < bn; // boolean
var en = 100; // number
var fn = 26.218; // 26.218
// let gn: 26.218 = 10 // Error TS2322: Type '10' is not assignable  to type '26.218'.
// bigint
//let abb = 1234n // bigint
//const bbb = 5678n // 5678n
//var cbb = abb + bbb // bigint
//let dbb = abb < 1235 // boolean
//let ebb = 88.5n // Error TS1353: A bigint literal must be an integer.
//let fbb: bigint = 100n // bigint
//let gbb: 100n = 100n // 100n
//let hbb: bigint = 100 // Error TS2322: Type '100' is not assignable  to type 'bigint'.
