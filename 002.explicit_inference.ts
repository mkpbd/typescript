// Explicit type Annotation 

// string 
let greeting : string = "hello Typescript";
// Number 

useCount : number : 42;

// Boolean 

let isLoading: Boolean = true;
// array of number

let scores: number[] = [30,40,20, 50]

// Best practices  Use Explicit types of function parameters and return types to make your code more maintainable and self-documenting

// function with  explicity Types 

function  greet(name: string): string{
    return name;
}

// Type inference 

let userName = "mostofa kamal";

let myage = 66;
let  flag = [4,5,6,7,8,9];

// typescript infers return type as number 

function add (a:number , b: number){
    return a+b;
}