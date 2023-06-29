class RandomQuote {
    readonly explicit: string = "Home is the nicest word there is.";
    readonly implicit = "Home is the nicest word there is.";
    constructor() {
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
