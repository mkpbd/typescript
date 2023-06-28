// Type: (songs: string[]) => number
function singSongs(songs: string[]) {
    for (const song of songs) {
        console.log(`${song}`);
    }
    return songs.length;
}


// Type: (songs: string[], index: number) => string | undefined
function getSongAt(songs: string[], index: number) {
    return index < songs.length ? songs[index] : undefined;
}


function singSongsRecursive(songs: string[], count = 0): number {
    return songs.length ? singSongsRecursive(songs.slice(1), count + 1) : count;
}
/// For arrow functions (also known as lambdas), that falls just before the =>:

const singSongsRecursive1 = (songs: string[], count = 0): number =>
    songs.length ? singSongsRecursive1(songs.slice(1), count + 1) : count;


function getSongRecordingDate(song: string): Date | undefined {
    switch (song) {
        case "Strange Fruit":
            return new Date("April 20, 1939");
        // Ok
        case "Greensleeves":
            return; "unknown";
        // Error: Type 'string' is not assignable to type 'Date'.
        default:
            return undefined;
        // Ok
    }
}


// Function types

let inputAndOutput: (songs: string[], count?: number) => number;


let nothingToGiven: () => string;

const songs = ["Juice", "Shake It Off", "What's Up"];
function runOnSongs(getSongAt: (index: number) => string) {
    for (let i = 0; i < songs.length; i += 1) {
        console.log(getSongAt(i));
    }
}
function getSongAts(index: number) {
    return `${songs[index]}`;
}
runOnSongs(getSongAts);
// Ok


//================== Function Type Parentheses ========================
// Type is a function that returns a union: string | undefined
let returnsStringOrUndefined: () => string | undefined;
// Type is either undefined or a function that returns a string
let maybeReturnsString: (() => string) | undefined;

//========================= Parameter Type Inferences ========================

let singer: (song: string) => string;
singer = function (song) {
    // Type of song: string
    return `Singing: ${song.toUpperCase()}!`;
    // Ok
};


//=============== Type alias =============================

type StringToNumber = (input: string) => number;
let stringToNumber: StringToNumber;
stringToNumber = (input) => input.length;
// Ok
type NumberToString = (input: number) => string;
function usesNumberToString(numberToString: NumberToString) {
    console.log(`The string is: ${numberToString(1234)}`);
}
usesNumberToString((input) => `${input}! Hooray!`);
// Ok


