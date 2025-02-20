
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


interface AutohrInterface extends UserInterface{
    type : "authorise",
    signInuser : string
}

interface  LogedInInterface  extends UserInterface{
    type : "logedIn",
    logedInUser: string
}

// Check Types Guird 


function  onOtherWiebsite(user : UserInterface){

    if(user.type === 'authorise'){

        return (user as AutohrInterface).signInuser
    }

    if(user.type === 'logedIn'){

        return (user as LogedInInterface ).logedInUser
    }
}