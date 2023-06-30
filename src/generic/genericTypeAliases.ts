type Nullish<T> = T | null | undefined;

type CreatesValue<Input, Output> = (input: Input) => Output;
// Type: (input: string) => number
let creator: CreatesValue<string, number>;
creator = (text) => text.length;
// Ok
// creator = (text) => text.toUpperCase();
// ~~~~~~~~~~~~~~~~~~
// Error: Type 'string' is not assignable to type 'number'.



type Result<Data> = FailureResult | SuccessfulResult<Data>;
interface FailureResult {
    error: Error;
    succeeded: false;
}
interface SuccessfulResult<Data> {
    data: Data;
    succeeded: true;
}
function handleResult(result: Result<string>) {
    if (result.succeeded) {
        // Type of result: SuccessfulResult<string>
        console.log(`We did it! ${result.data}`);
    } else {
        // Type of result: FailureResult
        console.error(`Awww... ${result.error}`);
    }
    //   result.data;
    // ~~~~
}
