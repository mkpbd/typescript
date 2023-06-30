//Prefer Modules Over Namespaces

export const name = "My Application";
export const version = "1.2.3";
// settings/describe.ts
export function describe() {
    return `${Settings.name} at version ${Settings.version}`;
}
console.log("Initializing", describe());
