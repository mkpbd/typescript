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
