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

//============== Explicit Object-Type Unions =========

type PoemWithPages = {
    name: string;
    pages: number;
};
type PoemWithRhymes = {
    name: string;
    rhymes: boolean;
};
type Poem1 = PoemWithPages | PoemWithRhymes;
const poem: Poem1 =
    Math.random() > 0.5
        ? {
            name: "The Double Image",
            pages: 7,
        }
        : {
            name: "Her Kind",
            rhymes: true,
        };

type PoemWithPages1 = {
    name: string;
    pages: number;
    type: "pages";
};

type PoemWithRhymes1 = { name: string; rhymes: boolean; type: "rhymes" };
type Poem2 = PoemWithPages1 | PoemWithRhymes1;
const poem1: Poem2 =
    Math.random() > 0.5
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
// if (poem.type === "pages") {
//     console.log(`It's got pages: ${poem.pages}`);
//     // Ok
// } else {
//     console.log(`It rhymes: ${poem.rhymes}`);
// }
// poem2.type;
//           // Type: 'pages' | 'rhymes'

//====================== Intersection Types ====================


type Artwork = {
    genre: string;
    name: string;
};
type Writing = {
    pages: number;
    name: string;
};

type WrittenArt = Artwork | Writing
// Equivalent to:
// {
// genre: string;
// name: string;
// pages: number;
// }


type ShortPoem = {
    author: string;
} & (
        | {
            kigo: string;
            type: "haiku";
        }
        | {
            meter: number;
            type: "villanelle";
        }
    );
// Ok
const morningGlory: ShortPoem = {
    author: "Fukuda Chiyo-ni",
    kigo: "Morning Glory",
    type: "haiku",
};
// const oneArt1: ShortPoem = {
//     author: "Elizabeth Bishop",
//     meter: 'Medium',

//     type: "villanelle",

// };


type ShortPoemBase = {
    author: string;
};
type Haiku = ShortPoemBase & {
    kigo: string;
    type: "haiku";
};
type Villanelle = ShortPoemBase & {
    meter: number;
    type: "villanelle";
};
type ShortPoem3 = Haiku | Villanelle;
//   const oneArt2: ShortPoem3 = {
//     author: "Elizabeth Bishop",
//     type: "villanelle",
//   };
