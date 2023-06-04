// string 

let firstName : string ;

firstName = "mostofa kamal passa";


// number 

let integerNumber : number;
integerNumber = 40;

// integerNumber = '';

// boolean 

let booleans : boolean;
booleans = true;
booleans = false;

// booleans = 1;


// null 

let nullbles : null;
// nullbles = "abc"

// undefined

let undefinedbles : undefined;

undefinedbles = undefined;
// undefinedbles = '';

let symbols : symbol;

symbols =  Symbol();
// symbols = 'hello';


// Any Types 

let anything : any;
anything = "jamal";
anything = 55;
anything = null;
anything = [];
anything = Symbol();

anything = {name:'a', age:44};

// we should avoid any type becuse we need a strongly type for our use

// ---------------- Array Types  ---------------------
let stringArrayes : string[];

stringArrayes = ["hello", "bangla", "desh"];

let numberArrayes : number[];
numberArrayes = [4,5,6,7,8,9];

let mixedArray : any[];

mixedArray = ["hello", 1, 3,4,5, null, undefined, Symbol()]



//  ------------- Object Types -------------------

let pp : object;

 pp = new Object({name:33, bb:"kamal"})


function greet(person:{name:string, age:number}){

    return person;
}

let person :{name:string, age: number} ;  // decalre type with object name and type
person  = {name: "kamal", age:55};

greet(person);


function greet1(persons:object){
    return persons;
}

greet1(person);



// Type of key

type Point = { x: number; y: number };
type P = keyof Point;

type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;

type Mapish = { [k: string]: boolean };
type M = keyof Mapish;

type  userDefinttypeString  = "jamal";
type  userDefinttypNumber  = 55;
type  userDefinttypeArray  = [2,3,4,"heello", null, undefined, boolean, object];
type  objetcreate = {name: "kamal", age: 33, };


type identification  = {name:"ksamal", address:{location:"a",  house:22}, distict:'zaipur' }




//-------------- hey can be named by using either an interface -------------

interface Person {
    name: string;
    age: number;
  }
   
  function greet3(person: Person) {
    return "Hello " + person.name;
  }