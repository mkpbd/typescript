"use strict";
class Cats {
    constructor() {
        this.name = "Cats";
    }
    eat(food) {
        console.info('Ate some', food, '. Mmm!');
    }
    sleep(hours) {
        console.info('Slept for', hours, 'hours');
    }
}
class CatFile {
    constructor() {
        this.name = 'Whiskers';
    }
    eat(food) {
        console.info('Ate some', food, '. Mmm!');
    }
    sleep(hours) {
        console.info('Slept for', hours, 'hours');
    }
    meow() {
        console.info('Meow');
    }
}
class StringDatabase {
    constructor() {
        this.state = {};
    }
    get(key) {
        return key in this.state ? this.state[key] : null;
    }
    set(key, value) {
        this.state[key] = value;
    }
    static from(state) {
        let db = new StringDatabase;
        for (let key in state) {
            db.set(key, state[key]);
        }
        return db;
    }
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
