//========== Union Types=========

let mathematician = Math.random() > 0.5 ? undefined : "Mark Goldberg";

/**
 * 
 * It’s neither only undefined nor only string, even though those are both potential types. mathematician can be either
 * undefined or string. This kind of “either or” type is called a union. Union types are a wonderful
concept that let us handle code cases where we don’t know exactly which
type a value is, but do know it’s one of two or more options.
 * 
 */

//========= Declaring Union Types =========

let thinker: string | undefined;

if (Math.random() > .5) {
    thinker = "kamal is a thinker";
}



//======================= Narrowing =================
// Assignment Narrowing
let admiral: number | string;
admiral = "Grace Hopper";
admiral.toUpperCase();
// Ok: string
//admiral.toFixed();
// ~~~~~~~
// Error: Property 'toFixed' does not exist on type 'string'.

let inventor: number | string = "Hedy Lamarr";
inventor.toUpperCase();
// Ok: string
// inventor.toFixed();


//================= Conditional Checks ===============
// Type of scientist: number | string
let scientist = Math.random() > 0.5 ? "Rosalind Franklin" : 51;
if (scientist === "Rosalind Franklin") {
    // Type of scientist: string
    scientist.toUpperCase();
    // Ok
}

//================== Typeof Checks ===================

let researcher = Math.random() > 0.5 ? "Rosalind Franklin" : 51;
if (typeof researcher === "string") {
    researcher.toUpperCase();
    // Ok: string
}

//=================== Logical negations from ! and else statements work as well =============

if (!(typeof researcher === "string")) {
    researcher.toFixed();
    // Ok: number
} else {
    researcher.toUpperCase();
    // Ok: string
}
// those code type  ternary operators
typeof researcher === "string"
    ? researcher.toUpperCase()
    : // Ok: string
    researcher.toFixed();
// Ok: number
