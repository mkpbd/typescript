function filter(array: number[] | string[], f: Function) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        let item = array[i]
        if (f(item)) {
            result.push(item)
        }
    }
    return result
}
filter([1, 2, 3, 4], (_: number) => _ < 3) // evaluates to [1, 2]

type Filter = {
    //(array: unknown, f: unknown) => unknown[]
}
type Filter2 = {
    (array: number[], f: (item: number) => boolean): number[]
}

type Filter3 = {
    (array: number[], f: (item: number) => boolean): number[]
    (array: string[], f: (item: string) => boolean): string[]
}

type Filter5 = {
    (array: number[], f: (item: number) => boolean): number[]
    (array: string[], f: (item: string) => boolean): string[]
    (array: object[], f: (item: object) => boolean): object[]
}

let names = [
    { firstName: 'beth' },
    { firstName: 'caitlyn' },
    { firstName: 'xin' }
]

//let filter4: Filter = (array: T[], f) => // ...
// (a) T is bound to number
filter([1, 2, 3], (_: number) => _ > 2)
// (b) T is bound to string
filter(['a', 'b'], (_: string) => _ !== 'b')
// (c) T is bound to {firstName: string}

//filter(names, _ => _.firstName.startsWith('b'))