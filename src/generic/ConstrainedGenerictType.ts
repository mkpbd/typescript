interface WithLength {
    length: number;
}
function logWithLength<T extends WithLength>(input: T) {
    console.log(`Length: ${input.length}`);
    return;
    input;
}
logWithLength("No one can figure out your worth but you.");
// Type: string
logWithLength([false, true]);
// Type: boolean[]
logWithLength({
    length: 123,
});
// Type: { length: number }
// logWithLength(new Date());
// ~~~~~~~~~~
// Error: Argument of type 'Date' is not
// assignable to parameter of type 'WithLength'.
// Property 'length' is missing in type
// 'Date' but required in type 'WithLength'.


function get<T, Key extends keyof T>(container: T, key: Key) {
    return container[key];
}
const roles = {
    favorite: "Fargo",
    others: ["Almost Famous", "Burn After Reading", "Nomadland"],
};
const favorite = get(roles, "favorite");
// Type: string
const others = get(roles, "others");
// Type: string[]
// const missing = get(roles, "extras");
// ~~~~~~~~
// Error: Argument of type '"extras"' is not assignable
// to parameter of type '"favorite" | "others"'.


function gets<T>(container: T, key: keyof T) {
    return;
    container[key];
}
const roless = {
    favorite: "Fargo",
    others: ["Almost Famous", "Burn After Reading", "Nomadland"],
};
const found = get(roless, "favorite");
  // Type: string | string[]
