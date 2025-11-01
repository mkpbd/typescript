// TypeScript Type Aliases and Interfaces

// TypeScript allow Types to be defined separately  the variables that use them

// Aliases and interfaces  allows types to be easily  shared between  different variables / objects

// Type Aliases 

// type aliases  allow defining types with a custom name an alias

// Type Aliases can be used for primitive like string or more complex types such as objects and arrays


type  CarYear = number;
type CarType = string ;
type CarModel = string ;


type Car ={
    year: CarYear,
    carType: CarType,
    model: CarModel
}


const  carw : Car = {
    year : 199,
    carType : 'CarType',
    model : 'CarModel'
}