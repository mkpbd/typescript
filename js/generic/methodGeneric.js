"use strict";
class CreatePairFactory {
    constructor(key) {
        this.key = key;
    }
    createPair(value) {
        return {
            key: this.key, value
        };
    }
}
// Type: CreatePairFactory<string>
const factory = new CreatePairFactory("role");
// Type: { key: string, value: number }
const numberPair = factory.createPair(10);
// Type: { key: string, value: string }
const stringPair = factory.createPair("Sophie");
class BothLogger {
    instanceLog(value) {
        console.log(value);
        return;
        value;
    }
    static staticLog(value) {
        // let fromInstance: OnInstance;
        // ~~~~~~~~~~
        // Error: Static members cannot reference class type arguments.
        console.log(value);
        return value;
    }
}
const logger = new BothLogger();
logger.instanceLog([1, 2, 3]);
// Type: number[]
// Inferred OnStatic type argument: boolean[]
BothLogger.staticLog([false, true]);
// Explicit OnStatic type argument: string
BothLogger.staticLog("You can't change the music of your soul.");
