function squareOf(n: number) {
    return n * n
}
squareOf(2) // evaluates to 4

// any Tyes 
let ab: any = 666 // any
let ba: any = ['danger'] // any
let ca = a + b // any

// unknown types
let a1: unknown = 30 // unknown
let b1 = a1 === 123 // boolean
// let c1 = a1 + 10 // Error TS2571: Object is of type 'unknown'.
if (typeof a1 === 'number') {
let d = a1 + 10 // number
}

// boolean 
//The boolean type has two values: true and false. You can compare them (with ==,
  //  ===, ||, &&, and ?), negate them (with !), and not much else. Use boolean like this:

  let a2 = true // boolean
var b2 = false // boolean
const c2 = true // true
let d2: boolean = true // boolean
let e2: true = true // true
// let f2: true = false // Error TS2322: Type 'false' is not assignable  to type 'true'.

// number

let an = 1234 // number
var bn = Infinity * 0.10 // number
const cn = 5678 // 5678
let dn = an < bn // boolean
let en: number = 100 // number
let fn: 26.218 = 26.218 // 26.218
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