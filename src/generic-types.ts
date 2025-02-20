interface PonyModel  {
    name: string;
color: string;
speed: number;
}

// get key of  pony model  interface object 

type PonyModelKeys = keyof PonyModel;
 
//console.log(PonyModelKeys); // name | color | speed


function getPonyModelKeys(obj : PonyModel,key: PonyModelKeys) : any {

    return obj[key];
}


let pony : PonyModel = {
    name: 'Twilight Sparkle',
    color: 'purple',
    speed: 100
}

console.log(getPonyModelKeys(pony,'name')); // Twilight Sparkle
console.log(getPonyModelKeys(pony,'color')); // purple
 console.log(getPonyModelKeys(pony,'speed')); // 100



 // Generic type methods 

 function getPonyModelGeneric<T, k extends keyof T>(obj : T,key:  k) : T[k] {

    return obj[key];

 }

 function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
    }

    getPonyModelGeneric(pony,'name') 



    