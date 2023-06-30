namespace Randomized {
    const value = Math.random();
    console.log(`My value is ${value}`);
}


namespace Settings {
    export const name = "My Application";
    export const version = "1.2.3";
    export function describe() {
        return `${Settings.name} at version ${Settings.version}`;
    }
    console.log("Initializing", describe());
}
console.log("Initialized", Settings.describe());
