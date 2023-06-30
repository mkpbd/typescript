"use strict";
//Prefer Modules Over Namespaces
Object.defineProperty(exports, "__esModule", { value: true });
exports.describe = exports.version = exports.name = void 0;
exports.name = "My Application";
exports.version = "1.2.3";
// settings/describe.ts
function describe() {
    return `${Settings.name} at version ${Settings.version}`;
}
exports.describe = describe;
console.log("Initializing", describe());
