type Currency = {
    unit: 'EUR' | 'GBP' | 'JPY' | 'USD'
    value: number
}

// let Currency = {
//     DEFAULT: 'USD',
//     from(value: number, unit = Currency.DEFAULT): Currency {
//         return { unit, value }
//     }
// }

let amountDue: Currency = {
    unit: 'JPY',
    value: 83733.10
}

// let otherAmountDue = Currencies.from(330, 'EUR')s


//===== User-Defined Type Guards =========
function isString(a: unknown): boolean {
    return typeof a === 'string'
}

// function isString(a: unknown): a is string {
//     return typeof a === 'string'
// }

isString('a') // evaluates to true
isString([7]) // evaluates to false

function parseInput(input: string | number) {
    let formattedInput: string
    if (isString(input)) {
        // formattedInput = input.toUpperCase() // Error TS2339: Property 'toUpperCase'
    } // does not exist on type 'number'.
}

type ToArray<T> = T[]
type Abab = ToArray<number> // number[]
type Bbab = ToArray<number | string> // (number | string)[]

type ToArray2<T> = T extends unknown ? T[] : T[]
type Aca = ToArray2<number> // number[]
type Bbc = ToArray2<number | string> // number[] | string[]

type ElementType<T> = T extends unknown[] ? T[number] : T
type Acdc = ElementType<number[]> // number

type CompanyID = string
type OrderID = string
type UserID = string
type ID = CompanyID | OrderID | UserID