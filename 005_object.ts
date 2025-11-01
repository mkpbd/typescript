// TypeScript Object Types 

const car : {type:string , model: string , year: number} ={
    type: 'toyta',
    model:'Corolla',
    year:2009
}

// Object types like this can also be written separately, and even be reused, look at interfaces for more details.

// optional properties 

const myCar : {type: string, mileage?: number} ={
    type: 'toyta'
}

// Index Signature 

// index signatures can be used for object without a defined of properties 

const nameAgeMap : {[index: string]: number} = {}
nameAgeMap.kamal = 34,
nameAgeMap.jamal= 45