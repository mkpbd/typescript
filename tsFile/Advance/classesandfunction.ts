class Animal { }
class Bird extends Animal {
    chirp() { }
}
class Crow extends Bird {
    caw() { }
}

function chirp(bird: Bird): Bird {
    bird.chirp()
    return bird
}

///chirp(new Animal) // Error TS2345: Argument of type 'Animal' is not assignable
chirp(new Bird) // to parameter of type 'Bird'.
chirp(new Crow)

// function clone(f: (b: Bird) => Bird): void {
//     // ...
// }
function birdToBird(b: Bird): Bird {
    b.chirp();
    return b;
}
clone(birdToBird) // OK

function clone(f: (b: Bird) => Bird): void {
    let parent = new Bird
    let babyBird = f(parent)
    babyBird.chirp()
}

function animalToBird(a: Animal): Bird {
    // ...
    return new Bird();
}
// clone(animalToBird) // OK
// function crowToBird(c: Crow): Bird {
//     // ...

//     return new Crow();
// }


function crowToBird(c: Crow): Bird {
    c.caw()
    return new Bird
}


function xxx() {
    let a = null // any
    a = 3 // any
    a = 'b' // any
    return a
}
xxx()

type Options = {
    baseURL: string
    cacheSize?: number
    tier?: 'prod' | 'dev'
}
class API {
    constructor(private options: Options) { }
}
new API({
    baseURL: 'https://api.mysite.com',
    tier: 'prod'
})

new API({
    baseURL: 'https://api.mysite.com',
    // tierr: 'prod' // Error TS2345: Argument of type '{tierr: string}'
})

new API({
    baseURL: 'https://api.mysite.com',
    badTier: 'prod'
} as Options)
let badOptions = {
    baseURL: 'https://api.mysite.com',
    badTier: 'prod'
}
new API(badOptions)

// We use a union of string literals to describe
// the possible values a CSS unit can have
type Unit = 'cm' | 'px' | '%'
// Enumerate the units
let units: Unit[] = ['cm', 'px', '%']
function parseUnit(value: string): Unit | null {
    for (let i = 0; i < units.length; i++) {
        if (value.endsWith(units[i])) {
            return units[i]
        }
    }
    return null
}


type Width = {
    unit: Unit,
    value: number
}
function parseWidth(width: number | string | null | undefined): Width | null {
    // If width is null or undefined, return early
    if (width == null) {
        return null
    }
    // If width is a number, default to pixels
    if (typeof width === 'number') {
        return { unit: 'px', value: width }
    }
    // Try to parse a unit from width
    let unit = parseUnit(width)
    if (unit) {
        return { unit, value: parseFloat(width) }
    }
    // Otherwise, return null
    return null
}



type UserTextEvent = { value: string }
type UserMouseEvent = { value: [number, number] }
type UserEvent = UserTextEvent | UserMouseEvent
function handle(event: UserEvent) {
    if (typeof event.value === 'string') {
        event.value // string
        // ...
        return
    }
    event.value // [number, number]
}


type UserTextEvents = { value: string, target: HTMLInputElement }
type UserMouseEvents = { value: [number, number], target: HTMLElement }
type UserEvents = UserTextEvents | UserMouseEvents
function handles(event: UserEvents) {
    if (typeof event.value === 'string') {
        event.value // string
        event.target // HTMLInputElement | HTMLElement (!!!)
        // ...
        return
    }
    event.value // [number, number]
    event.target // HTMLInputElement | HTMLElement (!!!)
}


type UserTextEventss = { type: 'TextEvent', value: string, target: HTMLInputElement }
type UserMouseEventss = {
    type: 'MouseEvent', value: [number, number],
    target: HTMLElement
}
type UserEventss = UserTextEventss | UserMouseEventss
function handle3(event: UserEventss) {
    if (event.type === 'TextEvent') {
        event.value // string
        event.target // HTMLInputElement
        // ...
        return
    }
    event.value // [number, number]
    event.target // HTMLElement
}


type APIResponse = {
    user: {
        userId: string
        friendList: {
            count: number
            friends: {
                firstName: string
                lastName: string
            }[]
        }
    }
}
// You might fetch that response from the API, then render it:
function getAPIResponse(): Promise<APIResponse> {
    // ...
    return new Promise<APIResponse>((resolve, reject) => { }).then((a) => a);
}
function renderFriendList(friendList: unknown) {
    // ...
}
let response = getAPIResponse()
// renderFriendList(response.user.friendList)