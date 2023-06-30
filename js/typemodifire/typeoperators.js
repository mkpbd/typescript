"use strict";
// keyof
function getRating(ratings, key) {
    //return ratings[key];
    // ~~~~~~~~~~~
    // Error: Element implicitly has an 'any' type because expression
    // of type 'string' can't be used to index type 'Ratings'.
    // No index signature with a parameter of
    // type 'string' was found on type 'Ratings'.
    return ratings.critics;
}
const ratings = {
    audience: 66,
    critics: 84,
};
getRating(ratings, "audience");
// Ok
getRating(ratings, "not valid");
// Ok, but shouldn't be
function getRating1(ratings, key) {
    return ratings[key];
    // Ok
}
const ratings1 = {
    audience: 66,
    critics: 84,
};
getRating(ratings1, "audience");
// Ok
function getCountKeyof(ratings, key) {
    return ratings[key];
    // Ok
}
const ratings2 = {
    audience: 66,
    critics: 84,
};
getCountKeyof(ratings2, "audience");
// Ok
//====================== typeof ======================
const original = {
    medium: "movie",
    title: "Mean Girls",
};
let adaptation;
if (Math.random() > 0.5) {
    adaptation = {
        ...original,
        medium: "play",
    };
    // Ok
}
else {
    adaptation = {
        ...original,
        medium: "pp",
        // medium: 2,
    };
    // ~~~~~~
    // Error: Type 'number' is not assignable to type 'string'.
}
const ratings4 = {
    imdb: 8.5,
    metacritic: 82,
};
function logRating(key) {
    console.log(ratings4[key]);
}
logRating("imdb");
// Ok
//========== type assertions =================================
const rawData = `["grace", "frankie"]`;
// Type: any
JSON.parse(rawData);
// Type: string[]
JSON.parse(rawData);
// Type: [string, string]
JSON.parse(rawData);
// Type: ["grace", "frankie"]
JSON.parse(rawData);
function describePreference(preference) {
    switch (preference) {
        case "maybe":
            return "I suppose...";
        case "no":
            return "No thanks.";
        case "yes":
            return "Yes please!";
    }
}
// Type: { movie: string, standup: string }
const preferencesMutable = {
    movie: "maybe",
    standup: "yes",
};
