class Base {
    isPublicImplicit = 0;
    public isPublicExplicit = 1;
    protected isProtected = 2;
    private isPrivate = 3;
    #truePrivate = 4;
}

class Subclass extends Base {
    examples() {
        this.isPublicImplicit;
        // Ok
        this.isPublicExplicit;
        // Ok
        this.isProtected;
        // Ok
        // this.isPrivate;
        // Error: Property 'isPrivate' is private
        // and only accessible within class 'Base'.
        //   this.#truePrivate;
        // Property '#truePrivate' is not accessible outside
        // class 'Base' because it has a private identifier.
    }
}
new Subclass().isPublicImplicit;
// Ok
new Subclass().isPublicExplicit;
// Ok

class TwoKeywords {
    private readonly name: string;
    constructor() {
        this.name = "Anne Sullivan";
        // Ok
    }
    log() {
        console.log(this.name);
        // Ok
    }
}
const two = new TwoKeywords();

class Question {
    protected static readonly answer: "bash";
    protected static readonly prompt = "What's an ogre's favorite programming language?";
    guess(getAnswer: (prompt: string) => string) {
        const answer = getAnswer(Question.prompt);
        // Ok
        if (answer === Question.answer) {
            console.log("You got it!");
        } else {
            console.log("Try again...");
        }
    }
}

