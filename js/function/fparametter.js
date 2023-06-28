"use strict";
function sing(song) {
    console.log(`Singing: ${song}!`);
}
//============ Required Parameters =====================
function singTwo(first, second) {
    console.log(`${first} / ${second}`);
}
singTwo("I Will Survive", "Higher Love");
// Ok
function announceSong(song, singer) {
    console.log(`Song: ${song}`);
    if (singer) {
        console.log(`Singer: ${singer}`);
    }
}
announceSong("Greensleeves");
// Ok
announceSong("Greensleeves", undefined);
// Ok
announceSong("Chandelier", "Sia");
// Ok
function announceSongBy(song, singer) {
    /* ... */
}
//   announceSongBy("Greensleeves");
// Error: Expected 2 arguments, but got 1.
announceSongBy("Greensleeves", undefined);
// Ok
announceSongBy("Chandelier", "Sia");
// Ok
function rateSong(song, rating = 0) {
    console.log(`${song} gets ${rating}/5 stars!`);
}
rateSong("Photograph");
// Ok
rateSong("Set Fire to the Rain", 5);
// Ok
rateSong("Set Fire to the Rain", undefined);
// Ok
//=============== Rest Parameters ================
function singAllTheSongs(singer, ...songs) {
    for (const song of songs) {
        console.log(`${song}, by ${singer}`);
    }
}
singAllTheSongs("Alicia Keys");
// Ok
singAllTheSongs("Lady Gaga", "Bad Romance", "Just Dance", "Poker Face");
// Ok
