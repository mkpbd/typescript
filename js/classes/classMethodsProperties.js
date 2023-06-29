"use strict";
class RandomQuote {
    constructor() {
        this.explicit = "Home is the nicest word there is.";
        this.implicit = "Home is the nicest word there is.";
        if (Math.random() > 0.5) {
            this.explicit = "We start learning the minute we're born.";
            // Ok;
            //     this.implicit = "We start learning the minute we're born.";
            // Error: Type '"We start learning the minute we're born."' is
            // not assignable to type '"Home is the nicest word there is."'.
        }
    }
}
// const quote = new RandomQuote();
