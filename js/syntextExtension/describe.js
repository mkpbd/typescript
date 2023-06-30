"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.describe = void 0;
const constants_1 = require("./constants");
function describe() {
    return `${constants_1.name} at version ${constants_1.version}`;
}
exports.describe = describe;
console.log("Initializing", describe());
