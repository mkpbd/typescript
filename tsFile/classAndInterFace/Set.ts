class Sets {
    has(value: number): boolean {
        // ...
        return true;
    }

    add(value: number): this {
        // ...
        return this;
    }
}


class MutableSet extends Sets {
    delete(value: number): boolean {
        // ...
        return true;
    }
    add1(value: number): MutableSet {
        // ...
        return this;
    }
}
/// Interfaces
type Sushi = {
    calories: number
    salty: boolean
    tasty: boolean
}

interface Sushi2 {
    calories: number
    salty: boolean
    tasty: boolean
}

type Cake = {
    calories: number
    sweet: boolean
    tasty: boolean
}

type Food = {
    calories: number
    tasty: boolean
}
type Sushi3 = Food & {
    salty: boolean
}
type Cake2 = Food & {
    sweet: boolean
}


interface Food2 {
    calories: number
    tasty: boolean
}
interface Sushi4 extends Food2 {
    salty: boolean
}
interface Cake22 extends Food2 {
    sweet: boolean
}

interface Aaa {
    good(x: number): string
    bad(x: number): string
}

//=========== Declaration Merging ========

// User has a single field, name
interface User {
    name: string
}
// User now has two fields, name and age
interface User {
    age: number
}
let a5: User = {
    name: 'Ashley',
    age: 30
}