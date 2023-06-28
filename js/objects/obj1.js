"use strict";
const poet = {
    born: 1935,
    name: "Mary Oliver",
};
poet["born"];
// Type: number
//+++++++ Aliased Object Types ========
let poetLater;
// Ok
poetLater = {
    born: 1935,
    name: "Mary Oliver",
};
let poetLater1;
poetLater1 = {
    born: 1990,
    name: "Mostofa kamal "
};
const hasBoth = {
    firstName: "Lucille",
    lastName: "Clifton",
};
// Ok: `hasBoth` contains a `firstName` property of type `string`
let withFirstName = hasBoth;
let WithLastName = hasBoth;
// Ok
const hasBoth1 = {
    first: "Sarojini",
    last: "Naidu",
};
// Ok: all fields match what's expected in Poet
const poetMatch = {
    born: 1928,
    name: "Maya Angelou",
};
const extraProperty = {
    // activity: "walking",
    born: 1935,
    name: "Mary Oliver",
};
const existingObject = {
    activity: "walking",
    born: 1935,
    name: "Mary Oliver",
};
const extraPropertyButOk = existingObject;
const poemMatch = {
    author: {
        firstName: "Sylvia",
        lastName: "Plath",
    },
    name: "Lady Lazarus",
};
const poem = Math.random() > 0.5
    ? {
        name: "The Double Image",
        pages: 7,
    }
    : {
        name: "Her Kind",
        rhymes: true,
    };
const poem1 = Math.random() > 0.5
    ? {
        name: "The Double Image",
        pages: 7,
        type: "pages",
    }
    : {
        name: "Her Kind",
        rhymes: true,
        type: "rhymes",
    };
// Ok
const morningGlory = {
    author: "Fukuda Chiyo-ni",
    kigo: "Morning Glory",
    type: "haiku",
};
//   const oneArt2: ShortPoem3 = {
//     author: "Elizabeth Bishop",
//     type: "villanelle",
//   };
