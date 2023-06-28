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
