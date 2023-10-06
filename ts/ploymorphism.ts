//so far in this book we've been  talking

// boolean
// string
// Date[]
//{a:number}|{b:string}
// (number : number[]) => number


function filter(array: any, f: any) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (f(item)) result.push(item);
    }
    return result;
}

// filter([2, 3, 4, 5, 6], _ => _ < 3);


type FilterNumber = {
    (array: number[], f: (item: number) => boolean): number[];
}

type FilterNumberString = {
    (array: number[], f: (item: number) => boolean): number[];
    (array: string[], f: (item: string) => boolean): string[];
}

type FilterNumberStringObject = {
    (array: number[], f: (item: number) => boolean): number[];
    (array: string[], f: (item: string) => boolean): string[];
    (array: object[], f: (item: object) => boolean): object[];
}
// Generic type parameter


type FilterWithGeneric = {
    <T>(array: T[], f: (item: T) => boolean): T[];
}

let filterGenericUse: FilterWithGeneric = (array, f) => { console.log(array,); return array; };
filterGenericUse([2, 3, 4, 5, 6, 7], _ => _ > 2);


function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
}
console.log(createPair<string, number>('hello', 42)); // ['hello', 42]


function identity<T>(arg: T): T {
    return arg;

}


let output = identity<string>("hello Bangladesh");


function loggingIdentity<Type>(arg: Type): Type {
    console.log(arg);
    return arg;
}


loggingIdentity<string>("hello banadesh");


function loggingIdentity2<Type>(arg: Array<Type>): Array<Type> {
    console.log(arg.length);
    return arg;
}


// Generic  Types

function identity1<Type>(arg: Type): Type {

    return arg;
}


let myItems: <Type>(arg: Type) => Type = identity1

function identity3<Input>(arg: Input): Input {
    return arg;
}

let myIdentity: <Input>(arg: Input) => Input = identity;