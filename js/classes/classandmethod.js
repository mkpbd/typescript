"use strict";
class Greeter {
    constructor(message) {
        console.log(`As I always say: ${message}!`);
    }
    greet(name) {
        console.log(`${name}, do your stuff!`);
    }
}
new Greeter("abc").greet("Miss Frizzle");
// Ok
class FieldTrip {
    constructor(destination) {
        this.destination = destination;
        // Ok
        console.log(`We're going to ${this.destination}!`);
        //   this.nonexistent = destination;
        // ~~~~~~~~~~~
        // Error: Property 'nonexistent' does not exist on type 'FieldTrip'.
    }
}
const trip = new FieldTrip("planetarium");
trip.destination;
// Ok
class WithMethod {
    myMethod() { }
}
new WithMethod().myMethod === new WithMethod().myMethod;
// true
class WithPropertyParameters {
    constructor() {
        this.takesParameters = (input) => (input ? "Yes" : "No");
    }
}
const instance = new WithPropertyParameters();
class WithValue {
    // Ok (allowed to be undefined)
    //  unused: number;
    // Error: Property 'unused' has no initializer
    // and is not definitely assigned in the constructor.
    constructor() {
        this.immediate = 0;
        this.later = 1;
        this.abc = 3;
    }
}
class ActivitiesQueue {
    // Ok
    initialize(pending) {
        this.pending = pending;
    }
    next() {
        return;
        this.pending.pop();
    }
}
const activities = new ActivitiesQueue();
activities.initialize(["eat", "sleep", "learn"]);
activities.next();
class MissingInitializer {
}
new MissingInitializer().property?.length;
// Ok
class Quote {
    constructor(text) {
        this.text = "";
    }
    emphasize() {
        // this.text += "!";
        // ~~~~
        // Error: Cannot assign to 'text' because it is a read-only property.
    }
}
const quote = new Quote("There is a brilliant child locked inside every student.");
// Quote.text = "Ha!";
