
interface PonyModels {
    name: string;
    color: string;
    speed: number;
}


function getPonyPropertyModel(T: any, s: string): any {
    return T[s];
}


const ponys: PonyModels = {
    name: 'Rainbow Dash',
    color: 'blue',
    speed: 45
};
const nameValue = getPonyPropertyModel(ponys, 'name');

console.log(nameValue);



function getPomymodelWithPropertyKey<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];


}


const ponyModelKeys = getPomymodelWithPropertyKey(ponys, 'color');


// partial pony models 

interface PartialPonyModel1 {
    name?: string;
    color?: string;
    speed?: number;
}
const pony1: PartialPonyModel1 = {
    name: 'Rainbow Dash'
};


type Partial1<T> = {
    [P in keyof T]?: T[P]
}


// Ready onlys 

const ponymodelReadOnly: Readonly<PonyModels> = {
    name: "kamal",
    color: 'blue',
    speed: 50,
}


// picks 

const ponyPicks: Pick<PonyModels, 'color' | 'name'> = {
    color: 'red',
    name: 'hair'
}


// Record Types 

interface FormalValues {
    value: string,
    valid: boolean

}

const ponyRecordTypes: Record<keyof PonyModels, FormalValues> = {
    color: { valid: false, value: "abc" },
    name: { valid: true, value: " This value is true for us" },
    speed: { valid: true, value: "this is  spreed values" }
}


// Union types and type guards 

interface UserInterface {
    type: "authorise" | "logedIn" | "signIN",
    name: string
}


interface AutohrInterface extends UserInterface {
    type: "authorise",
    signInuser: string
}

interface LogedInInterface extends UserInterface {
    type: "logedIn",
    logedInUser: string
}

// Check Types Guird 


function onOtherWiebsite(user: UserInterface) {

    if (user.type === 'authorise') {

        return (user as AutohrInterface).signInuser
    }

    if (user.type === 'logedIn') {

        return (user as LogedInInterface).logedInUser
    }
}

// other way 


function isAuthenticatdUser(user: UserInterface): user is AutohrInterface {

    return user.type === "authorise";
}


function isLogdInUser(user: UserInterface): user is LogedInInterface {

    return user.type === 'logedIn';
}

function onWebsiteSince(user: UserInterface): number {
    if (isAuthenticatdUser(user)) {
        // this is inferred as a LoggedUser
        return user.signInuser.length;
    } else if (isLogdInUser(user)) {
        // this is inferred as an AnonymousUser
        return user.logedInUser.length;
    }
    // TS still doesn't know every possibility was covered
    // so we have to return something here
    return 0;
}




interface BaseUser {
    name: string;
    // other fields
}
interface AuthenticatedUser extends BaseUser {
    type: 'authenticated';
    loggedSince: number;
}
interface AnonymousUser extends BaseUser {
    type: 'anonymous';
    visitingSince: number;
}
type User1 = AuthenticatedUser | AnonymousUser;
function onWebsiteSince1(user: User1): number {
    if (user.type === 'authenticated') {
        // this is inferred as a LoggedUser
        return user.loggedSince;
    } else {
        // this is narrowed as an AnonymousUser
        // without even testing the type!
        return user.visitingSince;
    }
    // no need to return a default value
    // as TS knows that we covered every possibility!
}



interface AdminUser extends BaseUser {
    type: 'admin';
    adminSince: number;
}
type User2 = AuthenticatedUser | AnonymousUser | AdminUser;
function onWebsiteSince2(user: User2): number {
    switch (user.type) {
        case 'authenticated':
            return user.loggedSince;
        case 'anonymous':
            return user.visitingSince;
        case 'admin':
            // without this case, we could not even compile the code
            // as TS would complain that all possible paths are not returning a  value
            return user.adminSince;
    }
}