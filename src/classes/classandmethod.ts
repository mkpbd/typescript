class Greeter {
    constructor(message: string) {
        console.log(`As I always say: ${message}!`);
    }
    greet(name: string) {
        console.log(`${name}, do your stuff!`);
    }
}
new Greeter("abc").greet("Miss Frizzle");
// Ok
class FieldTrip {
    destination: string;
    constructor(destination: string) {
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
    takesParameters = (input: boolean) => (input ? "Yes" : "No");
}
const instance = new WithPropertyParameters();


class WithValue {
    immediate = 0;
    // Ok
    later: number;
    // Ok (set in the constructor)
    abc: number;
    mayBeUndefined: number | undefined;
    // Ok (allowed to be undefined)
    //  unused: number;
    // Error: Property 'unused' has no initializer
    // and is not definitely assigned in the constructor.

    constructor() {
        this.later = 1;
        this.abc = 3;
    }
}



class ActivitiesQueue {
    pending!: string[];
    // Ok
    initialize(pending: string[]) {
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
    property?: string;
}
new MissingInitializer().property?.length;
// Ok


class Quote {
    readonly text: string;
    constructor(text: string) {
        this.text = "";
    }
    emphasize() {

        // this.text += "!";
        // ~~~~
        // Error: Cannot assign to 'text' because it is a read-only property.
    }
}
const quote = new Quote(
    "There is a brilliant child locked inside every student."
);
// Quote.text = "Ha!";
