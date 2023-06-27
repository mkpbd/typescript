"use strict";
class Animal {
}
class Bird extends Animal {
    chirp() { }
}
class Crow extends Bird {
    caw() { }
}
function chirp(bird) {
    bird.chirp();
    return bird;
}
///chirp(new Animal) // Error TS2345: Argument of type 'Animal' is not assignable
chirp(new Bird); // to parameter of type 'Bird'.
chirp(new Crow);
// function clone(f: (b: Bird) => Bird): void {
//     // ...
// }
function birdToBird(b) {
    b.chirp();
    return b;
}
clone(birdToBird); // OK
function clone(f) {
    let parent = new Bird;
    let babyBird = f(parent);
    babyBird.chirp();
}
function animalToBird(a) {
    // ...
    return new Bird();
}
// clone(animalToBird) // OK
// function crowToBird(c: Crow): Bird {
//     // ...
//     return new Crow();
// }
function crowToBird(c) {
    c.caw();
    return new Bird;
}
function xxx() {
    let a = null; // any
    a = 3; // any
    a = 'b'; // any
    return a;
}
xxx();
class API {
    constructor(options) {
        this.options = options;
    }
}
new API({
    baseURL: 'https://api.mysite.com',
    tier: 'prod'
});
new API({
    baseURL: 'https://api.mysite.com',
    // tierr: 'prod' // Error TS2345: Argument of type '{tierr: string}'
});
new API({
    baseURL: 'https://api.mysite.com',
    badTier: 'prod'
});
let badOptions = {
    baseURL: 'https://api.mysite.com',
    badTier: 'prod'
};
new API(badOptions);
// Enumerate the units
let units = ['cm', 'px', '%'];
function parseUnit(value) {
    for (let i = 0; i < units.length; i++) {
        if (value.endsWith(units[i])) {
            return units[i];
        }
    }
    return null;
}
function parseWidth(width) {
    // If width is null or undefined, return early
    if (width == null) {
        return null;
    }
    // If width is a number, default to pixels
    if (typeof width === 'number') {
        return { unit: 'px', value: width };
    }
    // Try to parse a unit from width
    let unit = parseUnit(width);
    if (unit) {
        return { unit, value: parseFloat(width) };
    }
    // Otherwise, return null
    return null;
}
function handle(event) {
    if (typeof event.value === 'string') {
        event.value; // string
        // ...
        return;
    }
    event.value; // [number, number]
}
function handles(event) {
    if (typeof event.value === 'string') {
        event.value; // string
        event.target; // HTMLInputElement | HTMLElement (!!!)
        // ...
        return;
    }
    event.value; // [number, number]
    event.target; // HTMLInputElement | HTMLElement (!!!)
}
function handle3(event) {
    if (event.type === 'TextEvent') {
        event.value; // string
        event.target; // HTMLInputElement
        // ...
        return;
    }
    event.value; // [number, number]
    event.target; // HTMLElement
}
// You might fetch that response from the API, then render it:
function getAPIResponse() {
    // ...
    return new Promise((resolve, reject) => { }).then((a) => a);
}
function renderFriendList(friendList) {
    // ...
}
let response = getAPIResponse();
// renderFriendList(response.user.friendList)
