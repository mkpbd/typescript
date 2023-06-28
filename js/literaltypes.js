"use strict";
let lifespan;
lifespan = 89;
// Ok
lifespan = "ongoing";
// Ok
const philosopher = "Hypatia";
let specificallyAda;
specificallyAda = "Ada"; // Ok
//specificallyAda = "Byron";
// Error: Type '"Byron"' is not assignable to type '"Ada"'.
let someString = "";
// Type: string
//specificallyAda = someString;
// Error: Type 'string' is not assignable to type '"Ada"'.
const firstName1 = "First Name";
let geneticist = Math.random() > 0.5 ? "Barbara McClintock" : undefined;
geneticist && geneticist.toUpperCase();
// Ok: string | undefined
geneticist?.toUpperCase();
// Ok: string | undefined
let biologist = Math.random() > 0.5 && "Rachel Carson";
if (biologist) {
    biologist;
    // Type: string
}
else {
    biologist;
    // Type: false | string
}
//=============== Variables Without Initial Values ========
let mathematician1;
//mathematician1?.length;
// Error: Variable 'mathematician' is used before being assigned.
mathematician1 = "Mark Goldberg";
mathematician1.length;
// Ok
let mathematician2;
mathematician2?.length;
// Ok
mathematician2 = "Mark Goldberg";
mathematician2.length;
// Ok
//============ Type Aliases ================
let rawDataFirst;
let rawDataSecond;
let rawDataThird;
let rawDataFirst1;
let rawDataSecond1;
let rawDataThird1;
