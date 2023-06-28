let lifespan: number | "ongoing" | "uncertain";
lifespan = 89;
// Ok
lifespan = "ongoing";
// Ok

const philosopher = "Hypatia";
let specificallyAda: "Ada";
specificallyAda = "Ada";// Ok
//specificallyAda = "Byron";
// Error: Type '"Byron"' is not assignable to type '"Ada"'.
let someString = "";
// Type: string
//specificallyAda = someString;
// Error: Type 'string' is not assignable to type '"Ada"'.


const firstName1: string = "First Name";

let geneticist = Math.random() > 0.5 ? "Barbara McClintock" : undefined;

geneticist && geneticist.toUpperCase();
// Ok: string | undefined
geneticist?.toUpperCase();
// Ok: string | undefined

let biologist = Math.random() > 0.5 && "Rachel Carson";
if (biologist) {
    biologist;
    // Type: string
} else {
    biologist;
    // Type: false | string
}


//=============== Variables Without Initial Values ========
let mathematician1: string;
//mathematician1?.length;
// Error: Variable 'mathematician' is used before being assigned.
mathematician1 = "Mark Goldberg";
mathematician1.length;
// Ok


let mathematician2: string | undefined;
mathematician2?.length;
// Ok
mathematician2 = "Mark Goldberg";
mathematician2.length;
// Ok


//============ Type Aliases ================
let rawDataFirst: boolean | number | string | null | undefined;
let rawDataSecond: boolean | number | string | null | undefined;
let rawDataThird: boolean | number | string | null | undefined;


type RawData = boolean | number | string | null | undefined;
let rawDataFirst1: RawData;
let rawDataSecond1: RawData;
let rawDataThird1: RawData;

type Id = number | string;
type IdMaybe = Id | undefined | null;
