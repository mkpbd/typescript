interface Animal {
    eat(food: string): void
    sleep(hours: number): void
    readonly name: string
}
class Cats implements Animal {
    readonly name: string = "Cats";
    eat(food: string) {
        console.info('Ate some', food, '. Mmm!')
    }
    sleep(hours: number) {
        console.info('Slept for', hours, 'hours')
    }
}


interface Feline {
    meow(): void
}
class CatFile implements Animal, Feline {
    name = 'Whiskers'
    eat(food: string) {
        console.info('Ate some', food, '. Mmm!')
    }
    sleep(hours: number) {
        console.info('Slept for', hours, 'hours')
    }
    meow() {
        console.info('Meow')
    }
}



type State = {
    [key: string]: string
}
class StringDatabase {
    state: State = {}
    get(key: string): string | null {
        return key in this.state ? this.state[key] : null
    }
    set(key: string, value: string): void {
        this.state[key] = value
    }
    static from(state: State) {
        let db = new StringDatabase
        for (let key in state) {
            db.set(key, state[key])
        }
        return db
    }
}

interface StringDatabase {
    state: State
    get(key: string): string | null
    set(key: string, value: string): void
}

interface StringDatabaseConstructor {
    new(): StringDatabase
    from(state: State): StringDatabase
}


// class MyMap<K, V> {
//     constructor(initialKey: K, initialValue: V) {
//         // ...
//     }
//     get(key: K): V {
//         // ...


//     }
//     set(key: K, value: V): void {
//         // ...
//     }
//     merge<K1, V1>(map: MyMap<K1, V1>): MyMap<K | K1, V | V1> {
//         // ...
//     }
//     static of<K, V>(k: K, v: V): MyMap<K, V> {
//         // ...
//     }
// }