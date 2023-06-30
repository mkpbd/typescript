"use strict";
// Type: (input: string) => number
let creator;
creator = (text) => text.length;
function handleResult(result) {
    if (result.succeeded) {
        // Type of result: SuccessfulResult<string>
        console.log(`We did it! ${result.data}`);
    }
    else {
        // Type of result: FailureResult
        console.error(`Awww... ${result.error}`);
    }
    //   result.data;
    // ~~~~
}
