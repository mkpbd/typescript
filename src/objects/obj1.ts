const poet = {
    born: 1935,
    name: "Mary Oliver",
};
poet["born"];
// Type: number

//+++++++ Aliased Object Types ========
let poetLater: {
    born: number;
    name: string;
};
// Ok
poetLater = {
    born: 1935,
    name: "Mary Oliver",
};



type Poet = {
    born: number;
    name: string;
};

let poetLater1: Poet;
poetLater1 = {
    born: 1990,
    name: "Mostofa kamal "
}

//======= Structural Typing ===========

type WithFirstName = {
    firstName: string;
};
type WithLastName = {
    lastName: string;
};
const hasBoth = {
    firstName: "Lucille",
    lastName: "Clifton",
};
// Ok: `hasBoth` contains a `firstName` property of type `string`
let withFirstName: WithFirstName = hasBoth;
let WithLastName: WithLastName = hasBoth;



type FirstAndLastNames = {
    first: string;
    last: string;
};
// Ok
const hasBoth1: FirstAndLastNames = {
    first: "Sarojini",
    last: "Naidu",
};
//   const hasOnlyOne: FirstAndLastNames = {
//     first: "Sappho",
//   };
// Property 'last' is missing in type '{ first: string; }'
// but required in type 'FirstAndLastNames'.




type Poet1 = {
    born: number;
    name: string;
};
// Ok: all fields match what's expected in Poet
const poetMatch: Poet1 = {
    born: 1928,
    name: "Maya Angelou",
};
const extraProperty: Poet1 = {
    // activity: "walking",
    born: 1935,
    name: "Mary Oliver",
};

const existingObject = {
    activity: "walking",
    born: 1935,
    name: "Mary Oliver",
};

const extraPropertyButOk: Poet = existingObject;



//================= nested objects =================

type Poem = {
    author: {
        firstName: string;
        lastName: string;
    };
    name: string;
};
const poemMatch: Poem = {
    author: {
        firstName: "Sylvia",
        lastName: "Plath",
    },
    name: "Lady Lazarus",
};
