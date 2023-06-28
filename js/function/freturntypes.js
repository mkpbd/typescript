"use strict";
// Type: (songs: string[]) => number
function singSongs(songs) {
    for (const song of songs) {
        console.log(`${song}`);
    }
    return songs.length;
}
// Type: (songs: string[], index: number) => string | undefined
function getSongAt(songs, index) {
    return index < songs.length ? songs[index] : undefined;
}
function singSongsRecursive(songs, count = 0) {
    return songs.length ? singSongsRecursive(songs.slice(1), count + 1) : count;
}
/// For arrow functions (also known as lambdas), that falls just before the =>:
const singSongsRecursive1 = (songs, count = 0) => songs.length ? singSongsRecursive1(songs.slice(1), count + 1) : count;
function getSongRecordingDate(song) {
    switch (song) {
        case "Strange Fruit":
            return new Date("April 20, 1939");
        // Ok
        case "Greensleeves":
            return;
            "unknown";
        // Error: Type 'string' is not assignable to type 'Date'.
        default:
            return undefined;
        // Ok
    }
}
// Function types
let inputAndOutput;
let nothingToGiven;
const songs = ["Juice", "Shake It Off", "What's Up"];
function runOnSongs(getSongAt) {
    for (let i = 0; i < songs.length; i += 1) {
        console.log(getSongAt(i));
    }
}
function getSongAts(index) {
    return `${songs[index]}`;
}
runOnSongs(getSongAts);
// Ok
//================== Function Type Parentheses ========================
// Type is a function that returns a union: string | undefined
let returnsStringOrUndefined;
// Type is either undefined or a function that returns a string
let maybeReturnsString;
//========================= Parameter Type Inferences ========================
let singer;
singer = function (song) {
    // Type of song: string
    return `Singing: ${song.toUpperCase()}!`;
    // Ok
};
let stringToNumber;
stringToNumber = (input) => input.length;
function usesNumberToString(numberToString) {
    console.log(`The string is: ${numberToString(1234)}`);
}
usesNumberToString((input) => `${input}! Hooray!`);
// Ok
