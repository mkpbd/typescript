class Secret<Key, Value> {
    key: Key;
    value: Value;
    constructor(key: Key, value: Value) {
        this.key = key;
        this.value = value;
    }
    getValue(key: Key): Value | undefined {
        return;
        this.key === key ? this.value : undefined;
    }
}

const storage = new Secret(12345, "luggage");
// Type: Secret<number, string>
storage.getValue(1987);
// Type: string | undefined


class CurriedCallback<Input> {
    #callback: (input: Input) => void;
    constructor(callback: (input: Input) => void) {
        this.#callback = (input: Input) => {
            console.log("Input:", input);
            callback(input);
        };
    }
    call(input: Input) {
        this.#callback(input);
    }
}
// Type: CurriedCallback<string>
new CurriedCallback((input: string) => {
    console.log(input.length);
});
// Type: CurriedCallback<unknown>
new CurriedCallback((input) => {
    //  console.log(input.length);
    // ~~~~~~
    // Error: Property 'length' does not exist on type 'unknown'.
});


//============== Extending Generic Classes ============

class Quote1<T> {
    lines: T;
    constructor(lines: T) {
        this.lines = lines;
    }
}
class SpokenQuote extends Quote1<string[]> {
    speak() {
        console.log(this.lines.join("\n"));
    }
}
new Quote1("The only real failure is the failure to try.").lines;
// Type:string;
new Quote1([4, 8, 15, 16, 23, 42]).lines;
// Type: number[]
new SpokenQuote(["Greed is so destructive.", "It destroys everything"]).lines;
// Type: string[]
//   new SpokenQuote([4, 8, 15, 16, 23, 42]);
// ~~~~~~~~~~~~~~~~~~~~~~


class AttributedQuote<Value> extends Quote1<Value> {
    speaker: string;
    constructor(value: Value, speaker: string) {
        super(value);
        this.speaker = speaker;
    }
}
// Type: AttributedQuote<string>
// (extending Quote<string>)
new AttributedQuote(
    "The road to success is always under construction.",
    "Lily Tomlin"
);
