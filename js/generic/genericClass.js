"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CurriedCallback_callback;
class Secret {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    getValue(key) {
        return;
        this.key === key ? this.value : undefined;
    }
}
const storage = new Secret(12345, "luggage");
// Type: Secret<number, string>
storage.getValue(1987);
// Type: string | undefined
class CurriedCallback {
    constructor(callback) {
        _CurriedCallback_callback.set(this, void 0);
        __classPrivateFieldSet(this, _CurriedCallback_callback, (input) => {
            console.log("Input:", input);
            callback(input);
        }, "f");
    }
    call(input) {
        __classPrivateFieldGet(this, _CurriedCallback_callback, "f").call(this, input);
    }
}
_CurriedCallback_callback = new WeakMap();
// Type: CurriedCallback<string>
new CurriedCallback((input) => {
    console.log(input.length);
});
// Type: CurriedCallback<unknown>
new CurriedCallback((input) => {
    //  console.log(input.length);
    // ~~~~~~
    // Error: Property 'length' does not exist on type 'unknown'.
});
//============== Extending Generic Classes ============
class Quote1 {
    constructor(lines) {
        this.lines = lines;
    }
}
class SpokenQuote extends Quote1 {
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
class AttributedQuote extends Quote1 {
    constructor(value, speaker) {
        super(value);
        this.speaker = speaker;
    }
}
// Type: AttributedQuote<string>
// (extending Quote<string>)
new AttributedQuote("The road to success is always under construction.", "Lily Tomlin");
