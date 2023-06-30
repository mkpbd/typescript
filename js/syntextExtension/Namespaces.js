"use strict";
var Randomized;
(function (Randomized) {
    const value = Math.random();
    console.log(`My value is ${value}`);
})(Randomized || (Randomized = {}));
var Settings;
(function (Settings) {
    Settings.name = "My Application";
    Settings.version = "1.2.3";
    function describe() {
        return `${Settings.name} at version ${Settings.version}`;
    }
    Settings.describe = describe;
    console.log("Initializing", describe());
})(Settings || (Settings = {}));
console.log("Initialized", Settings.describe());
